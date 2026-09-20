import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BookOpen, c as ArrowLeftRight, i as GitMerge, n as Split, o as Ban, r as Layers, s as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C4d-F4HK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function letter(value) {
	return value ? "V" : "F";
}
var PAIRS = [
	[true, true],
	[true, false],
	[false, true],
	[false, false]
];
var CONNECTIVES = [
	{
		id: "not",
		symbol: "¬",
		name: "Negación",
		read: "no P · no es cierto que P",
		rule: "Invierte el valor: ¬P es verdadero solo cuando P es falso.",
		note: "Es el conectivo de mayor prioridad.",
		unary: true,
		apply: (p) => !p
	},
	{
		id: "and",
		symbol: "∧",
		name: "Conjunción",
		read: "P y Q",
		rule: "Solo es verdadera si ambas proposiciones son verdaderas.",
		note: "Conmutativa: P ∧ Q ≡ Q ∧ P",
		unary: false,
		apply: (p, q) => p && q
	},
	{
		id: "or",
		symbol: "∨",
		name: "Disyunción",
		read: "P o Q (inclusiva)",
		rule: "Solo es falsa si ambas proposiciones son falsas.",
		note: "Conmutativa: P ∨ Q ≡ Q ∨ P",
		unary: false,
		apply: (p, q) => p || q
	},
	{
		id: "imp",
		symbol: "→",
		name: "Condicional",
		read: "si P, entonces Q",
		rule: "Solo es falso cuando el antecedente (P) es V y el consecuente (Q) es F.",
		note: "Equivalencia útil: P → Q ≡ ¬P ∨ Q",
		unary: false,
		apply: (p, q) => !p || q
	},
	{
		id: "iff",
		symbol: "↔",
		name: "Bicondicional",
		read: "P si y solo si Q",
		rule: "Es verdadero cuando P y Q tienen el mismo valor de verdad.",
		note: "Equivale a (P → Q) ∧ (Q → P)",
		unary: false,
		apply: (p, q) => p === q
	}
];
var STATEMENTS = [
	{
		text: "París es la capital de México",
		value: "F",
		isStatement: "Sí",
		hint: "Declarativa y verificable: es falsa.",
		tone: "false"
	},
	{
		text: "Canadá es un país",
		value: "V",
		isStatement: "Sí",
		hint: "Declarativa y verificable: es verdadera.",
		tone: "true"
	},
	{
		text: "11 + 101 = 10001",
		value: "Depende de la base",
		isStatement: "Sí",
		hint: "El valor cambia según el sistema de numeración.",
		tone: "warn"
	},
	{
		text: "Este enunciado es falso",
		value: "Paradoja",
		isStatement: "Problemático",
		hint: "Paradoja del mentiroso: en lógica clásica no recibe V ni F.",
		tone: "warn"
	},
	{
		text: "¡Vete a dormir!",
		value: "—",
		isStatement: "No",
		hint: "Es un imperativo: no afirma un hecho.",
		tone: "muted"
	},
	{
		text: "Llegaremos a Júpiter en 2040",
		value: "Depende del contexto",
		isStatement: "Sí",
		hint: "Es declarativa, pero su valor aún no está fijado.",
		tone: "warn"
	}
];
var IMP_READINGS = [
	"Si P, entonces Q",
	"P implica Q",
	"P es suficiente para Q",
	"Q es necesario para P",
	"Q es consecuencia de P"
];
var RELATED = [
	{
		id: "direct",
		name: "Condicional",
		formula: "P → Q",
		equivalent: true,
		example: "Si llueve, entonces la calle está mojada.",
		blurb: "El enunciado de partida.",
		apply: (p, q) => !p || q
	},
	{
		id: "inverse",
		name: "Inversa",
		formula: "¬P → ¬Q",
		equivalent: false,
		example: "Si no llueve, entonces la calle no está mojada.",
		blurb: "No equivale al original.",
		apply: (p, q) => p || !q
	},
	{
		id: "converse",
		name: "Conversa",
		formula: "Q → P",
		equivalent: false,
		example: "Si la calle está mojada, entonces llueve.",
		blurb: "Invierte antecedente y consecuente.",
		apply: (p, q) => !q || p
	},
	{
		id: "contrapositive",
		name: "Contrapositiva",
		formula: "¬Q → ¬P",
		equivalent: true,
		example: "Si la calle no está mojada, entonces no llueve.",
		blurb: "Siempre equivale a P → Q.",
		apply: (p, q) => !p || q
	}
];
var HIERARCHY = [
	{
		rank: 1,
		symbol: "¬",
		name: "Negación",
		hint: "Mayor prioridad"
	},
	{
		rank: 2,
		symbol: "∧",
		name: "Conjunción",
		hint: "Después de negar"
	},
	{
		rank: 3,
		symbol: "∨",
		name: "Disyunción",
		hint: "Después de ∧"
	},
	{
		rank: 4,
		symbol: "→",
		name: "Condicional",
		hint: "Después de ∨"
	},
	{
		rank: 5,
		symbol: "↔",
		name: "Bicondicional",
		hint: "Menor prioridad"
	}
];
var HIERARCHY_MARGINS = [
	"mx-10",
	"mx-8",
	"mx-5",
	"mx-2",
	"mx-0"
];
function rowMatches(p, q, rowP, rowQ, unary) {
	if (unary) return rowP === p;
	return rowP === p && rowQ === q;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function ValueChip({ value, size = "md", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center justify-center font-mono font-semibold tabular-nums", value ? "bg-true-soft text-true" : "bg-false-soft text-false", size === "sm" && "h-6 min-w-6 rounded-sm px-1.5 text-xs", size === "md" && "h-7 min-w-7 rounded-md px-2 text-sm", size === "lg" && "h-12 min-w-12 rounded-lg px-3 text-xl", className),
		children: letter(value)
	});
}
var TONE = {
	true: "bg-true-soft text-true",
	false: "bg-false-soft text-false",
	warn: "bg-warn-soft text-warn",
	muted: "bg-muted-soft text-ink-muted"
};
function StatusChip({ tone, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex max-w-full items-center rounded-md px-2 py-0.5 text-xs font-medium", TONE[tone]),
		children
	});
}
function TruthTable({ connective, p, q, onPick }) {
	const rows = connective.unary ? [[true, void 0], [false, void 0]] : PAIRS.map(([rowP, rowQ]) => [rowP, rowQ]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
		className: "w-full border-collapse text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("caption", {
				className: "sr-only",
				children: ["Tabla de verdad de ", connective.name]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "text-ink-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-1.5 py-1 text-left font-medium",
						children: "P"
					}),
					!connective.unary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-1.5 py-1 text-left font-medium",
						children: "Q"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						className: "px-1.5 py-1 text-left font-mono font-semibold text-ink",
						children: connective.unary ? "¬P" : `P ${connective.symbol} Q`
					})
				]
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map(([rowP, rowQ]) => {
				const selected = rowMatches(p, q, rowP, rowQ, connective.unary);
				const result = connective.apply(rowP, rowQ ?? false);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					tabIndex: 0,
					"aria-pressed": selected,
					"aria-label": `P ${letter(rowP)}${connective.unary ? "" : ` Q ${letter(rowQ)}`}, resultado ${letter(result)}`,
					onClick: () => onPick(rowP, rowQ ?? q),
					onKeyDown: (event) => {
						if (event.key === "Enter" || event.key === " ") {
							event.preventDefault();
							onPick(rowP, rowQ ?? q);
						}
					},
					className: cn("cursor-pointer rounded-md transition-colors duration-150 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal", selected ? "bg-teal-soft" : "hover:bg-paper-2"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-1.5 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, {
								value: rowP,
								size: "sm"
							})
						}),
						!connective.unary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-1.5 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, {
								value: rowQ,
								size: "sm"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "px-1.5 py-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, {
								value: result,
								size: "sm"
							})
						})
					]
				}, `${rowP}-${String(rowQ)}`);
			}) })
		]
	});
}
var ICONS = {
	not: Ban,
	and: GitMerge,
	or: Split,
	imp: ArrowRight,
	iff: ArrowLeftRight
};
var TONE_TEXT = {
	true: "text-true",
	false: "text-false",
	warn: "text-warn",
	muted: "text-ink-muted"
};
function LogicPoster() {
	const [p, setP] = (0, import_react.useState)(true);
	const [q, setQ] = (0, import_react.useState)(false);
	const pick = (nextP, nextQ) => {
		setP(nextP);
		setQ(nextQ);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "min-h-dvh px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-6xl rounded-xl bg-paper p-4 shadow-sheet sm:p-6 lg:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid grid-cols-1 gap-3 lg:grid-cols-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntroSection, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HierarchySection, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-12",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
								number: "2",
								title: "Conectivos lógicos principales",
								icon: BookOpen
							})
						}),
						CONNECTIVES.map((connective) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectiveCard, {
							connective,
							p,
							q,
							onPick: pick
						}, connective.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabSection, {
							p,
							q,
							onPick: pick
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelatedSection, {
							p,
							q
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
					className: "mt-6 border-t border-border pt-4 text-sm text-ink-muted",
					children: "Un enunciado es verdadero o falso. Los conectivos combinan enunciados. El orden de resolución es ¬, luego ∧, luego ∨, luego →, y al final ↔."
				})
			]
		})
	});
}
function Header() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-border pb-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-widest text-teal uppercase",
				children: "Recapitulación"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl",
				children: "Fundamentos de lógica matemática"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-3xl text-base text-ink-muted sm:text-lg",
				children: "Conceptos explicados con claridad: enunciados, conectivos, tablas de verdad y el orden en que se resuelven las fórmulas."
			})
		]
	});
}
function SectionHead({ number, title, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-8 shrink-0 items-center justify-center rounded-sm bg-teal-deep font-mono text-sm font-semibold",
				children: number
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold tracking-tight sm:text-xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "ml-auto size-4 opacity-80",
				strokeWidth: 1.75,
				"aria-hidden": true
			})
		]
	});
}
function IntroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "introduccion",
		className: "flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-7",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				number: "1",
				title: "Introducción y enunciados",
				icon: BookOpen
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-paper p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-ink",
						children: "¿Qué es la lógica?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm leading-normal text-ink-muted",
						children: "Ciencia del pensamiento formal. Estudia cuándo un argumento es válido: si la conclusión se sigue de las premisas, no si esas premisas son empíricamente ciertas."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-md bg-paper p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-base font-semibold text-ink",
						children: "Proposiciones"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-2 space-y-1.5 text-sm text-ink-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "Simple"
						}), " — sin conectivos. Ejemplo: «Canadá es un país»."] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium text-ink",
							children: "Compuesta"
						}), " — une proposiciones con ¬, ∧, ∨, → o ↔."] })]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-display text-base font-semibold text-ink",
				children: "Enunciados y valor de verdad"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm leading-normal text-ink-muted",
				children: "Un enunciado es una oración declarativa que es verdadera (V / 1) o falsa (F / 0), nunca ambas. Preguntas, órdenes y exclamaciones no son enunciados."
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-2 lg:hidden",
				children: STATEMENTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-md bg-paper p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-ink",
							children: row.text
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-2 flex flex-wrap gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
								tone: row.tone,
								children: row.value
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
								tone: row.isStatement === "Sí" ? "true" : "muted",
								children: row.isStatement === "Sí" ? "Es enunciado" : row.isStatement
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1.5 text-xs text-ink-subtle",
							children: row.hint
						})
					]
				}, row.text))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden overflow-x-auto lg:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full border-collapse text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border text-left text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Expresión"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "Valor"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 pr-3 font-medium",
								children: "¿Enunciado?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "py-2 font-medium",
								children: "Nota"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: STATEMENTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-border/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 font-medium text-ink",
								children: row.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: cn("font-medium", TONE_TEXT[row.tone]),
									children: row.value
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 pr-3 text-ink-muted",
								children: row.isStatement
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2 text-ink-subtle",
								children: row.hint
							})
						]
					}, row.text)) })]
				})
			})
		]
	});
}
function HierarchySection() {
	const bands = [
		"bg-teal-deep",
		"bg-teal",
		"bg-teal-mid",
		"bg-teal-mid/80",
		"bg-teal-mid/65"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "jerarquia",
		className: "flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				number: "3",
				title: "Jerarquía de conectivos",
				icon: Layers
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-normal text-ink-muted",
				children: "En una fórmula sin paréntesis, se resuelve de arriba hacia abajo. Si hay duda, ponga paréntesis."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-1.5",
				children: HIERARCHY.map((level, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center justify-between gap-3 rounded-md px-3 py-2.5 text-surface", HIERARCHY_MARGINS[index], bands[index]),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-lg font-semibold",
							children: level.symbol
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: level.name
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs tracking-wide uppercase opacity-80",
						children: level.hint
					})]
				}, level.symbol))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-md bg-paper p-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-semibold tracking-wide text-teal uppercase",
						children: "Ejemplo de resolución"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 font-mono text-sm text-ink",
						children: "¬P ∨ Q → R"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
						className: "mt-2 space-y-1 text-sm text-ink-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["1. Negación: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-ink",
								children: "(¬P)"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["2. Disyunción: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-ink",
								children: "((¬P) ∨ Q)"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"3. Condicional:",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-ink",
									children: "((¬P) ∨ Q) → R"
								})
							] })
						]
					})
				]
			})
		]
	});
}
function ConnectiveCard({ connective, p, q, onPick }) {
	const Icon = ICONS[connective.id];
	const result = connective.apply(p, q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-3 rounded-lg bg-surface p-4 lg:col-span-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
						className: "size-4",
						strokeWidth: 1.75,
						"aria-hidden": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold tracking-tight",
						children: connective.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto font-mono text-xl font-semibold",
						children: connective.symbol
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-semibold tracking-wide text-teal uppercase",
				children: "Se lee"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "-mt-2 text-sm text-ink",
				children: connective.read
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-normal text-ink-muted",
				children: connective.rule
			}),
			connective.id === "imp" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-1 text-xs text-ink-muted sm:grid-cols-2",
				children: IMP_READINGS.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-sm bg-paper px-2 py-1",
					children: line
				}, line))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruthTable, {
				connective,
				p,
				q,
				onPick
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-auto flex flex-col gap-2 rounded-md bg-paper px-3 py-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-ink-muted",
					children: connective.note
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-ink-subtle",
						children: "Ahora"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, { value: result })]
				})]
			})
		]
	});
}
function LabSection({ p, q, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "taller",
		className: "flex flex-col gap-3 rounded-lg bg-surface p-4 lg:col-span-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3 rounded-md bg-teal-deep px-3 py-2 text-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold tracking-tight",
					children: "Taller de verdad"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-normal text-ink-muted",
				children: "Elija valores para P y Q. Las tablas se actualizan y resaltan la fila correspondiente."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruthSwitch, {
					label: "P",
					value: p,
					onChange: (value) => onPick(value, q)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TruthSwitch, {
					label: "Q",
					value: q,
					onChange: (value) => onPick(p, value)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-1 gap-1.5",
				children: CONNECTIVES.map((connective) => {
					const result = connective.apply(p, q);
					const formula = connective.unary ? `¬${letter(p)}` : `${letter(p)} ${connective.symbol} ${letter(q)}`;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between gap-2 rounded-md bg-paper px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: connective.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-2 font-mono text-ink-muted",
								children: formula
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, { value: result })]
					}, connective.id);
				})
			})
		]
	});
}
function TruthSwitch({ label, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-xl font-semibold text-ink",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex rounded-md bg-paper p-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": value,
				onClick: () => onChange(true),
				className: cn("h-11 min-w-11 rounded-sm px-3 font-mono text-sm font-semibold transition-colors duration-150 ease-out", value ? "bg-true text-surface" : "text-ink-muted hover:text-ink"),
				children: "V"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": !value,
				onClick: () => onChange(false),
				className: cn("h-11 min-w-11 rounded-sm px-3 font-mono text-sm font-semibold transition-colors duration-150 ease-out", !value ? "bg-false text-surface" : "text-ink-muted hover:text-ink"),
				children: "F"
			})]
		})]
	});
}
function RelatedSection({ p, q }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "relacionados",
		className: "flex flex-col gap-4 rounded-lg bg-surface p-4 lg:col-span-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-3 rounded-md bg-teal px-3 py-2 text-surface",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold tracking-tight sm:text-xl",
					children: "Condicionales relacionados"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm leading-normal text-ink-muted",
				children: "A partir de P → Q se forman tres fórmulas vecinas. Solo la contrapositiva equivale siempre al condicional original. Ejemplo: P = «llueve», Q = «la calle está mojada»."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: RELATED.map((form) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "flex flex-col gap-2 rounded-md bg-paper p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-ink",
								children: form.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-sm text-teal",
								children: form.formula
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValueChip, { value: form.apply(p, q) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-ink",
							children: form.example
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-auto text-xs text-ink-subtle",
							children: form.blurb
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusChip, {
							tone: form.equivalent ? "true" : "muted",
							children: form.equivalent ? "Equivalente a P → Q" : "No equivalente"
						})
					]
				}, form.id))
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogicPoster, {});
}
//#endregion
export { Home as component };
