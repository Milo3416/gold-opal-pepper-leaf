import { cn } from "@/lib/utils";
import {
  PAIRS,
  letter,
  rowMatches,
  type Connective,
  type Truth,
} from "@/lib/logic";
import { ValueChip } from "./value-chip";

export function TruthTable({
  connective,
  p,
  q,
  onPick,
}: {
  connective: Connective;
  p: Truth;
  q: Truth;
  onPick: (nextP: Truth, nextQ: Truth) => void;
}) {
  const rows = connective.unary
    ? ([
        [true, undefined],
        [false, undefined],
      ] as const)
    : PAIRS.map(([rowP, rowQ]) => [rowP, rowQ] as const);

  return (
    <table className="w-full border-collapse text-sm">
      <caption className="sr-only">
        Tabla de verdad de {connective.name}
      </caption>
      <thead>
        <tr className="text-ink-muted">
          <th scope="col" className="px-1.5 py-1 text-left font-medium">
            P
          </th>
          {!connective.unary && (
            <th scope="col" className="px-1.5 py-1 text-left font-medium">
              Q
            </th>
          )}
          <th scope="col" className="px-1.5 py-1 text-left font-mono font-semibold text-ink">
            {connective.unary ? "¬P" : `P ${connective.symbol} Q`}
          </th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([rowP, rowQ]) => {
          const selected = rowMatches(p, q, rowP, rowQ, connective.unary);
          const result = connective.apply(rowP, rowQ ?? false);
          return (
            <tr
              key={`${rowP}-${String(rowQ)}`}
              tabIndex={0}
              aria-pressed={selected}
              aria-label={`P ${letter(rowP)}${
                connective.unary ? "" : ` Q ${letter(rowQ as Truth)}`
              }, resultado ${letter(result)}`}
              onClick={() => onPick(rowP, rowQ ?? q)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  onPick(rowP, rowQ ?? q);
                }
              }}
              className={cn(
                "cursor-pointer rounded-md transition-colors duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal",
                selected ? "bg-teal-soft" : "hover:bg-paper-2",
              )}
            >
              <td className="px-1.5 py-1">
                <ValueChip value={rowP} size="sm" />
              </td>
              {!connective.unary && (
                <td className="px-1.5 py-1">
                  <ValueChip value={rowQ as Truth} size="sm" />
                </td>
              )}
              <td className="px-1.5 py-1">
                <ValueChip value={result} size="sm" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
