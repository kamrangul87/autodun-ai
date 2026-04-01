import { cn } from "@/lib/utils";

interface LogoMarkProps {
  className?: string;
  size?: "sm" | "header" | "md" | "lg" | "xl" | "hero";
}

const sizeMap: Record<NonNullable<LogoMarkProps["size"]>, string> = {
  sm: "text-base",
  header: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  hero: "text-5xl",
};

export function LogoMark({ className, size = "md" }: LogoMarkProps) {
  return (
    <span
      className={cn(
        "font-bold tracking-tight select-none whitespace-nowrap",
        sizeMap[size],
        className
      )}
      style={{ color: "#ffffff" }}
    >
      <span style={{ color: "#00d48a" }}>⚡</span> AUTODUN
    </span>
  );
}
