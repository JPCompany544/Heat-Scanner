import React from 'react';
import Link from 'next/link';

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-[#0c0c0f] text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="w-full rounded-2xl bg-[#0F1115] px-4 py-8 text-center border-b border-[#2C2F36] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-[#F5F5F5]">
                Behaviour Pattern Identified
              </h1>
              <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base lg:text-[18px] leading-relaxed text-[#B0B0B0]">
                Extracted from on-chain activity of this wallet.
              </p>
              <div className="mt-5 mx-auto h-[2px] w-16 rounded-full bg-gradient-to-r from-[#06D6A0] via-[#FFD166] to-[var(--accent)] opacity-80" />
            </div>
          </div>
        </header>

        {/* Section 1: Wallet Snapshot */}
        <section className="mb-12">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xs font-semibold tracking-[0.25em] text-[#B0B0B0]">
              WALLET SNAPSHOT
            </h2>
            <div className="hidden items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Mirror potential: 92/100</span>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-[#1a1a1c] bg-gradient-to-br from-[#171721] via-[#121215] to-[#191425] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1.4fr_1fr] md:p-7">
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Wallet ID
                  </span>
                  <p className="mt-1 text-lg font-semibold">
                    Whale Address #442
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Observed Activity
                  </span>
                  <p className="mt-1 text-base font-semibold text-[#06D6A0]">
                    $2.8M moved in the last 60 days
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Profit Consistency
                  </span>
                  <p className="mt-1 text-base font-semibold text-[#06D6A0]">
                    High
                  </p>
                </div>
              </div>
              <div className="space-y-4 border-t border-[#232336] pt-4 md:border-l md:border-t-0 md:pl-6">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Dominant Strategy
                  </span>
                  <p className="mt-1 text-base font-semibold">
                    Behavioural Yield Loop
                  </p>
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                    Risk Profile
                  </span>
                  <p className="mt-1 text-base font-semibold text-[#FFD166]">
                    Controlled Aggression
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300 sm:hidden">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>92/100 Mirror potential</span>
            </div>
          </div>
        </section>

        {/* Section 2: Behavior Patterns */}
        <section className="mb-12">
          <h2 className="mb-3 text-xs font-semibold tracking-[0.25em] text-[#B0B0B0]">
            BEHAVIOUR PATTERNS
          </h2>
          <p className="mb-6 max-w-2xl text-sm text-[var(--muted)] md:text-base">
            These six recurring behaviours define how this wallet moves capital and harvests yield.
          </p>
          
          <div className="space-y-3">
            {[
              {
                number: 1,
                title: "Profit Timing",
                description: "Buys in early momentum → exits on controlled 2–3× cycles."
              },
              {
                number: 2,
                title: "Accumulation Trend",
                description: "Accumulates gradually over 7–14 days before major moves."
              },
              {
                number: 3,
                title: "Chain Rotation",
                description: "Cycles capital across Solana → Base → Solana for liquidity edges."
              },
              {
                number: 4,
                title: "Signature Move",
                description: "Repeats a liquidity-timing entry every 9–11 days."
              },
              {
                number: 5,
                title: "Vault Cycle",
                description: "Profit harvesting every 30–35 days."
              },
              {
                number: 6,
                title: "High-Value Behaviour Loops",
                description: "Re-enters winners after volatility resets."
              }
            ].map((item) => (
              <div
                key={item.number}
                className="flex items-start gap-3 rounded-lg border border-[#1d1f26] bg-[#0B0E11] px-4 py-3"
              >
                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#06D6A0]/15 text-[13px] font-semibold text-[#06D6A0]">
                  {item.number}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-semibold text-white md:text-lg">{item.title}</h3>
                  <p className="text-sm text-[#B0B0B0] md:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Bridge Sentence */}
        <section className="my-16">
          <div className="rounded-2xl border border-[#1a1a1c] bg-gradient-to-r from-white/5 via-transparent to-white/5 px-6 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
            <p className="mx-auto max-w-2xl text-balance text-2xl font-semibold leading-relaxed md:text-3xl">
              <span className="bg-gradient-to-r from-[#06D6A0] via-[#FFD166] to-[var(--accent)] bg-clip-text text-transparent">
                VaultFi can mirror this wallet's earning behaviour for you — automatically.
              </span>
            </p>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section className="mt-16 text-center">
          <Link 
            href="/vault" 
            className="btn-pulse inline-flex w-full items-center justify-center rounded-full bg-[#FFD166] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(0,0,0,0.95)] md:w-auto md:px-12 md:text-base"
          >
            Mirror This Wallet
          </Link>
          <p className="mt-3 text-xs text-[var(--muted)] md:text-sm">
            Requires a VaultFi vault to activate behaviour mirroring.
          </p>
        </section>
      </div>
    </div>
  );
}
