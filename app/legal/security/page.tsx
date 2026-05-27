import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Security Overview — HEAT',
  description: 'How HEAT handles wallet analysis, data access, and infrastructure security.',
};

export default function SecurityPage() {
  return (
    <div className="container py-10 max-w-2xl font-mono text-xs">
      <div className="system-status-bar mb-6">
        <div>LEGAL // SECURITY OVERVIEW</div>
        <div>HEAT v2.8</div>
      </div>

      <header className="report-title-block">
        <h1 className="h1 text-white text-2xl">Security Overview</h1>
        <div className="micro text-[var(--accent)] mt-2">Last updated: May 2025</div>
      </header>

      <div className="space-y-8 text-white/70 leading-relaxed">

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">READ-ONLY ANALYSIS</div>
          <p>
            HEAT performs behavioral analysis using only the public on-chain data associated with the wallet address you provide.
            No private keys, seed phrases, or wallet credentials are ever requested or accessed.
          </p>
          <p className="mt-3">
            Submitting a wallet address to HEAT is equivalent to looking up that address on a public block explorer.
            Your assets cannot be accessed, moved, or modified by this platform.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">DATA HANDLING</div>
          <p>
            HEAT does not store submitted wallet addresses beyond the duration of your active session.
            No user accounts are created. No personal data is collected.
          </p>
          <p className="mt-3">
            Balance estimates and behavioral classifications are generated locally in your browser session
            and are not transmitted to or stored on HEAT infrastructure.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">VAULT INFRASTRUCTURE</div>
          <p>
            Strategy Vault deployment is handled by VaultFi, an independent infrastructure provider.
            Vault activation requires explicit wallet confirmation through your own wallet software.
            HEAT does not initiate, sign, or transmit transactions on your behalf.
          </p>
          <p className="mt-3">
            Review VaultFi's security documentation before activating a Strategy Vault.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">SIMULATION OUTPUT</div>
          <p>
            All yield projections and behavioral classifications displayed in Intelligence Reports
            are simulations based on historical behavioral pattern matching. They are not guarantees
            of future performance and should not be treated as financial advice.
          </p>
          <p className="mt-3">
            See the <Link href="/legal/risk" className="text-[var(--accent)] hover:underline">Risk Disclosure</Link> for full details.
          </p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-[#141721] flex flex-wrap gap-6 text-white/30">
        <Link href="/" className="hover:text-white transition-colors">HEAT HOME</Link>
        <Link href="/legal/risk" className="hover:text-white transition-colors">RISK DISCLOSURE</Link>
        <Link href="/legal/terms" className="hover:text-white transition-colors">TERMS</Link>
        <Link href="/legal/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
      </div>
    </div>
  );
}
