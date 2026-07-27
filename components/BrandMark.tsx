import Image from "next/image";

type BrandMarkProps = {
  /** onDark = white mark for green/dark surfaces; onLight = green mark for white surfaces */
  variant?: "onDark" | "onLight";
  size?: "sm" | "md" | "lg";
  className?: string;
};

// Source assets are ~206×274 (stacked sprout + wordmark)
const sizes = {
  sm: { width: 30, height: 40 },
  md: { width: 45, height: 60 },
  lg: { width: 90, height: 120 },
};

export function BrandMark({
  variant = "onLight",
  size = "md",
  className = "",
}: BrandMarkProps) {
  const { width, height } = sizes[size];
  const src = variant === "onDark" ? "/logo-white.png" : "/logo-green.png";

  return (
    <Image
      src={src}
      alt="Vera"
      width={width}
      height={height}
      priority={size === "lg"}
      className={`h-auto w-auto object-contain ${className}`}
      style={{ width, height }}
    />
  );
}
