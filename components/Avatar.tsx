import { site } from "@/lib/site";

type AvatarProps = {
  size?: "sm" | "md" | "lg";
};

export function Avatar({ size = "md" }: AvatarProps) {
  return (
    <span className={`avatar avatar-${size}`} aria-hidden="true">
      {site.initials}
    </span>
  );
}
