import { BrandMark } from "./BrandMark";

export function Footer() {
  return (
    <footer className="border-t border-vera-border bg-vera-mist py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <BrandMark variant="onLight" size="sm" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-vera-muted">
            Your personal AI companion for understanding and managing IBD.
          </p>
        </div>
        <div className="max-w-md text-sm leading-relaxed text-vera-muted">
          <p>
            Vera is designed to support patients between appointments. It does
            not provide medical advice and does not replace licensed healthcare
            professionals.
          </p>
          <p className="mt-4 text-xs text-vera-muted/80">
            © {new Date().getFullYear()} Vera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
