'use client';

import React, { useState } from 'react';

export default function VaultBridgePage() {
  const [isNavigating, setIsNavigating] = useState(false);

  const handleCreateVault = () => {
    setIsNavigating(true);
    // Add a smooth transition before navigating
    setTimeout(() => {
      window.location.href = 'https://vault-fi-3y63.vercel.app/vault-init';
    }, 300);
  };

  return (
    <div className="min-h-screen bg-[#0F1115] text-white px-4 py-10">
      <div className="mx-auto w-full max-w-xl">
        <section className="vault-bridge rounded-2xl border border-white/5 bg-[#1F2128] px-6 py-8 shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
          <header className="text-center">
            <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-emerald-300">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="4.25"
                  y="6.25"
                  width="15.5"
                  height="11.5"
                  rx="2.25"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="9" cy="12" r="1.25" fill="currentColor" />
                <path
                  d="M13 11.25H16.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M6.5 18.25H17.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-[#F5F5F5]">
              We've extracted this wallet's earning behaviour.
            </h1>
            <p className="mt-3 text-sm md:text-base lg:text-[18px] leading-relaxed text-[#B0B0B0]">
              To activate mirroring, you need a VaultFi vault.
            </p>
          </header>

          <div className="mt-8">
            <button
              type="button"
              onClick={handleCreateVault}
              disabled={isNavigating}
              className="btn-pulse inline-flex w-full items-center justify-center rounded-xl bg-[#FFD166] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(0,0,0,0.95)] md:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isNavigating ? '...' : 'Create Vault'}
            </button>
            <p className="mt-2 text-center text-xs text-[#B0B0B0] md:text-sm">
              You can fund your vault after creation.
            </p>
          </div>

          <div className="mt-8 flex flex-col items-center gap-1 text-xs text-[var(--muted)] md:flex-row md:justify-center md:gap-4">
            <a href="#" className="hover:text-white/90 transition-colors">
              How VaultFi vaults work
            </a>
            <a href="#" className="hover:text-white/90 transition-colors">
              Security & Privacy
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
