import Link from "next/link";
import { Avatar } from "@/components/Avatar";
import { site } from "@/lib/site";

const nav = [
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Link href="/" className="brand">
        <Avatar size="sm" />
        <span className="brand-name">{site.name}</span>
      </Link>
      <nav className="nav" aria-label="Primary">
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
