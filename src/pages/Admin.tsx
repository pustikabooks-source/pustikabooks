import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  adminVerify,
  setAdminPassword,
  getAdminPassword,
  clearAdminPassword,
  adminListPosts,
  adminCreatePost,
  adminUpdatePost,
  adminDeletePost,
  adminTogglePublish,
} from "@/lib/blog";
import type { BlogPost } from "@/content/posts";

type AdminPost = BlogPost & { id: string; published: boolean };

const EMPTY_FORM = {
  id: "",
  slug: "",
  title: "",
  description: "",
  date: new Date().toISOString().slice(0, 10),
  reading_minutes: 5,
  tagsCsv: "",
  bodyJson: "[]",
  published: false,
};

export default function Admin() {
  const [authed, setAuthed] = useState(false);
  const [pwInput, setPwInput] = useState("");
  const [pwError, setPwError] = useState("");
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  // Auto-login if password is cached
  useEffect(() => {
    const pw = getAdminPassword();
    if (!pw) return;
    adminVerify(pw).then((ok) => {
      if (ok) setAuthed(true);
      else clearAdminPassword();
    });
  }, []);

  useEffect(() => {
    if (authed) refresh();
  }, [authed]);

  async function refresh() {
    setLoading(true);
    try {
      const list = await adminListPosts();
      setPosts(list as AdminPost[]);
    } catch (e) {
      setStatus((e as Error).message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setPwError("");
    const ok = await adminVerify(pwInput);
    if (ok) {
      setAdminPassword(pwInput);
      setAuthed(true);
    } else {
      setPwError("Incorrect password.");
    }
  }

  function logout() {
    clearAdminPassword();
    setAuthed(false);
    setPwInput("");
  }

  function resetForm() {
    setForm(EMPTY_FORM);
    setEditingId(null);
    setStatus("");
  }

  function loadIntoForm(p: AdminPost) {
    setEditingId(p.id);
    setForm({
      id: p.id,
      slug: p.slug,
      title: p.title,
      description: p.description,
      date: p.date,
      reading_minutes: p.readingMinutes,
      tagsCsv: p.tags.join(", "),
      bodyJson: JSON.stringify(p.body, null, 2),
      published: p.published,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function save(publish?: boolean) {
    setStatus("");
    let body: unknown;
    try {
      body = JSON.parse(form.bodyJson || "[]");
      if (!Array.isArray(body)) throw new Error("Body must be a JSON array");
    } catch (e) {
      setStatus("Body JSON invalid: " + (e as Error).message);
      return;
    }
    const payload = {
      title: form.title,
      description: form.description,
      date: form.date,
      reading_minutes: Number(form.reading_minutes) || 5,
      tags: form.tagsCsv.split(",").map((t) => t.trim()).filter(Boolean),
      body,
      published: publish ?? form.published,
      slug: form.slug || undefined,
    };
    try {
      if (editingId) {
        await adminUpdatePost({ id: editingId, ...payload });
        setStatus("Post updated.");
      } else {
        await adminCreatePost(payload);
        setStatus("Post created.");
      }
      resetForm();
      refresh();
    } catch (e) {
      setStatus((e as Error).message);
    }
  }

  async function togglePublish(p: AdminPost) {
    await adminTogglePublish(p.id, !p.published);
    refresh();
  }

  async function remove(p: AdminPost) {
    if (!confirm(`Delete "${p.title}"? This cannot be undone.`)) return;
    await adminDeletePost(p.id);
    refresh();
  }

  const bodyHint = useMemo(
    () =>
      `Body is a JSON array of blocks. Supported block types:
{"type":"p","text":"paragraph"}
{"type":"h2","text":"Heading"}
{"type":"ul","items":["a","b"]}
{"type":"quote","text":"quote"}
{"type":"stat","value":"₹25,000","label":"label"}
{"type":"table","headers":["A","B"],"rows":[["1","2"]]}
{"type":"image","url":"https://...","alt":"alt","caption":"optional"}
{"type":"youtube","videoId":"abc123","title":"title"}`,
    []
  );

  if (!authed) {
    return (
      <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
        <Helmet>
          <title>Admin Login | Pustika Books</title>
          <meta name="robots" content="noindex,nofollow" />
        </Helmet>
        <form
          onSubmit={handleLogin}
          className="w-full max-w-sm bg-card border border-border rounded-3xl p-8 shadow-card"
        >
          <h1 className="text-2xl font-black tracking-tight">Admin access</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Enter the admin password to manage blog posts.
          </p>
          <input
            type="password"
            value={pwInput}
            onChange={(e) => setPwInput(e.target.value)}
            placeholder="Password"
            autoFocus
            className="mt-5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
          />
          {pwError && <p className="mt-2 text-sm text-red-600">{pwError}</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-xl bg-brand-purple px-4 py-3 text-sm font-bold text-white hover:opacity-90"
          >
            Sign in
          </button>
        </form>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Blog Admin | Pustika Books</title>
        <meta name="robots" content="noindex,nofollow" />
      </Helmet>

      <header className="border-b border-border bg-card">
        <div className="mx-auto max-w-5xl px-6 py-5 flex items-center justify-between">
          <h1 className="font-black text-xl">
            Blog Admin<span className="text-brand-purple">.</span>
          </h1>
          <div className="flex items-center gap-3 text-sm">
            <a href="/blog" className="text-muted-foreground hover:text-foreground">View blog</a>
            <button onClick={logout} className="font-semibold text-brand-purple hover:underline">
              Log out
            </button>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-10 space-y-10">
        {/* Editor */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold">
              {editingId ? "Edit post" : "Create new post"}
            </h2>
            {editingId && (
              <button
                onClick={resetForm}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                + New post instead
              </button>
            )}
          </div>

          <div className="mt-5 grid gap-4">
            <Field label="Title">
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className={inputCls}
              />
            </Field>
            <Field label="Slug (optional — auto from title)">
              <input
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                placeholder="my-post-slug"
                className={inputCls}
              />
            </Field>
            <Field label="Description">
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={2}
                className={inputCls}
              />
            </Field>
            <div className="grid sm:grid-cols-3 gap-4">
              <Field label="Date">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className={inputCls}
                />
              </Field>
              <Field label="Reading minutes">
                <input
                  type="number"
                  min={1}
                  value={form.reading_minutes}
                  onChange={(e) =>
                    setForm({ ...form, reading_minutes: Number(e.target.value) })
                  }
                  className={inputCls}
                />
              </Field>
              <Field label="Tags (comma separated)">
                <input
                  value={form.tagsCsv}
                  onChange={(e) => setForm({ ...form, tagsCsv: e.target.value })}
                  placeholder="ebooks, india, beginners"
                  className={inputCls}
                />
              </Field>
            </div>
            <Field label="Body (JSON blocks)">
              <textarea
                value={form.bodyJson}
                onChange={(e) => setForm({ ...form, bodyJson: e.target.value })}
                rows={16}
                spellCheck={false}
                className={`${inputCls} font-mono text-xs`}
              />
              <pre className="mt-2 text-[11px] text-muted-foreground whitespace-pre-wrap">
                {bodyHint}
              </pre>
            </Field>
          </div>

          {status && (
            <p className="mt-4 text-sm text-brand-purple">{status}</p>
          )}

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={() => save(false)}
              className="rounded-xl bg-secondary px-5 py-2.5 text-sm font-bold hover:bg-secondary/80"
            >
              Save draft
            </button>
            <button
              onClick={() => save(true)}
              className="rounded-xl bg-brand-purple px-5 py-2.5 text-sm font-bold text-white hover:opacity-90"
            >
              {editingId ? "Save & publish" : "Publish"}
            </button>
          </div>
        </div>

        {/* Post list */}
        <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
          <h2 className="text-lg font-bold">All posts</h2>
          {loading ? (
            <p className="mt-4 text-sm text-muted-foreground">Loading…</p>
          ) : posts.length === 0 ? (
            <p className="mt-4 text-sm text-muted-foreground">No posts yet.</p>
          ) : (
            <ul className="mt-4 divide-y divide-border">
              {posts.map((p) => (
                <li key={p.id} className="py-4 flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-bold truncate">{p.title}</p>
                      <span
                        className={`text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full ${
                          p.published
                            ? "bg-green-100 text-green-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {p.published ? "Live" : "Draft"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">
                      /{p.slug} · {p.date}
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <button
                      onClick={() => loadIntoForm(p)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => togglePublish(p)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-secondary hover:bg-secondary/80"
                    >
                      {p.published ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => remove(p)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-red-50 text-red-600 hover:bg-red-100"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <div className="mt-1">{children}</div>
    </label>
  );
}