import experience from "@/data/experience.json";

export type Role = (typeof experience.roles)[number];
export type Education = (typeof experience.education)[number];
export type Credential = (typeof experience.credentials)[number];
export type Patent = (typeof experience.patents)[number];

export { experience };
