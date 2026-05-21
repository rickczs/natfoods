import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light";
  className?: string;
  target?: string;
  rel?: string;
};

const styles = {
  primary: "bg-banana text-forest-900 hover:bg-[#ffd84e]",
  secondary: "bg-forest-800 text-white hover:bg-forest-700",
  outline: "border border-forest-700/20 bg-white text-forest-900 hover:border-forest-700/50",
  light: "border border-white/20 bg-white/10 text-white hover:bg-white/18"
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  target,
  rel
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-extrabold transition ${styles[variant]} ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
