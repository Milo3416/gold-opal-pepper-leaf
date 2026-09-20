import { cn } from "@/lib/utils";
import type { StatementTone, Truth } from "@/lib/logic";
import { letter } from "@/lib/logic";

type Size = "sm" | "md" | "lg";

export function ValueChip({
  value,
  size = "md",
  className,
}: {
  value: Truth;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center font-mono font-semibold tabular-nums",
        value ? "bg-true-soft text-true" : "bg-false-soft text-false",
        size === "sm" && "h-6 min-w-6 rounded-sm px-1.5 text-xs",
        size === "md" && "h-7 min-w-7 rounded-md px-2 text-sm",
        size === "lg" && "h-12 min-w-12 rounded-lg px-3 text-xl",
        className,
      )}
    >
      {letter(value)}
    </span>
  );
}

const TONE: Record<StatementTone, string> = {
  true: "bg-true-soft text-true",
  false: "bg-false-soft text-false",
  warn: "bg-warn-soft text-warn",
  muted: "bg-muted-soft text-ink-muted",
};

export function StatusChip({
  tone,
  children,
}: {
  tone: StatementTone;
  children: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex max-w-full items-center rounded-md px-2 py-0.5 text-xs font-medium",
        TONE[tone],
      )}
    >
      {children}
    </span>
  );
}
