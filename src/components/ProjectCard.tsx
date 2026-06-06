import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { bold } from "@/lib/bold";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className="group card-elev overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_color-mix(in_oklab,var(--color-foreground)_35%,transparent)]"
    >
      <div className="aspect-[4/3] overflow-hidden bg-surface-2">
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <div className="flex items-center justify-between">
          <span className="eyebrow">
            {project.index} · {project.category}
          </span>
          <span className="text-xs text-muted-foreground">{project.date}</span>
        </div>
        <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{bold(project.summary)}</p>
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {project.stats.slice(0, 3).map((s) => (
            <span
              key={s.label}
              className="inline-flex items-baseline gap-1.5 rounded-full bg-surface-2 px-2.5 py-1 text-xs"
            >
              <span className="font-display font-semibold text-foreground">{s.value}</span>
              <span className="text-muted-foreground">{s.label}</span>
            </span>
          ))}
        </div>
        <div className="pt-2 text-sm font-medium text-primary inline-flex items-center gap-1">
          View case study
          <span className="transition-transform group-hover:translate-x-0.5">→</span>
        </div>
      </div>
    </Link>
  );
}
