type BrandMarkProps = {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = {
  sm: { icon: 22, text: "text-lg" },
  md: { icon: 28, text: "text-xl" },
  lg: { icon: 40, text: "text-3xl md:text-4xl" },
};

function SproutIcon({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden
    >
      <path d="M32 8c-1.4 9.2-5.4 16.4-12 21.8C15.2 33.6 9.6 36 4 37c7.2 2 13.6-.4 18.6-4.8C26.8 28.6 29.8 23.4 32 16.8V8z" />
      <path d="M32 8c1.4 9.2 5.4 16.4 12 21.8 4.8 3.8 10.4 6.2 16 7.2-7.2 2-13.6-.4-18.6-4.8C37.2 28.6 34.2 23.4 32 16.8V8z" />
      <path d="M32 12c-.5 15.2-1.4 27.6-3 37.8-.5 2.8 1 5.2 3.6 5.2s4.1-2.4 3.6-5.2C34.6 39.6 33.2 27.2 32 12z" />
    </svg>
  );
}

export function BrandMark({
  variant = "dark",
  size = "md",
  className = "",
}: BrandMarkProps) {
  const s = sizes[size];
  const color = variant === "light" ? "text-white" : "text-vera-green";

  return (
    <span className={`inline-flex items-center gap-2 ${color} ${className}`}>
      <SproutIcon size={s.icon} />
      <span className={`font-semibold tracking-tight ${s.text}`}>Vera</span>
    </span>
  );
}
