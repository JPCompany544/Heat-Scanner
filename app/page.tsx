import React from 'react';
import Heatscanner from '../components/Heatscanner';
import LiveSignalsFeed from '../components/LiveSignalsFeed';

export default function HomePage() {
  return (
    <div className="container">
      {/* Institutional System Status Bar */}
      <div className="system-status-bar font-mono">
        <div className="status-indicator">
          <span className="pulse-dot" />
          <span>HEAT v2.8 // OPERATIONAL</span>
        </div>
        <div className="hidden sm:flex gap-6">
          <span>SOLANA RPC: ACTIVE</span>
          <span>EVM ENDPOINT: ACTIVE</span>
          <span>UTC: {new Date().toISOString().substring(11, 19)}</span>
        </div>
      </div>

      {/* Terminal Title / Brand Header */}
      <header className="header">
        <h1 className="h1">HEAT</h1>
        <div className="subtext">Behavioral intelligence for on-chain capital.</div>
        <div className="micro">Analyze wallet behavior, map capital movement, and identify high-performing execution patterns.</div>
      </header>

      {/* Wallet Analysis Console */}
      <Heatscanner />

      {/* Live Intelligence Feed & Tracked Wallets */}
      <LiveSignalsFeed />

      {/* Operational Value Props Grid */}
      <section className="props-grid" aria-label="Platform capabilities">
        <div className="prop">
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H20V8H4V4Z" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 10H20V14H4V10Z" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4 16H20V20H4V16Z" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="title">Capital Movement Tracking</div>
          <div className="copy">
            Monitor capital rotations across EVM chains, stablecoin positions, and active liquidity pools in real time.
          </div>
        </div>

        <div className="prop">
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 17L12 22L22 17" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2 12L12 17L22 12" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="title">Accumulation Signature Analysis</div>
          <div className="copy">
            Identify structured positioning cycles, buy-side momentum, and capital concentration before pricing moves occur.
          </div>
        </div>

        <div className="prop">
          <div className="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3Z" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8V16" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M8 12H16" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="title">Execution Pattern Matching</div>
          <div className="copy">
            Generate behavioral parameters aligned with identified execution patterns for strategy vault deployment.
          </div>
        </div>
      </section>

      {/* Terminal Footer */}
      <footer className="footer font-mono" role="contentinfo">
        <div>HEAT // BEHAVIORAL INTELLIGENCE</div>
        <div className="flex gap-4">
          <a href="/legal/security">SECURITY</a>
          <a href="/legal/risk">RISK DISCLOSURE</a>
          <a href="/legal/terms">TERMS</a>
          <a href="/legal/privacy">PRIVACY</a>
        </div>
      </footer>
    </div>
  );
}
