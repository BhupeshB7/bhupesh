import { IconCloud } from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "reactnative",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "appwrite",
  "nginx",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "mongodb",
  "c",
  "cplusplus",
  "sql",
  "nosql",
  "rdbms",
  "algorithm",
  "os",
  "networking",
  "linux",
];

export function SkillsIcon() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="relative flex size-full items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}
