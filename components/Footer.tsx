import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <p className="footer-links">
        <a href={site.links.linkedin} rel="me noopener noreferrer" target="_blank">
          LinkedIn
        </a>
        <a href={site.links.x} rel="me noopener noreferrer" target="_blank">
          X
        </a>
        <a href={site.links.github} rel="me noopener noreferrer" target="_blank">
          GitHub
        </a>
        <a href="/rss.xml">RSS</a>
      </p>
      <p className="footer-copy">
        © {year} {site.name}
      </p>
    </footer>
  );
}
