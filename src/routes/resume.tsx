import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { profile, experience, skills, projects } from "@/data/projects";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Shahrad Zomorrodi" },
      {
        name: "description",
        content:
          "ATS-friendly resume of Shahrad Zomorrodi: mechanical engineering education, experience, projects, and skills.",
      },
      { property: "og:title", content: "Resume | Shahrad Zomorrodi" },
      {
        property: "og:description",
        content: "Mechanical engineering resume: education, experience, projects, and skills.",
      },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: ResumePage,
});

// Strip **bold** markers for plain ATS text.
const plain = (s: string) => s.replace(/\*\*/g, "");

const education = [
  {
    school: "University of California, San Diego",
    degree: "B.S. Mechanical Engineering",
    date: "Expected March 2027",
    location: "La Jolla, CA",
  },
];

function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="container-page py-12 md:py-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
              <p className="eyebrow">Resume</p>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-rule bg-surface px-3.5 py-1.5 text-sm font-medium hover:border-foreground/40 transition-colors"
              >
                Download PDF <span aria-hidden>↗</span>
              </a>
            </div>

            <article className="resume bg-surface border border-rule rounded-2xl p-8 md:p-12 text-foreground print:border-0 print:p-0 print:bg-transparent">
              {/* Header */}
              <header className="border-b border-rule pb-5 mb-6">
                <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                  {profile.name}
                </h1>
                <p className="mt-1 text-base text-muted-foreground">
                  {profile.role} · {profile.school}
                </p>
                <p className="mt-3 text-sm text-foreground/90 flex flex-wrap gap-x-4 gap-y-1">
                  <a className="hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                  <a
                    className="hover:underline"
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/shahradzomorrodi
                  </a>
                  <a
                    className="hover:underline"
                    href={profile.portfolio}
                    target="_blank"
                    rel="noreferrer"
                  >
                    shahradzomorrodi.com
                  </a>
                </p>
              </header>

              {/* Education */}
              <Section title="Education">
                {education.map((e) => (
                  <div key={e.school} className="mb-3">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-semibold">{e.school}</h3>
                      <span className="text-sm text-muted-foreground">{e.date}</span>
                    </div>
                    <p className="text-sm">
                      {e.degree} · {e.location}
                    </p>
                  </div>
                ))}
              </Section>

              {/* Experience */}
              <Section title="Experience">
                {experience.map((job) => (
                  <div key={job.role + job.date} className="mb-5">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="font-semibold">
                        {job.role}, {job.company}
                      </h3>
                      <span className="text-sm text-muted-foreground">{job.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">{job.location}</p>
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm leading-relaxed">
                      {job.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Section>

              {/* Projects */}
              <Section title="Projects">
                <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                  {projects.map((p) => (
                    <li key={p.slug}>
                      <span className="font-semibold">{p.title}</span> ({p.date}) —{" "}
                      {plain(p.summary)}
                    </li>
                  ))}
                </ul>
              </Section>

              {/* Skills */}
              <Section title="Skills">
                <dl className="space-y-2 text-sm">
                  {Object.entries(skills).map(([group, items]) => (
                    <div key={group} className="flex flex-col sm:flex-row sm:gap-3">
                      <dt className="font-semibold sm:w-56 shrink-0">{group}:</dt>
                      <dd>{items.join(", ")}</dd>
                    </div>
                  ))}
                </dl>
              </Section>
            </article>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-6">
      <h2 className="font-display text-lg font-semibold uppercase tracking-wider border-b border-rule pb-1 mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}
