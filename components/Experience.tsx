import { experience } from "@/lib/experience";

export function Experience() {
  return (
    <ol className="experience">
      {experience.roles.map((role) => (
        <li key={role.company}>
          <h3>{role.company}</h3>
          <p className="role-title">{role.title}</p>
          {(role.dates || role.location) && (
            <p className="role-meta">
              {role.dates ? <span>{role.dates}</span> : null}
              {role.dates && role.location ? <span aria-hidden="true"> · </span> : null}
              {role.location ? <span>{role.location}</span> : null}
            </p>
          )}
          {role.note ? <p className="role-note">{role.note}</p> : null}
          {role.honors.length > 0 ? (
            <ul className="honors">
              {role.honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
