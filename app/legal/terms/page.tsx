import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use — HEAT',
  description: 'Terms of use for the HEAT behavioral intelligence platform.',
};

export default function TermsPage() {
  return (
    <div className="container py-10 max-w-2xl font-mono text-xs">
      <div className="system-status-bar mb-6">
        <div>LEGAL // TERMS OF USE</div>
        <div>HEAT v2.8</div>
      </div>

      <header className="report-title-block">
        <h1 className="h1 text-white text-2xl">Terms of Use</h1>
        <div className="micro text-[var(--accent)] mt-2">Last updated: May 2025</div>
      </header>

      <div className="space-y-8 text-white/70 leading-relaxed">

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">ACCEPTANCE OF TERMS</div>
          <p>
            By accessing or using the HEAT platform, you agree to be bound by these Terms of Use.
            If you do not agree, do not use this platform.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">PERMITTED USE</div>
          <p>
            HEAT is provided for informational and analytical purposes. You may use this platform to:
          </p>
          <ul className="mt-3 space-y-1 list-none pl-2">
            <li>— Analyze publicly available on-chain wallet data</li>
            <li>— Review behavioral classification output for educational purposes</li>
            <li>— Explore strategy vault options through the VaultFi integration</li>
          </ul>
          <p className="mt-3">
            You may not use HEAT to engage in any activity that violates applicable law, or to
            misrepresent the nature of the analysis output to third parties.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">INTELLECTUAL PROPERTY</div>
          <p>
            All platform content, design, analysis frameworks, and proprietary classification
            systems are the intellectual property of HEAT and its operators. Unauthorized reproduction,
            distribution, or commercial use of platform output is prohibited.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">THIRD-PARTY SERVICES</div>
          <p>
            Strategy Vault deployment is operated by VaultFi, an independent third-party service.
            HEAT is not responsible for the operation, security, or terms of VaultFi or any other
            external platform linked from this service. Review all third-party terms before
            interacting with external infrastructure.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">LIMITATION OF LIABILITY</div>
          <p>
            HEAT is provided "as is" without warranty of any kind. To the fullest extent permitted
            by applicable law, HEAT and its operators disclaim all liability for any direct, indirect,
            incidental, or consequential damages arising from your use of this platform.
          </p>
        </section>

        <section className="terminal-window p-5">
          <div className="mono-label text-white/50 mb-3 tracking-wider">CHANGES TO TERMS</div>
          <p>
            These terms may be updated at any time. Continued use of HEAT following any update
            constitutes acceptance of the revised terms.
          </p>
        </section>

      </div>

      <div className="mt-10 pt-6 border-t border-[#141721] flex flex-wrap gap-6 text-white/30">
        <Link href="/" className="hover:text-white transition-colors">HEAT HOME</Link>
        <Link href="/legal/security" className="hover:text-white transition-colors">SECURITY</Link>
        <Link href="/legal/risk" className="hover:text-white transition-colors">RISK DISCLOSURE</Link>
        <Link href="/legal/privacy" className="hover:text-white transition-colors">PRIVACY</Link>
      </div>
    </div>
  );
}
