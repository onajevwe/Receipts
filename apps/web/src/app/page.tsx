import { ReceiptSlip } from "@/components/ReceiptSlip";

const steps = [
  {
    title: "Find what was said",
    body: "The original speech, interview, manifesto or official post, with the exact page or timestamp.",
  },
  {
    title: "Trace the record",
    body: "Budgets, releases, parliamentary records and independent reporting connected to that statement.",
  },
  {
    title: "Show the documented stage",
    body: "Promise, budget line, money released, money spent, work done. Each step needs its own evidence.",
  },
  {
    title: "Share it with the sources attached",
    body: "Every receipt carries its links, so anyone can check it for themselves.",
  },
];

const features = [
  {
    name: "The Record",
    body: "Look up a public official: offices held, what they promised, and what the documents show happened next.",
  },
  {
    name: "Ask Receipts",
    body: "Ask a question in plain language and get an answer where every sentence points to its source.",
  },
  {
    name: "The Check",
    body: "Paste a viral post or screenshot and see where the claim came from and what the evidence says.",
  },
  {
    name: "Election 2027",
    body: "Compare candidates side by side on their documented records, using the same template for everyone.",
  },
  {
    name: "The Brief",
    body: "Catch up on what is happening in Nigeria in a few minutes, with links to the original reporting.",
  },
  {
    name: "The Files",
    body: "Long-form investigations with the documents, timelines and methods published alongside them.",
  },
  {
    name: "The Web",
    body: "Follow how people, promises, budgets and institutions connect to one another.",
  },
  {
    name: "Play Receipts",
    body: "Work through a real public record like an investigator, then share what you found.",
  },
];

const rules = [
  "We never endorse candidates, predict winners or rank politicians.",
  "Every claim links to the source it came from.",
  "Answers written with AI are labelled provisional until a person has reviewed them.",
  "When we get something wrong, the correction is published where everyone can see it.",
];

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-8">
      <header className="flex items-baseline justify-between border-b border-rule py-5">
        <p className="font-serif text-2xl font-semibold tracking-tight">Receipts.</p>
        <p className="text-sm text-on-surface-muted">In development</p>
      </header>

      <main>
        <section className="grid items-center gap-12 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
          <div className="max-w-xl">
            <h1 className="font-serif text-[2.75rem] leading-[1.02] font-medium tracking-[-0.02em] text-balance sm:text-6xl lg:text-7xl">
              Every promise leaves a paper trail.
            </h1>
            <p className="mt-6 max-w-[34rem] font-serif text-xl leading-relaxed text-on-surface-muted sm:text-[1.375rem]">
              Receipts connects what Nigerian public officials said to the budgets, records and
              reporting that show what happened next. Every answer links to its source, so you can
              judge the evidence yourself.
            </p>
            <p className="mt-8 border-l-2 border-link pl-4 text-sm text-on-surface-muted">
              Built for the 2027 elections and for Nigeria&apos;s public memory long after. The
              private beta is in preparation.
            </p>
          </div>

          <ReceiptSlip />
        </section>

        <section aria-labelledby="how" className="border-t border-rule py-14 sm:py-20">
          <h2 id="how" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            How a receipt comes together
          </h2>
          <ol className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-on-surface pt-4">
                <p className="font-mono text-sm text-on-surface-muted">Step {i + 1}</p>
                <h3 className="mt-2 font-serif text-xl font-medium">{step.title}</h3>
                <p className="mt-2 text-[0.9375rem] text-on-surface-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="what" className="border-t border-rule py-14 sm:py-20">
          <h2 id="what" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            What you&apos;ll be able to do
          </h2>
          <dl className="mt-10 grid sm:grid-cols-2 sm:gap-x-12">
            {features.map((f) => (
              <div
                key={f.name}
                className="grid gap-1 border-t border-rule py-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
              >
                <dt className="font-serif text-lg font-medium">{f.name}</dt>
                <dd className="text-[0.9375rem] text-on-surface-muted">{f.body}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section
          aria-labelledby="rules"
          className="grid gap-8 border-t border-rule py-14 sm:py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
        >
          <h2 id="rules" className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            The rules we hold ourselves to
          </h2>
          <ul className="space-y-4 font-serif text-xl leading-snug">
            {rules.map((rule) => (
              <li key={rule} className="border-l-2 border-rule pl-4">
                {rule}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="flex flex-col gap-2 border-t border-rule py-8 text-sm text-on-surface-muted sm:flex-row sm:justify-between">
        <p>Receipts is independent and nonpartisan.</p>
        <p>© 2026 Receipts</p>
      </footer>
    </div>
  );
}
