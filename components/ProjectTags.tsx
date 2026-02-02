import clsx from "clsx";

// TODO: Turn into a global config
const LANGUAGES = ["JavaScript", "TypeScript", "Python"] as const;

const FRONTEND = ["React", "Tailwind CSS", "Vite", "Material UI"] as const;

const BACKEND = ["Node.js", "Express", "Clerk", "MongoDB", "REST API"] as const;

// TODO: Something fancy for full stack?
const FULL_STACK = ["Next.js"] as const;

const OTHER = [
  "Netlify",
  "Vercel",
  "Serverless Functions",
  "Blog Storage",
] as const;

const ROLES = ["language", "frontend", "backend", "other"] as const;

const ROLE_STYLES: Record<(typeof ROLES)[number], string> = {
  language: "bg-blue",
  frontend: "bg-red",
  backend: "bg-green",
  other: "bg-beige",
};

const determineRole = (technology: string): (typeof ROLES)[number] => {
  if (LANGUAGES.includes(technology as (typeof LANGUAGES)[number])) {
    return "language";
  }
  if (FRONTEND.includes(technology as (typeof FRONTEND)[number])) {
    return "frontend";
  }
  if (BACKEND.includes(technology as (typeof BACKEND)[number])) {
    return "backend";
  }
  if (FULL_STACK.includes(technology as (typeof FULL_STACK)[number])) {
    return "backend";
  }
  return "other";
};

function ProjectTag({ item }: { item: string }) {
  const role = determineRole(item);
  return (
    <li
      className={clsx(
        "inline-block px-3 py-1 text-xs font-semibold rounded-full dark:text-dark-black",
        ROLE_STYLES[role] || ROLE_STYLES.other,
      )}
    >
      {item}
    </li>
  );
}

export default function ProjectTags({
  technologies,
}: {
  technologies: string;
}) {
  const techArray = technologies.split(",").map((tech) => tech.trim());
  return (
    <ul className="flex flex-wrap gap-2 m-0! p-0!">
      {techArray.map((item: string, index: number) => (
        <ProjectTag key={index} item={item} />
      ))}
    </ul>
  );
}
