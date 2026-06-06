import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { projects, type Project } from "@/data/projects";
import { bold } from "@/lib/bold";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    if (!p) return {};
    return {
      meta: [
        { title: `${p.title} — Shahrad Zomorrodi` },
        { name: "description", content: p.summary },
        { property: "og:title", content: `${p.title} — Shahrad Zomorrodi` },
        { property: "og:description", content: p.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${p.slug}` },
        { property: "og:image", content: p.cover },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/projects/${p.slug}` }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <div className="container-page py-32 text-center">
        <p className="eyebrow mb-3">404</p>
        <h1 className="font-display text-3xl font-semibold">Project not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary">
          ← Back home
        </Link>
      </div>
      <SiteFooter />
    </div>
  ),
  errorComponent: ({ error, reset }) => {
    console.error(error);
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <div className="container-page py-32 text-center">
          <h1 className="font-display text-2xl font-semibold">This page didn't load.</h1>
          <button onClick={reset} className="mt-6 text-primary">
            Try again
          </button>
        </div>
        <SiteFooter />
      </div>
    );
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="container-page pt-12 md:pt-16 pb-20">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden>←</span> All projects
          </Link>

          <header className="mt-8 md:mt-10 max-w-4xl">
            <p className="eyebrow mb-4">
              {project.index} · {project.category}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
              {project.title}
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted-foreground">
              {project.org} · <span className="font-mono text-sm">{project.date}</span>
            </p>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 leading-relaxed max-w-3xl">
              {bold(project.summary)}
            </p>
          </header>

          {/* Stat strip */}
          <dl className="mt-10 grid grid-cols-3 gap-px bg-rule rounded-2xl overflow-hidden border border-rule">
            {project.stats.map((s) => (
              <div key={s.label} className="bg-surface p-5 md:p-7">
                <dt className="font-display text-2xl md:text-4xl font-semibold tracking-tight">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-xs md:text-sm text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>

          {/* Image gallery */}
          <div className="mt-12 grid md:grid-cols-2 gap-5 md:gap-6">
            {project.images.map((img) => (
              <figure key={img.src} className="card-elev overflow-hidden">
                <div className="aspect-[4/3] bg-surface-2 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="p-4 text-sm text-muted-foreground border-t border-rule">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* What / How / Results */}
          <div className="mt-16 grid lg:grid-cols-3 gap-10 lg:gap-14">
            <Block title="What" items={project.what} />
            <Block title="How" items={project.how} />
            <Block title="Results" items={project.results} />
          </div>

          {/* Tools */}
          <div className="mt-16 pt-10 hairline">
            <p className="eyebrow mb-4">Tools & methods</p>
            <ul className="flex flex-wrap gap-2">
              {project.tools.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-rule bg-surface px-3.5 py-1.5 text-sm"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Next project */}
          <Link
            to="/projects/$slug"
            params={{ slug: next.slug }}
            className="mt-20 card-elev p-8 md:p-10 flex items-center justify-between gap-6 group hover:border-foreground/30 transition-colors"
          >
            <div>
              <p className="eyebrow">Next project</p>
              <p className="mt-2 font-display text-xl md:text-2xl font-semibold tracking-tight">
                {next.title}
              </p>
            </div>
            <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}

function Block({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-4">{title}</p>
      <ul className="space-y-3 text-base text-foreground/85 leading-relaxed">
        {items.map((it) => (
          <li key={it} className="flex gap-3">
            <span className="mt-2.5 inline-block h-1 w-1 rounded-full bg-primary shrink-0" />
            <span>{bold(it)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
