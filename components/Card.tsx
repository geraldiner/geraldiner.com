import clsx from "clsx";

export const CARD_COLORS = ["red", "yellow", "green", "blue", "beige"] as const;

const BORDER_STYLES = {
  red: "border-red",
  yellow: "border-yellow",
  green: "border-green",
  blue: "border-blue",
  beige: "border-beige",
};

export enum DROP_SHADOW_DIRECTION {
  LEFT = "left",
  BOTTOM = "bottom",
}

const LEFT_DROP_SHADOW_STYLES: Record<(typeof CARD_COLORS)[number], string> = {
  red: "drop-shadow-[-8px_0_0_var(--color-red)]",
  yellow: "drop-shadow-[-8px_0_0_var(--color-yellow)]",
  green: "drop-shadow-[-8px_0_0_var(--color-green)]",
  blue: "drop-shadow-[-8px_0_0_var(--color-blue)]",
  beige: "drop-shadow-[-8px_0_0_var(--color-beige)]",
};

const BOTTOM_DROP_SHADOW_STYLES: Record<(typeof CARD_COLORS)[number], string> =
  {
    red: "drop-shadow-[0_8px_0_var(--color-red)]",
    yellow: "drop-shadow-[0_8px_0_var(--color-yellow)]",
    green: "drop-shadow-[0_8px_0_var(--color-green)]",
    blue: "drop-shadow-[0_8px_0_var(--color-blue)]",
    beige: "drop-shadow-[0_8px_0_var(--color-beige)]",
  };

export default function Card({
  color = "beige",
  className,
  dropShadowDirection,
  children,
}: {
  color?: (typeof CARD_COLORS)[number];
  className?: string;
  dropShadowDirection?: DROP_SHADOW_DIRECTION | null;
  children: React.ReactNode;
}) {
  const leftDropShadowStyles = clsx(
    LEFT_DROP_SHADOW_STYLES[color],
    "w-[100%-8px] ml-2",
  );

  const bottomDropShadowStyles = clsx(
    BOTTOM_DROP_SHADOW_STYLES[color],
    "h-[100%-8px] mb-2",
  );

  return (
    <div
      className={clsx(
        "border-2 px-8 py-6 md:p-6 rounded-lg bg-white dark:bg-off-black",
        BORDER_STYLES[color],
        dropShadowDirection === DROP_SHADOW_DIRECTION.LEFT &&
          leftDropShadowStyles,
        dropShadowDirection === DROP_SHADOW_DIRECTION.BOTTOM &&
          bottomDropShadowStyles,
        className,
      )}
    >
      {children}
    </div>
  );
}
