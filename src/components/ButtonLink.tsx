import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "light" | "gold";
  className?: string;
  target?: string;
  rel?: string;
};

const styles = {
  primary: "bg-[#ff7800] text-white hover:bg-[#ec6f00]",
  secondary: "bg-organic-600 text-white hover:bg-organic-700",
  outline: "border border-forest-700/20 bg-white text-forest-900 hover:border-forest-700/50",
  light: "bg-organic-600 text-white hover:bg-organic-700",
  gold: "bg-[#b48a30] text-white hover:bg-[#9b762c]"
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
      className={`inline-flex min-h-[52px] min-w-0 items-center justify-center gap-2 rounded-md px-5 text-center text-sm font-extrabold leading-5 transition sm:min-h-[56px] sm:px-7 ${styles[variant]} ${className}`}
      href={href}
      target={target}
      rel={rel}
    >
      {children}
    </Link>
  );
}
