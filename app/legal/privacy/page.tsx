import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — HEAT',
  description: 'Privacy policy for the HEAT behavioral intelligence platform.',
};

export default function PrivacyPage() {
  return (
    <div className="container py-10 max-w-2xl font-mono text-xs">
      <div className="system-status-bar mb-6">
        <div>LEGAL // PRIVACY POLICY</div>
        <div>HEAT v2.8</div>
      </div>

      <header className="report-title-block">
        <h1 className="h1 text-white text-2xl">Privacy Policy</h1>
        <div className="micro text-[var(--accent)] mt-2">Last updated: May 2025</div>
      </header>

      <div className="space-y-8 text-white/70 leading-relaxed">

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">WHAT DATA WE HANDLE</div>
          <p>
            HEAT operates with a minimal data footprint. The only input you provide is a wallet address —
            which is public on-chain data by nature. HEAT does not collect names, email addresses,
            IP addresses for storage, payment information, or any personally identifiable information.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">HOW WALLET ADDRESSES ARE USED</div>
          <p>
            Wallet addresses you submit are used solely to generate behavioral analysis and
            classification output for your current session. They are not stored in any database,
            associated with any user profile, or shared with third parties by HEAT.
          </p>
          <p className="mt-3">
            Note: wallet addresses are inherently public. Any address you submit can be independently
            looked up on public block explorers by anyone.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">COOKIES AND ANALYTICS</div>
          <p>
            HEAT may use minimal session cookies required for standard web application functionality.
            No tracking cookies, advertising cookies, or behavioral analytics cookies are used.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">THIRD-PARTY SERVICES</div>
          <p>
            When you proceed to Strategy Vault activation, you are redirected to VaultFi,
            an independent third-party platform. HEAT does not control VaultFi's data practices.
            Review VaultFi's privacy policy before connecting your wallet to their infrastructure.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">DATA RETENTION</div>
          <p>
            HEAT retains no user data. Session data exists only in your browser and is cleared
            when your session ends. There is no persistent storage of any input or output generated
            through your use of this platform.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">CHANGES TO THIS POLICY</div>
          <p>
            This privacy policy may be updated periodically. The effective date above reflects
            the most recent revision. Continued use of HEAT following any update constitutes
            acceptance of the revised policy.
          </p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-[#141721] flex flex-wrap gap-6 text-white/30">
        <Link href="/" className="hover:text-white transition-colors">HEAT HOME</Link>
        <Link href="/legal/security" className="hover:text-white transition-colors">SECURITY</Link>
        <Link href="/legal/risk" className="hover:text-white transition-colors">RISK DISCLOSURE</Link>
        <Link href="/legal/terms" className="hover:text-white transition-colors">TERMS</Link>
      </div>
    </div>
  );
}
