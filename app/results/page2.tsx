'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function ResultsPageLowBalanceContent() {
  const searchParams = useSearchParams();
  const rawAddress = searchParams.get('address') || '0xUNKNOWN_ADDRESS';
  const balance = parseFloat(searchParams.get('balance') || '0');

  const displayAddress = rawAddress.length > 20 
    ? `${rawAddress.slice(0, 8)}...${rawAddress.slice(-8)}` 
    : rawAddress;

  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  }).format(balance);

  return (
    <div className="container py-8 max-w-xl font-mono text-xs">
      {/* HUD Header */}
      <div className="system-status-bar mb-6">
        <div>BEHAVIORAL REPORT // DIAGNOSTIC MODE</div>
        <div>TARGET: {displayAddress}</div>
      </div>

      <div className="terminal-window border-l-2 border-l-[var(--amber)]">
        <header className="report-title-block border-none pb-0 mb-4">
          <h1 className="h1 text-white text-xl">Diagnostic Completed</h1>
          <div className="subtext text-white/70 mt-1">Staging analysis resolved: Dormant State.</div>
          <div className="micro text-[var(--amber)] mt-3">STATUS: INDEXING RUN COMPLETED // NO RECURSIONS FOUND</div>
        </header>

        <div className="space-y-4 pt-4 border-t border-white/5">
          <div>
            <span className="mono-label text-white/40">Indexed Address Signature</span>
            <p className="mt-1 text-white font-mono">{rawAddress}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="mono-label text-white/40">Active Wallet Balance</span>
              <p className="mt-1 text-[#ef5350] font-bold">{formattedBalance}</p>
            </div>
            <div>
              <span className="mono-label text-white/40">Required Balance Threshold</span>
              <p className="mt-1 text-white/70 font-bold">$100.00 USD</p>
            </div>
          </div>

          <div className="bg-[#050608] border border-white/5 p-4 rounded text-white/60 space-y-2 mt-4 leading-relaxed">
            <div className="font-semibold text-white/80">BEHAVIORAL LOG NOTE:</div>
            <div>
              The target node balance is below the minimum threshold required to calculate execution loops. 
              Active capital signature must be $100.00 USD or greater to index cross-chain staging transitions, 
              accumulation sequences, and yield rotation paths.
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/5 text-center">
          <Link
            href={`/vault?address=${rawAddress}&low_balance=true`}
            className="btn-terminal btn-terminal-amber inline-block w-full text-center font-semibold"
          >
            Stage Execution Capital
          </Link>
          <p className="mt-3 text-[10px] text-white/30">
            A secure VaultFi vault serves as your dedicated on-chain execution environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ResultsPageLowBalance() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07080a] text-white/40 flex flex-col justify-center items-center font-mono text-xs">
        <div className="animate-pulse">LOADING DORMANT DIAGNOSTICS MODULE...</div>
      </div>
    }>
      <ResultsPageLowBalanceContent />
    </Suspense>
  );
}
