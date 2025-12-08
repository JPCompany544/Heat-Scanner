// app/page.tsx
import React from 'react';
import Heatscanner from '../components/Heatscanner';
import HottestWallets from '../components/HottestWallets';

export default function HomePage() {
  return (
    <div className="container">
      <header className="header">
        <h1 className="h1">Heat Scanner</h1>
        <div className="subtext">See how high-earning wallets move, grow, and behave.</div>
        <div className="micro">VaultFi extracts behaviour patterns — not just numbers.</div>
      </header>

      <React.Suspense fallback={<div className="text-center py-20 opacity-50">Loading scanner...</div>}>
        <Heatscanner />
      </React.Suspense>

      <section className="props-grid" aria-label="Value propositions">
        <div className="prop">
          <div className="icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="6" cy="8" r="1.4" stroke="#06D6A0" strokeWidth="1.2" />
              <circle cx="12" cy="5" r="1.4" stroke="#06D6A0" strokeWidth="1.2" />
              <circle cx="18" cy="9" r="1.4" stroke="#06D6A0" strokeWidth="1.2" />
              <circle cx="8" cy="16" r="1.4" stroke="#06D6A0" strokeWidth="1.2" />
              <circle cx="16" cy="17" r="1.4" stroke="#06D6A0" strokeWidth="1.2" />
              <path
                d="M7.3 8.7L10.7 6.3M13.1 5.7L16.8 7.8M6.7 9.6L7.4 14.4M12 6.7L15 15.2M9.2 16L14.6 16.6"
                stroke="#06D6A0"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="title">Behaviour Intelligence</div>
          <div className="copy">We track movement, not noise.</div>
        </div>

        <div className="prop">
          <div className="icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4.25"
                y="5.25"
                width="6.5"
                height="13.5"
                rx="2.5"
                stroke="#06D6A0"
                strokeWidth="1.1"
              />
              <rect
                x="13.25"
                y="5.25"
                width="6.5"
                height="13.5"
                rx="2.5"
                stroke="#06D6A0"
                strokeWidth="1.1"
              />
              <path
                d="M7.5 9.2L7.5 14.8M16.5 9.2L16.5 14.8"
                stroke="#06D6A0"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <path
                d="M9.2 8L11 6.2M15 6.2L16.8 8M9.2 16L11 17.8M15 17.8L16.8 16"
                stroke="#06D6A0"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="title">Mirror-Ready Patterns</div>
          <div className="copy">Extract scalable signals instantly.</div>
        </div>

        <div className="prop">
          <div className="icon">
            <svg
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 3L7 13.2H11.6L10.8 21L17 10.4H12.6L12.5 3Z"
                stroke="#06D6A0"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="title">Instant Activation</div>
          <div className="copy">One scan unlocks the path forward.</div>
        </div>
      </section>

      <section className="social">
        <h3>Recent Signals</h3>
        <div className="stats">
          <div>Top Wallet ROI (24h): <strong>+143%</strong></div>
          <div>Signals Generated: <strong>382</strong></div>
          <div>Tracked Chains: <strong>4</strong></div>
        </div>
      </section>

      <HottestWallets />

      <footer className="footer" role="contentinfo">
        <a href="#">What is VaultFi?</a>
        <a href="#">How it works</a>
        <a href="#">Security</a>
      </footer>
    </div>
  );
}
