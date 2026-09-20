export type Truth = boolean;

export function letter(value: Truth): "V" | "F" {
  return value ? "V" : "F";
}

export const PAIRS: [Truth, Truth][] = [
  [true, true],
  [true, false],
  [false, true],
  [false, false],
];

export type ConnectiveId = "not" | "and" | "or" | "imp" | "iff";

export type Connective = {
  id: ConnectiveId;
  symbol: string;
  name: string;
  read: string;
  rule: string;
  note: string;
  unary: boolean;
  apply: (p: Truth, q: Truth) => Truth;
};

export const CONNECTIVES: Connective[] = [
  {
    id: "not",
    symbol: "¬",
    name: "Negación",
    read: "no P · no es cierto que P",
    rule: "Invierte el valor: ¬P es verdadero solo cuando P es falso.",
    note: "Es el conectivo de mayor prioridad.",
    unary: true,
    apply: (p) => !p,
  },
  {
    id: "and",
    symbol: "∧",
    name: "Conjunción",
    read: "P y Q",
    rule: "Solo es verdadera si ambas proposiciones son verdaderas.",
    note: "Conmutativa: P ∧ Q ≡ Q ∧ P",
    unary: false,
    apply: (p, q) => p && q,
  },
  {
    id: "or",
    symbol: "∨",
    name: "Disyunción",
    read: "P o Q (inclusiva)",
    rule: "Solo es falsa si ambas proposiciones son falsas.",
    note: "Conmutativa: P ∨ Q ≡ Q ∨ P",
    unary: false,
    apply: (p, q) => p || q,
  },
  {
    id: "imp",
    symbol: "→",
    name: "Condicional",
    read: "si P, entonces Q",
    rule: "Solo es falso cuando el antecedente (P) es V y el consecuente (Q) es F.",
    note: "Equivalencia útil: P → Q ≡ ¬P ∨ Q",
    unary: false,
    apply: (p, q) => !p || q,
  },
  {
    id: "iff",
    symbol: "↔",
    name: "Bicondicional",
    read: "P si y solo si Q",
    rule: "Es verdadero cuando P y Q tienen el mismo valor de verdad.",
    note: "Equivale a (P → Q) ∧ (Q → P)",
    unary: false,
    apply: (p, q) => p === q,
  },
];

export type StatementTone = "true" | "false" | "warn" | "muted";

export type StatementExample = {
  text: string;
  value: string;
  isStatement: string;
  hint: string;
  tone: StatementTone;
};

export const STATEMENTS: StatementExample[] = [
  {
    text: "París es la capital de México",
    value: "F",
    isStatement: "Sí",
    hint: "Declarativa y verificable: es falsa.",
    tone: "false",
  },
  {
    text: "Canadá es un país",
    value: "V",
    isStatement: "Sí",
    hint: "Declarativa y verificable: es verdadera.",
    tone: "true",
  },
  {
    text: "11 + 101 = 10001",
    value: "Depende de la base",
    isStatement: "Sí",
    hint: "El valor cambia según el sistema de numeración.",
    tone: "warn",
  },
  {
    text: "Este enunciado es falso",
    value: "Paradoja",
    isStatement: "Problemático",
    hint: "Paradoja del mentiroso: en lógica clásica no recibe V ni F.",
    tone: "warn",
  },
  {
    text: "¡Vete a dormir!",
    value: "—",
    isStatement: "No",
    hint: "Es un imperativo: no afirma un hecho.",
    tone: "muted",
  },
  {
    text: "Llegaremos a Júpiter en 2040",
    value: "Depende del contexto",
    isStatement: "Sí",
    hint: "Es declarativa, pero su valor aún no está fijado.",
    tone: "warn",
  },
];

export const IMP_READINGS = [
  "Si P, entonces Q",
  "P implica Q",
  "P es suficiente para Q",
  "Q es necesario para P",
  "Q es consecuencia de P",
];

export type RelatedForm = {
  id: "direct" | "inverse" | "converse" | "contrapositive";
  name: string;
  formula: string;
  equivalent: boolean;
  example: string;
  blurb: string;
  apply: (p: Truth, q: Truth) => Truth;
};

export const RELATED: RelatedForm[] = [
  {
    id: "direct",
    name: "Condicional",
    formula: "P → Q",
    equivalent: true,
    example: "Si llueve, entonces la calle está mojada.",
    blurb: "El enunciado de partida.",
    apply: (p, q) => !p || q,
  },
  {
    id: "inverse",
    name: "Inversa",
    formula: "¬P → ¬Q",
    equivalent: false,
    example: "Si no llueve, entonces la calle no está mojada.",
    blurb: "No equivale al original.",
    apply: (p, q) => p || !q,
  },
  {
    id: "converse",
    name: "Conversa",
    formula: "Q → P",
    equivalent: false,
    example: "Si la calle está mojada, entonces llueve.",
    blurb: "Invierte antecedente y consecuente.",
    apply: (p, q) => !q || p,
  },
  {
    id: "contrapositive",
    name: "Contrapositiva",
    formula: "¬Q → ¬P",
    equivalent: true,
    example: "Si la calle no está mojada, entonces no llueve.",
    blurb: "Siempre equivale a P → Q.",
    apply: (p, q) => !p || q,
  },
];

export const HIERARCHY = [
  { rank: 1, symbol: "¬", name: "Negación", hint: "Mayor prioridad" },
  { rank: 2, symbol: "∧", name: "Conjunción", hint: "Después de negar" },
  { rank: 3, symbol: "∨", name: "Disyunción", hint: "Después de ∧" },
  { rank: 4, symbol: "→", name: "Condicional", hint: "Después de ∨" },
  { rank: 5, symbol: "↔", name: "Bicondicional", hint: "Menor prioridad" },
] as const;

export const HIERARCHY_MARGINS = [
  "mx-10",
  "mx-8",
  "mx-5",
  "mx-2",
  "mx-0",
] as const;

export function rowMatches(
  p: Truth,
  q: Truth,
  rowP: Truth,
  rowQ: Truth | undefined,
  unary: boolean,
): boolean {
  if (unary) return rowP === p;
  return rowP === p && rowQ === q;
}
