import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BaseButtonProps = {
  children: React.ReactNode;
  variant?: "light" | "dark";
  size?: "default" | "small";
  withArrow?: boolean;
  className?: string;
  href?: string;
  external?: boolean;
};

type ButtonAsButton = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    href?: never;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    href: string;
    external?: boolean;
  };

type MinimalButtonProps = ButtonAsButton | ButtonAsLink;

const MinimalButton = ({
  children,
  className,
  variant = "light",
  size = "default",
  withArrow = true,
  href,
  external,
  ...props
}: MinimalButtonProps) => {
  const baseStyles = cn(
    "inline-flex items-center justify-center relative overflow-hidden rounded-full transition-all duration-300",
    "before:absolute before:inset-0 before:transition-transform before:duration-500 before:ease-out",
    size === "default"
      ? "px-8 py-4 hover:pr-12"
      : "px-6 py-2.5 text-sm hover:pr-10",
    variant === "light"
      ? "bg-white text-black before:bg-[#f4d03f]"
      : "bg-[#f4d03f] text-black before:bg-white",
    "before:-translate-x-full hover:before:translate-x-0",
    className
  );

  const content = (
    <>
      <span className="relative z-10 font-medium tracking-wide text-sm uppercase">
        {children}
      </span>
      {withArrow && (
        <span
          className={cn(
            "absolute top-1/2 -translate-y-1/2 transition-all duration-300 z-10 opacity-0 group-hover:opacity-100",
            size === "default" ? "right-6" : "right-4"
          )}
        >
          <svg
            width={size === "default" ? "20" : "16"}
            height={size === "default" ? "20" : "16"}
            viewBox="0 0 45 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transform transition-transform duration-300 group-hover:translate-x-1"
          >
            <path
              d="M43.7678 20.7678C44.7441 19.7915 44.7441 18.2085 43.7678 17.2322L27.8579 1.32233C26.8816 0.34602 25.2986 0.34602 24.3223 1.32233C23.346 2.29864 23.346 3.88155 24.3223 4.85786L38.4645 19L24.3223 33.1421C23.346 34.1184 23.346 35.7014 24.3223 36.6777C25.2986 37.654 26.8816 37.654 27.8579 36.6777L43.7678 20.7678ZM0 21.5L42 21.5V16.5L0 16.5L0 21.5Z"
              fill="currentColor"
            />
          </svg>
        </span>
      )}
    </>
  );

  const buttonStyles = cn(baseStyles, "group");

  if (href) {
    const linkProps = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;

    if (external) {
      return (
        <a
          href={href}
          className={buttonStyles}
          target="_blank"
          rel="noopener noreferrer"
          {...linkProps}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonStyles} {...linkProps}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={buttonStyles}
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
};

export default MinimalButton;
