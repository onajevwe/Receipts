/**
 * The hero object: one receipt, showing how Receipts records a promise.
 *
 * Everything on this slip is fictional and labelled as an example. It exists
 * to show the format, especially the idea that a promise only reaches the
 * stage the records support: an appropriation in a budget is not delivery.
 */

type Stage = {
  name: string;
  evidence: string | null; // null = no record found yet
};

const stages: Stage[] = [
  { name: "Promise", evidence: "Campaign rally, video at 14:32" },
  { name: "Announcement", evidence: "State government press release" },
  { name: "Appropriation", evidence: "2022 budget, line 47, page 112" },
  { name: "Funds released", evidence: null },
  { name: "Expenditure", evidence: null },
  { name: "Implementation", evidence: null },
  { name: "Documented outcome", evidence: null },
];

export function ReceiptSlip() {
  const documented = stages.filter((s) => s.evidence !== null).length;

  return (
    <figure
      className="slip-edge relative mx-auto w-full max-w-[25rem] bg-slip px-6 pt-6 pb-10 text-ink shadow-[0_1px_0_var(--linen),0_18px_40px_-24px_rgb(28_29_27/0.45)] sm:px-8"
      aria-labelledby="slip-title"
    >
      <div className="flex items-baseline justify-between gap-4 border-b border-dashed border-brass pb-3">
        <p className="font-serif text-xl font-semibold tracking-tight">
          Receipts.
        </p>
        <p className="font-mono text-xs text-muted">No. RX-EXAMPLE-0001</p>
      </div>

      <h2 id="slip-title" className="sr-only">
        Example receipt: a fictional road promise, documented to the
        appropriation stage
      </h2>

      <dl className="mt-4 grid grid-cols-[5.5rem_1fr] gap-x-3 gap-y-1 text-sm">
        <dt className="text-muted">Speaker</dt>
        <dd>A state governor</dd>
        <dt className="text-muted">Said on</dt>
        <dd className="font-mono text-[0.8125rem]">2021-03-12</dd>
      </dl>

      <blockquote className="mt-4 border-l-2 border-ink pl-4 font-serif text-xl leading-snug italic">
        “We will complete the Riverside link road within eighteen months.”
      </blockquote>

      <p className="mt-6 mb-2 text-sm text-muted">
        What the records show: {documented} of {stages.length} stages documented
      </p>

      <div className="relative">
        <ol className="text-sm">
          {stages.map((stage, i) => {
            const found = stage.evidence !== null;
            return (
              <li
                key={stage.name}
                className="grid grid-cols-[1.25rem_1fr] gap-x-3 border-t border-linen py-2 first:border-t-0"
              >
                <span
                  aria-hidden="true"
                  className={`stage-mark mt-[0.35rem] block size-3 ${
                    found ? "bg-ink" : "border border-muted"
                  }`}
                  style={{ "--i": i } as React.CSSProperties}
                />
                <div>
                  <p className={found ? "font-medium" : "text-muted"}>
                    {stage.name}
                    <span className="sr-only">
                      {found ? ": documented" : ": no record found"}
                    </span>
                  </p>
                  <p className="text-xs text-muted">
                    {stage.evidence ?? "No record found yet"}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
        <p
          className="stamp pointer-events-none absolute right-0 bottom-4 -rotate-6 bg-slip/80 border-2 border-green px-2 py-1 font-mono text-[0.6875rem] leading-tight font-medium text-green"
          aria-hidden="true"
        >
          Example only
          <br />
          Not a real record
        </p>
      </div>

      <figcaption className="mt-5 border-t border-dashed border-brass pt-3 text-xs text-muted">
        A fictional example of the format. A budget line is not a finished road,
        so this receipt stops at the last stage the records support.
      </figcaption>
    </figure>
  );
}
