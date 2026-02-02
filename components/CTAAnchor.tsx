import clsx from "clsx";

const VARIANT_STYLES = {
  primary:
    "bg-yellow hover:bg-dark-yellow border-yellow hover:border-dark-yellow dark:text-black",
  secondary:
    "bg-white hover:bg-yellow border-yellow dark:bg-[#F7EED0] dark:text-black",
};

export default function CTAAnchor({
  href,
  variant,
  className = "",
  children,
  isExternal = true,
  style = {},
  onClick = undefined,
}: {
  href: string;
  variant: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  isExternal?: boolean;
  style?: React.CSSProperties;
  onClick?: (() => void) | undefined;
}) {
  const styles = VARIANT_STYLES[variant];
  return (
    <a
      className={clsx(
        "flex items-center justify-center no-underline! w-full p-2 rounded-full border-2 text-sm text-center font-semibold",
        styles,
        className,
      )}
      href={href}
      onClick={onClick}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={style}
    >
      {children}
    </a>
  );
}
