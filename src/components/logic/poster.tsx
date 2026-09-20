import { useState } from "react";
import {
  ArrowLeftRight,
  ArrowRight,
  Ban,
  BookOpen,
  GitMerge,
  Layers,
  Split,
} from "lucide-react";
import {
  CONNECTIVES,
  HIERARCHY,
  HIERARCHY_MARGINS,
  IMP_READINGS,
  RELATED,
  STATEMENTS,
  letter,
  type Connective,
  type StatementTone,
  type Truth,
} from "@/lib/logic";
import { cn } from "@/lib/utils";
import { StatusChip, ValueChip } from "./value-chip";
import { TruthTable } from "./truth-table";

const ICONS = {
  not: Ban,
  and: GitMerge,
  or: Split,
  imp: ArrowRight,
  iff: ArrowLeftRight,
} as const;

const TONE_TEXT: Record<StatementTone, string> = {
  true: "text-true",
  false: "text-false",
  warn: "text-warn",
  muted: "text-ink-muted",
};

export function LogicPoster() {
  const [p, setP] = useState<Truth>(true);
  const [q, setQ] = useState<Truth>(false);

  const pick = (nextP: Truth, nextQ: Truth) => {
    setP(nextP);
    setQ(nextQ);
  };

  return (
    <div className="min-h-dvh px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8">
      <article className="mx-auto max-w-6xl rounded-xl bg-paper p-4 shadow-sheet sm:p-6 lg:p-8">
        <Header />
        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-12">
          <IntroSection />
          <HierarchySection />
          <div className="lg:col-span-12">
            <SectionHead
              number="2"
              title="Conectivos lógicos principales"
              icon={BookOpen}
            />
          </div>
          {CONNECTIVES.map((connective) => (
            <ConnectiveCard
              key={connective.id}
              connective={connective}
              p={p}
              q={q}
              onPick={pick}
            />
          ))}
          <LabSection p={p} q={q} onPick={pick} />
          <RelatedSection p={p} q={q} />
        </div>
        <footer className="mt-6 border-t border-border pt-4 text-sm text-ink-muted">
          Un enunciado es verdadero o falso. Los conectivos combinan enunciados.
          El orden de resolución es ¬, luego ∧, luego ∨, luego →, y al final ↔.
        </footer>
      </article>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-border pb-5">
      <p className="text-xs font-semibold tracking-widest text-teal uppercase">
        Recapitulación
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">
        Fundamentos de lógica matemática
      </h1>
      <p className="mt-2 max-w-3xl text-base text-ink-muted sm:text-lg">
        Conceptos explicados con claridad: enunciados, conectivos, tablas de
        verdad y el orden en que se resuelven las fórmulas.
      </p>
    </header>
  );
}

function SectionHead({
  number,
  title,
  icon: Icon,
}: {
  number: string;
  title: string;
  icon: typeof Layers;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface">
      <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-teal-deep font-mono text-sm font-semibold">
        {number}
      </span>
      <h2 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
        {title}
      </h2>
      <Icon className="ml-auto size-4 opacity-80" strokeWidth={1.75} aria-hidden />
    </div>
  );
}

function IntroSection() {
  return (
    <section
      id="introduccion"
      className="flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-7"
    >
      <SectionHead number="1" title="Introducción y enunciados" icon={BookOpen} />
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-md bg-paper p-3">
          <h3 className="font-display text-base font-semibold text-ink">
            ¿Qué es la lógica?
          </h3>
          <p className="mt-1 text-sm leading-normal text-ink-muted">
            Ciencia del pensamiento formal. Estudia cuándo un argumento es
            válido: si la conclusión se sigue de las premisas, no si esas
            premisas son empíricamente ciertas.
          </p>
        </div>
        <div className="rounded-md bg-paper p-3">
          <h3 className="font-display text-base font-semibold text-ink">
            Proposiciones
          </h3>
          <ul className="mt-2 space-y-1.5 text-sm text-ink-muted">
            <li>
              <span className="font-medium text-ink">Simple</span> — sin
              conectivos. Ejemplo: «Canadá es un país».
            </li>
            <li>
              <span className="font-medium text-ink">Compuesta</span> — une
              proposiciones con ¬, ∧, ∨, → o ↔.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h3 className="font-display text-base font-semibold text-ink">
          Enunciados y valor de verdad
        </h3>
        <p className="mt-1 text-sm leading-normal text-ink-muted">
          Un enunciado es una oración declarativa que es verdadera (V / 1) o
          falsa (F / 0), nunca ambas. Preguntas, órdenes y exclamaciones no
          son enunciados.
        </p>
      </div>
      <ul className="flex flex-col gap-2 lg:hidden">
        {STATEMENTS.map((row) => (
          <li key={row.text} className="rounded-md bg-paper p-3">
            <p className="font-medium text-ink">{row.text}</p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <StatusChip tone={row.tone}>{row.value}</StatusChip>
              <StatusChip tone={row.isStatement === "Sí" ? "true" : "muted"}>
                {row.isStatement === "Sí" ? "Es enunciado" : row.isStatement}
              </StatusChip>
            </div>
            <p className="mt-1.5 text-xs text-ink-subtle">{row.hint}</p>
          </li>
        ))}
      </ul>
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-border text-left text-ink-muted">
              <th className="py-2 pr-3 font-medium">Expresión</th>
              <th className="py-2 pr-3 font-medium">Valor</th>
              <th className="py-2 pr-3 font-medium">¿Enunciado?</th>
              <th className="py-2 font-medium">Nota</th>
            </tr>
          </thead>
          <tbody>
            {STATEMENTS.map((row) => (
              <tr key={row.text} className="border-b border-border/70">
                <td className="py-2 pr-3 font-medium text-ink">{row.text}</td>
                <td className="py-2 pr-3">
                  <span className={cn("font-medium", TONE_TEXT[row.tone])}>
                    {row.value}
                  </span>
                </td>
                <td className="py-2 pr-3 text-ink-muted">{row.isStatement}</td>
                <td className="py-2 text-ink-subtle">{row.hint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function HierarchySection() {
  const bands = [
    "bg-teal-deep",
    "bg-teal",
    "bg-teal-mid",
    "bg-teal-mid/80",
    "bg-teal-mid/65",
  ];

  return (
    <section
      id="jerarquia"
      className="flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-5"
    >
      <SectionHead number="3" title="Jerarquía de conectivos" icon={Layers} />
      <p className="text-sm leading-normal text-ink-muted">
        En una fórmula sin paréntesis, se resuelve de arriba hacia abajo.
        Si hay duda, ponga paréntesis.
      </p>
      <div className="flex flex-col gap-1.5">
        {HIERARCHY.map((level, index) => (
          <div
            key={level.symbol}
            className={cn(
              "flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-surface",
              HIERARCHY_MARGINS[index],
              bands[index],
            )}
          >
            <span className="flex items-center gap-2">
              <span className="font-mono text-lg font-semibold">{level.symbol}</span>
              <span className="text-sm font-medium">{level.name}</span>
            </span>
            <span className="text-xs tracking-wide uppercase opacity-80">
              {level.hint}
            </span>
          </div>
        ))}
      </div>
      <div className="rounded-md bg-paper p-3">
        <p className="text-xs font-semibold tracking-wide text-teal uppercase">
          Ejemplo de resolución
        </p>
        <p className="mt-2 font-mono text-sm text-ink">¬P ∨ Q → R</p>
        <ol className="mt-2 space-y-1 text-sm text-ink-muted">
          <li>
            1. Negación: <span className="font-mono text-ink">(¬P)</span>
          </li>
          <li>
            2. Disyunción: <span className="font-mono text-ink">((¬P) ∨ Q)</span>
          </li>
          <li>
            3. Condicional:{" "}
            <span className="font-mono text-ink">((¬P) ∨ Q) → R</span>
          </li>
        </ol>
      </div>
    </section>
  );
}

function ConnectiveCard({
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
  const Icon = ICONS[connective.id];
  const result = connective.apply(p, q);

  return (
    <section className="flex flex-col gap-3 rounded-lg bg-surface p-4 lg:col-span-4">
      <div className="flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface">
        <Icon className="size-4" strokeWidth={1.75} aria-hidden />
        <h2 className="font-display text-lg font-semibold tracking-tight">
          {connective.name}
        </h2>
        <span className="ml-auto font-mono text-xl font-semibold">
          {connective.symbol}
        </span>
      </div>
      <p className="text-xs font-semibold tracking-wide text-teal uppercase">
        Se lee
      </p>
      <p className="-mt-2 text-sm text-ink">{connective.read}</p>
      <p className="text-sm leading-normal text-ink-muted">{connective.rule}</p>
      {connective.id === "imp" && (
        <ul className="grid grid-cols-1 gap-1 text-xs text-ink-muted sm:grid-cols-2">
          {IMP_READINGS.map((line) => (
            <li key={line} className="rounded-sm bg-paper px-2 py-1">
              {line}
            </li>
          ))}
        </ul>
      )}
      <TruthTable connective={connective} p={p} q={q} onPick={onPick} />
      <div className="mt-auto flex flex-col gap-2 rounded-md bg-paper px-3 py-2">
        <p className="text-xs text-ink-muted">{connective.note}</p>
        <div className="flex items-center justify-end gap-2">
          <span className="text-xs text-ink-subtle">Ahora</span>
          <ValueChip value={result} />
        </div>
      </div>
    </section>
  );
}

function LabSection({
  p,
  q,
  onPick,
}: {
  p: Truth;
  q: Truth;
  onPick: (nextP: Truth, nextQ: Truth) => void;
}) {
  return (
    <section
      id="taller"
      className="flex flex-col gap-3 rounded-lg bg-surface p-4 lg:col-span-4"
    >
      <div className="flex items-center gap-3 rounded-md bg-teal-deep px-3 py-2 text-surface">
        <h2 className="font-display text-lg font-semibold tracking-tight">
          Taller de verdad
        </h2>
      </div>
      <p className="text-sm leading-normal text-ink-muted">
        Elija valores para P y Q. Las tablas se actualizan y resaltan la fila
        correspondiente.
      </p>
      <div className="flex flex-wrap gap-3">
        <TruthSwitch label="P" value={p} onChange={(value) => onPick(value, q)} />
        <TruthSwitch label="Q" value={q} onChange={(value) => onPick(p, value)} />
      </div>
      <ul className="grid grid-cols-1 gap-1.5">
        {CONNECTIVES.map((connective) => {
          const result = connective.apply(p, q);
          const formula = connective.unary
            ? `¬${letter(p)}`
            : `${letter(p)} ${connective.symbol} ${letter(q)}`;
          return (
            <li
              key={connective.id}
              className="flex items-center justify-between gap-2 rounded-md bg-paper px-3 py-2"
            >
              <span className="text-sm text-ink">
                <span className="font-medium">{connective.name}</span>
                <span className="ml-2 font-mono text-ink-muted">{formula}</span>
              </span>
              <ValueChip value={result} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function TruthSwitch({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Truth;
  onChange: (value: Truth) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-display text-xl font-semibold text-ink">{label}</span>
      <div className="flex rounded-md bg-paper p-1">
        <button
          type="button"
          aria-pressed={value}
          onClick={() => onChange(true)}
          className={cn(
            "h-11 min-w-11 rounded-sm px-3 font-mono text-sm font-semibold transition-colors duration-150 ease-out",
            value ? "bg-true text-surface" : "text-ink-muted hover:text-ink",
          )}
        >
          V
        </button>
        <button
          type="button"
          aria-pressed={!value}
          onClick={() => onChange(false)}
          className={cn(
            "h-11 min-w-11 rounded-sm px-3 font-mono text-sm font-semibold transition-colors duration-150 ease-out",
            !value ? "bg-false text-surface" : "text-ink-muted hover:text-ink",
          )}
        >
          F
        </button>
      </div>
    </div>
  );
}

function RelatedSection({ p, q }: { p: Truth; q: Truth }) {
  return (
    <section
      id="relacionados"
      className="flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-12"
    >
      <div className="flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface">
        <h2 className="font-display text-lg font-semibold tracking-tight sm:text-xl">
          Condicionales relacionados
        </h2>
      </div>
      <p className="text-sm leading-normal text-ink-muted">
        A partir de P → Q se forman tres fórmulas vecinas. Solo la
        contrapositiva equivale siempre al condicional original. Ejemplo: P =
        «llueve», Q = «la calle está mojada».
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {RELATED.map((form) => (
          <article key={form.id} className="flex flex-col gap-2 rounded-md bg-paper p-3">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-display text-base font-semibold text-ink">
                  {form.name}
                </h3>
                <p className="font-mono text-sm text-teal">{form.formula}</p>
              </div>
              <ValueChip value={form.apply(p, q)} />
            </div>
            <p className="text-sm text-ink">{form.example}</p>
            <p className="mt-auto text-xs text-ink-subtle">{form.blurb}</p>
            <StatusChip tone={form.equivalent ? "true" : "muted"}>
              {form.equivalent ? "Equivalente a P → Q" : "No equivalente"}
            </StatusChip>
          </article>
        ))}
      </div>
    </section>
  );
}
