export type SectionType =
  | "about"
  | "education"
  | "skills"
  | "contact"
  | "experience"
  | "projects"
  | "blog";

export type ActiveTarget = SectionType | string;


export type contactForm = {
  name: string;
  email: string;
  message: string;
}