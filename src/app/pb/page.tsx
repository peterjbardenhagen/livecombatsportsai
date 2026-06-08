import Link from "next/link";
import { ArrowDownRight, BarChart3, CalendarDays, CircleDollarSign, FileText, Gauge, TrendingDown } from "lucide-react";
import { lcsPbRecords, lcsPbSummary } from "@/data/lcs-pb";

export const metadata = {
  title: "LCS-PB Business Intelligence",
  description:
    "Reverse-chronological LiveCombatSports PB evidence, invoices, account ownership, migration options and business intelligence.",
};

const currency = new Intl.NumberFormat("en-AU", {
  style: "currency",
  currency: "AUD",
  maximumFractionDigits: 0,
});

function formatMoney(value = 0) {
  return currency.format(value);
}

const workRewardPoints = lcsPbRecords.map((record) => ({
  label: record.date.slice(0, 4),
  work: record.effort,
  reward: record.reward,
}));

const maxVisual = Math.max(lcsPbSummary.quotedIncGst, lcsPbSummary.invoicedIncGst, lcsPbSummary.recoveredIncGst);

export default function LcsPbPage() {
  const rewardGap = Math.max(0, lcsPbSummary.quotedIncGst - lcsPbSummary.recoveredIncGst);
  const recoveryRate = Math.round((lcsPbSummary.recoveredIncGst / lcsPbSummary.quotedIncGst) * 100);

  return (
    <section className="section-band lcs-pb-page">
      <div className="pb-shell">
        <div className="pb-10">
          <div className="section-mark">
            <BarChart3 className="h-4 w-4" />
            LCS-PB evidence dashboard
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
            <div>
              <h1 className="max-w-5xl text-5xl font-black leading-none tracking-tight text-white sm:text-7xl">
                Work effort is visible. Reward is not proportional.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
                All locally available LiveCombatSports PB records have been loaded into a reverse-chronological evidence ledger, then summarised into business intelligence views for quoted work, invoiced recovery, discounts, account exposure and migration effort.
              </p>
            </div>
            <div className="rounded-lg border border-accent-green/25 bg-accent-green/10 p-5">
              <p className="font-mono text-xs font-extrabold uppercase tracking-wide text-accent-green-glow">
                Current readout
              </p>
              <p className="mt-3 text-3xl font-black text-white">{recoveryRate}% recovery signal</p>
              <p className="mt-3 text-sm leading-6 text-text-secondary">
                Compared with quoted work captured in the evidence set, the recovered invoice trail is materially smaller and spread across years of support, hosting, DNS, email and migration administration.
              </p>
            </div>
          </div>
        </div>

        <div className="bi-kpi-grid">
          <div className="bi-kpi">
            <FileText className="h-5 w-5 text-accent-green-glow" />
            <span>Quoted scope</span>
            <strong>{formatMoney(lcsPbSummary.quotedIncGst)}</strong>
          </div>
          <div className="bi-kpi">
            <CircleDollarSign className="h-5 w-5 text-accent-green-glow" />
            <span>Invoiced / recovered</span>
            <strong>{formatMoney(lcsPbSummary.recoveredIncGst)}</strong>
          </div>
          <div className="bi-kpi">
            <TrendingDown className="h-5 w-5 text-accent-yellow" />
            <span>Known discounts / write-downs</span>
            <strong>{formatMoney(lcsPbSummary.knownDiscountIncGst)}</strong>
          </div>
          <div className="bi-kpi">
            <Gauge className="h-5 w-5 text-accent-yellow" />
            <span>Indicative reward gap</span>
            <strong>{formatMoney(rewardGap)}</strong>
          </div>
        </div>

        <div className="bi-grid">
          <article className="bi-panel">
            <div className="bi-panel-head">
              <h2>Financial signal</h2>
              <p>Quoted work versus the smaller invoice/recovery trail available in the files.</p>
            </div>
            <div className="bar-list">
              {[
                ["Quoted scope", lcsPbSummary.quotedIncGst],
                ["Invoiced total", lcsPbSummary.invoicedIncGst],
                ["Recovered trail", lcsPbSummary.recoveredIncGst],
                ["Reward gap", rewardGap],
              ].map(([label, value]) => (
                <div className="bar-row" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{formatMoney(value as number)}</strong>
                  </div>
                  <div className="bar-track">
                    <div style={{ width: `${Math.max(4, ((value as number) / maxVisual) * 100)}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="bi-panel">
            <div className="bi-panel-head">
              <h2>Effort vs reward</h2>
              <p>Qualitative score from the source scope: higher bars show effort intensity and lower green bars show realised reward.</p>
            </div>
            <div className="effort-chart" aria-label="Effort versus reward chart">
              {workRewardPoints.map((point, index) => (
                <div className="effort-point" key={`${point.label}-${index}`}>
                  <div className="effort-bars">
                    <span className="work" style={{ height: `${point.work * 10}%` }} />
                    <span className="reward" style={{ height: `${Math.max(4, point.reward * 10)}%` }} />
                  </div>
                  <small>{point.label}</small>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <span><i className="work-key" /> Work effort</span>
              <span><i className="reward-key" /> Reward/recovery</span>
            </div>
          </article>

          <article className="bi-panel">
            <div className="bi-panel-head">
              <h2>Migration burden</h2>
              <p>Known handover/migration exposure captured in the 2025 workbook.</p>
            </div>
            <div className="burden-grid">
              <div>
                <strong>{formatMoney(lcsPbSummary.migrationCostExGst)}</strong>
                <span>Estimated migration cost ex GST</span>
              </div>
              <div>
                <strong>{formatMoney(lcsPbSummary.ongoingKnownAnnualExGst)}</strong>
                <span>Known annual account/service cost ex GST</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Mailboxes requiring export, restore and validation</span>
              </div>
              <div>
                <strong>5</strong>
                <span>Service/account lines requiring ownership decisions</span>
              </div>
            </div>
          </article>

          <article className="bi-panel">
            <div className="bi-panel-head">
              <h2>Evidence coverage</h2>
              <p>Reverse-chronological source set now visible in the app.</p>
            </div>
            <div className="coverage-list">
              {["Invoice", "Quote", "Account", "Migration", "Evidence"].map((type) => {
                const count = lcsPbRecords.filter((record) => record.type === type).length;
                return (
                  <div key={type}>
                    <span>{type}</span>
                    <strong>{count}</strong>
                  </div>
                );
              })}
            </div>
          </article>
        </div>

        <div className="ledger-head">
          <div>
            <div className="section-mark">
              <CalendarDays className="h-4 w-4" />
              Reverse chronological ledger
            </div>
            <h2>All available LCS-PB records</h2>
          </div>
          <Link href="/contact" className="text-link">
            Add missing records <ArrowDownRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="evidence-ledger">
          {lcsPbRecords.map((record) => (
            <article className="ledger-card" key={record.id}>
              <div className="ledger-date">
                <span>{record.date}</span>
                <strong>{record.type}</strong>
              </div>
              <div>
                <h3>{record.title}</h3>
                <p>{record.source}</p>
                <ul>
                  {record.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="ledger-money">
                <span>Ex GST {record.amountExGst ? formatMoney(record.amountExGst) : "n/a"}</span>
                <span>Inc GST {record.amountIncGst ? formatMoney(record.amountIncGst) : "n/a"}</span>
                <strong>Recovered {formatMoney(record.recoveredIncGst ?? 0)}</strong>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
