import { Link } from "@tanstack/react-router";
import { profile } from "@/data/projects";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/75 border-b border-rule">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-foreground text-background font-display text-sm font-semibold">
            SZ
          </span>
          <span className="font-display font-semibold tracking-tight">
            Shahrad Zomorrodi
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/" hash="work" className="hover:text-foreground transition-colors">
            Work
          </Link>
          <Link to="/" hash="about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/" hash="experience" className="hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link to="/" hash="contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link to="/resume" className="hover:text-foreground transition-colors">
            Resume
          </Link>

        </nav>
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-rule bg-surface px-3.5 py-1.5 text-sm font-medium hover:border-foreground/40 transition-colors"
        >
          Resume
          <span aria-hidden>↗</span>
        </a>
      </div>
    </header>
  );
}
