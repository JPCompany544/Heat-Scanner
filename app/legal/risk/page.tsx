import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Risk Disclosure — HEAT',
  description: 'Risk disclosure for behavioral analysis simulations and strategy vault deployment.',
};

export default function RiskPage() {
  return (
    <div className="container py-10 max-w-2xl font-mono text-xs">
      <div className="system-status-bar mb-6">
        <div>LEGAL // RISK DISCLOSURE</div>
        <div>HEAT v2.8</div>
      </div>

      <header className="report-title-block">
        <h1 className="h1 text-white text-2xl">Risk Disclosure</h1>
        <div className="micro text-[var(--accent)] mt-2">Last updated: May 2025</div>
      </header>

      <div className="space-y-8 text-white/70 leading-relaxed">

        <section className="terminal-window p-5 border-l-2 border-l-[var(--amber)]">
          <div className="mono-label text-white/50 mb-3 tracking-wider">NOT FINANCIAL ADVICE</div>
          <p>
            HEAT is an informational and analytical tool. Nothing on this platform constitutes financial advice,
            investment advice, or a recommendation to buy, sell, or hold any asset.
            All analysis is provided for informational purposes only.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">SIMULATED RETURNS</div>
          <p>
            The yield projections displayed in Intelligence Reports are generated from historical
            behavioral pattern matching across similar wallet profiles. They represent what a matched
            behavioral pattern produced historically — not what your wallet will produce in future periods.
          </p>
          <p className="mt-3">
            Past performance of any behavioral pattern is not indicative of future results.
            Simulated returns carry no guarantee of accuracy or replication.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">ON-CHAIN EXECUTION RISK</div>
          <p>
            DeFi and on-chain capital deployment carry significant risks including, but not limited to:
            smart contract vulnerabilities, liquidity risk, slippage, protocol failure, regulatory changes,
            and market volatility. Capital deployed through Strategy Vaults is subject to all applicable risks
            of decentralized finance infrastructure.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">BEHAVIORAL CLASSIFICATION ACCURACY</div>
          <p>
            Behavioral classifications produced by HEAT are probabilistic models based on on-chain data.
            Classification confidence metrics represent the historical consistency of a matched pattern,
            not a guarantee of future behavioral alignment. Classifications may be incomplete where
            historical transaction data is fragmented or partially indexed.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">USER RESPONSIBILITY</div>
          <p>
            By using HEAT, you acknowledge that you are solely responsible for any financial decisions
            made in connection with information displayed on this platform. HEAT accepts no liability
            for losses incurred through the use of this platform's analysis or simulations.
          </p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-[#141721] flex flex-wrap gap-6 text-white/30">
        <Link href="/" className="hover:text-white transition-colors">HEAT HOME</Link>
        <Link href="/legal/security" className="hover:text-white transition-colors">SECURITY</Link>
        <Link href="/legal/terms" className="hover:text-white transition-colors">TERMS</Link>
        <Link href="/legal/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
      </div>
    </div>
  );
}
