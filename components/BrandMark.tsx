import Image from "next/image";

type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: 36,
  md: 48,
  lg: 88,
};

export function BrandMark({ size = "md", className = "" }: BrandMarkProps) {
  const px = sizes[size];

  return (
    <Image
      src="/logo.png"
      alt="Vera"
      width={px}
      height={px}
      priority={size === "lg"}
      className={`rounded-lg ${className}`}
    />
  );
}
