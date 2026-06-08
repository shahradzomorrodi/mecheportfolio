import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ProjectCard } from "@/components/ProjectCard";
import { profile, projects, skills, experience } from "@/data/projects";
import robotBuilt from "@/assets/robot-built.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shahrad Zomorrodi | Mechanical Engineering Portfolio" },
      {
        name: "description",
        content:
          "Mechanical engineering portfolio of Shahrad Zomorrodi (UC San Diego): competition robots, eVTOL drones, aerodynamics, thermal analysis, and mechanism design.",
      },
      { property: "og:title", content: "Shahrad Zomorrodi | Mechanical Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Selected mechanical engineering projects: robots, eVTOL UAVs, aerodynamics, heat transfer, and mechanism design.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: robotBuilt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: robotBuilt },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          jobTitle: "Mechanical Engineering Student",
          alumniOf: {
            "@type": "CollegeOrUniversity",
            name: profile.school,
          },
          sameAs: [profile.linkedin],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="container-page pt-16 md:pt-24 pb-12 md:pb-20">
      <div className="max-w-4xl">
        <p className="eyebrow mb-5 flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
          Mechanical Engineering · UC San Diego · Expected March 2027
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
          I design, build, and{" "}
          <span className="text-primary">measure</span> mechanical systems.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {profile.tagline}
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            to="/"
            hash="work"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See selected work
            <span aria-hidden>→</span>
          </Link>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            Download resume
            <span aria-hidden>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="container-page py-20 md:py-28 scroll-mt-20">
      <SectionHead eyebrow="Selected work" title="Projects" subtitle="Five case studies across robotics, UAV systems, aerodynamics, thermal, and mechanism design." />
      <div className="mt-12 grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="container-page py-20 md:py-28 scroll-mt-20">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHead eyebrow="About" title="Design. Analyze. Build. Test." />
        </div>
        <div className="lg:col-span-7 space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a mechanical engineering student at UC San Diego, graduating with a B.S. in March 2027. My work sits at the intersection of CAD, fabrication, and instrumented testing: I sketch a mechanism, run the numbers, and then verify the hardware behaves the way the analysis predicted.
          </p>
          <p>
            Recent projects include a competition robot, an eVTOL wildfire-response quadcopter, leading-edge slat aerodynamics on a NACA airfoil, and pin-fin heat-sink characterization. I'm currently seeking fall and winter internships in mechanical design, R&amp;D, aerospace, or thermal and fluid systems.
          </p>
          <div className="pt-4 grid sm:grid-cols-3 gap-6">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <p className="eyebrow mb-3">{group}</p>
                <ul className="space-y-1.5 text-sm text-foreground">
                  {items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="container-page py-20 md:py-28 scroll-mt-20">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <ol className="mt-12 space-y-px bg-rule rounded-2xl overflow-hidden border border-rule">
        {experience.map((e) => (
          <li key={e.role + e.date} className="bg-surface border-l-4 border-l-primary p-6 md:p-8 grid md:grid-cols-12 gap-4 transition-colors hover:bg-accent/40">
            <div className="md:col-span-4">
              <p className="font-display text-lg font-semibold leading-tight">{e.role}</p>
              <p className="text-sm text-muted-foreground mt-1">
                {e.company} · {e.location}
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-mono">{e.date}</p>
            </div>
            <ul className="md:col-span-8 space-y-2 text-sm md:text-base text-muted-foreground leading-relaxed">
              {e.bullets.map((b) => (
                <li key={b} className="flex gap-3">
                  <span className="mt-2 inline-block h-1 w-1 rounded-full bg-primary shrink-0" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            {e.spotlight && (
              <a
                href={e.spotlight.url}
                target="_blank"
                rel="noreferrer"
                className="md:col-span-8 md:col-start-5 inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/40 bg-primary/5 px-3 py-1 text-xs font-medium text-primary hover:bg-primary/10 transition-colors"
              >
                Featured in Gouvis Engineering's intern spotlight
                <span aria-hidden>↗</span>
              </a>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="container-page py-20 md:py-28 scroll-mt-20">
      <div className="card-elev p-8 md:p-12 lg:p-16 text-center">
        <p className="eyebrow">Let's build</p>
        <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight">
          Let's design something together.
        </h2>
        <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
          Mechanical design, aerospace, R&amp;D, thermal and fluid systems. Happy to chat about any of it.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            LinkedIn ↗
          </a>
          <a
            href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-rule bg-surface px-5 py-2.5 text-sm font-medium hover:border-foreground/40 transition-colors"
          >
            {profile.phone}
          </a>
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}
