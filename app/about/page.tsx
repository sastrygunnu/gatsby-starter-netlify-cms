import type { Metadata } from "next";
import { Experience } from "@/components/Experience";
import { experience } from "@/lib/experience";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `Experience, education, and writing by ${site.name}. Employers and titles match LinkedIn.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <header className="article-header">
        <h1 className="page-title">About</h1>
        <p className="lede">
          I have spent a career on the delivery side of digital banking: mobile apps that have to
          change, integrations that have to recover, and now AI that has to be safe to operate.
          I teach what that work actually looks like.
        </p>
      </header>

      <div className="stack">
        <section aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <Experience />
        </section>

        <section aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul className="plain-list">
            {experience.education.map((item) => (
              <li key={item.program}>
                <h3>{item.school}</h3>
                <p>{item.program}</p>
                <p>{item.dates}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="credentials-heading">
          <h2 id="credentials-heading">Credentials</h2>
          <ul className="plain-list">
            {experience.credentials.map((item) => (
              <li key={item.name}>
                <h3>{item.name}</h3>
                <p>
                  {item.issuer}
                  {item.dates ? ` · ${item.dates}` : ""}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="patents-heading">
          <h2 id="patents-heading">Patents</h2>
          <ul className="plain-list">
            {experience.patents.map((item) => (
              <li key={item.number}>
                <h3>{item.title}</h3>
                <p>
                  {item.kind} {item.number} · filed {item.filed}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="elsewhere-heading">
          <h2 id="elsewhere-heading">Elsewhere</h2>
          <p className="muted">
            <a href={site.links.linkedin} rel="me noopener noreferrer" target="_blank">
              LinkedIn
            </a>
            {" · "}
            <a href={site.links.x} rel="me noopener noreferrer" target="_blank">
              @{`SastryKasibotla`}
            </a>
            {" · "}
            <a href={site.links.github} rel="me noopener noreferrer" target="_blank">
              GitHub
            </a>
          </p>
        </section>
      </div>
    </>
  );
}
