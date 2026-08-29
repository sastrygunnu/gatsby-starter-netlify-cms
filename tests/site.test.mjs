import assert from "node:assert/strict";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const experience = JSON.parse(readFileSync(join(root, "data/experience.json"), "utf8"));
const site = JSON.parse(readFileSync(join(root, "data/site.json"), "utf8"));

test("home copy does not pitch the current employer", () => {
  const home = readFileSync(join(root, "app/page.tsx"), "utf8");
  const siteJson = readFileSync(join(root, "data/site.json"), "utf8");
  assert.doesNotMatch(home, /Gaps and Bridges/);
  assert.doesNotMatch(siteJson, /Gaps and Bridges/);
  assert.doesNotMatch(site.thesis.join(" "), /Mobile Technical Architect/);
});

test("experience matches LinkedIn employer order and titles", () => {
  assert.deepEqual(
    experience.roles.map((role) => ({ company: role.company, title: role.title })),
    [
      { company: "Gaps and Bridges Inc.", title: "Mobile Technical Architect" },
      { company: "Temenos", title: "Principal Technical Consultant" },
      { company: "Prithvi Information Solutions Ltd", title: "Sr. Software Engineer" },
      {
        company: "NINE DEGREE SOFTWARE SOLUTIONS PRIVATE LIMITED",
        title: "Founder",
      },
    ],
  );
});

test("does not invent a separate Kony job", () => {
  assert.equal(
    experience.roles.some((role) => role.company.toLowerCase() === "kony"),
    false,
  );
});

test("Gaps and Bridges dates and location are present; earlier roles omit guessed dates", () => {
  const [current, temenos, prithvi, founder] = experience.roles;
  assert.equal(current.dates, "Mar 2023 – Present");
  assert.equal(current.location, "Dallas–Fort Worth");
  assert.equal(temenos.dates, "Dec 2012 – Feb 2023");
  assert.equal(prithvi.dates, null);
  assert.equal(founder.dates, null);
});

test("education, TOGAF, and patents match the stated record", () => {
  assert.equal(experience.education[0].school, "The University of Texas at Austin");
  assert.match(
    experience.education[0].program,
    /Artificial Intelligence and Machine Learning/,
  );
  assert.equal(experience.education[0].dates, "Dec 2025");
  assert.equal(experience.credentials[0].name, "TOGAF Enterprise Architecture Practitioner");
  assert.equal(experience.credentials[0].dates, "Jul 2024");
  assert.deepEqual(
    experience.patents.map((patent) => patent.number),
    ["63/993,650", "63/946,181"],
  );
});

test("profile links are the canonical accounts", () => {
  assert.equal(site.links.linkedin, "https://www.linkedin.com/in/sastry-kasibotla/");
  assert.equal(site.links.x, "https://x.com/SastryKasibotla");
  assert.equal(site.links.github, "https://github.com/sastrygunnu");
});

test("writing includes the five required essays", () => {
  const files = readdirSync(join(root, "content/writing")).filter((name) => name.endsWith(".md"));
  assert.deepEqual(files.sort(), [
    "an-ai-that-always-answers-is-a-risk.md",
    "core-integration-around-business-state.md",
    "mobile-architecture-for-change.md",
    "observability-for-banking-ai.md",
    "onboarding-designed-for-recovery.md",
  ]);
});
