'use client';

import React, { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function VaultBridgeContent() {
  const searchParams = useSearchParams();
  const rawAddress = searchParams.get('address') || '0xUNKNOWN_ADDRESS';
  const isLowBalance = searchParams.get('low_balance') === 'true';

  const [deployStep, setDeployStep] = useState(0);
  const [isDeploying, setIsDeploying] = useState(false);

  const displayAddress = rawAddress.length > 20
    ? `${rawAddress.slice(0, 8)}...${rawAddress.slice(-8)}`
    : rawAddress;

  const handleCreateVault = () => {
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => {
      setDeployStep(2);
      setTimeout(() => {
        setDeployStep(3);
        setTimeout(() => {
          window.location.href = 'https://vault-fi-3y63.vercel.app/app/vaults/solis-yield-vault';
        }, 800);
      }, 800);
    }, 700);
  };

  return (
    <div className="container py-12 max-w-xl font-mono text-xs">
      {/* HUD Header */}
      <div className="system-status-bar mb-6">
        <div>VAULT SETUP // STRATEGY ACTIVATION</div>
        <div>WALLET: {displayAddress}</div>
      </div>

      <div className="terminal-window">
        <header className="report-title-block border-none pb-0 mb-6">
          <h1 className="h1 text-white text-xl">Activate Strategy Vault</h1>
          <p className="subtext text-white/70 mt-1">
            Set up a dedicated execution environment aligned with the identified behavioral profile.
          </p>
          <div className="micro text-[var(--accent)] mt-3">SYSTEM PROTOCOL: VAULTFI GATEWAY v1.4</div>
        </header>

        {isDeploying ? (
          <div className="bg-[#050608] border border-white/5 p-6 rounded space-y-4 font-mono text-xs">
            <div className="text-[var(--amber)] animate-pulse">INITIALIZING STRATEGY VAULT...</div>
            <div className="space-y-2 mt-2">
              <div className={deployStep >= 1 ? 'text-[var(--accent)]' : 'text-white/30'}>
                {deployStep >= 1 ? '[✓]' : '[ ]'} [1/3] Preparing vault configuration...
              </div>
              <div className={deployStep >= 2 ? 'text-[var(--accent)]' : 'text-white/30'}>
                {deployStep >= 2 ? '[✓]' : '[ ]'} [2/3] Verifying strategy parameters...
              </div>
              <div className={deployStep >= 3 ? 'text-[var(--accent)]' : 'text-white/30'}>
                {deployStep >= 3 ? '[✓]' : '[ ]'} [3/3] Activating vault interface...
              </div>
            </div>
            <div className="visual-pulse-grid mt-4" style={{ height: '30px' }} />
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-[#050608] border border-white/5 p-4 rounded text-white/70 space-y-3 leading-relaxed">
              <div className="font-semibold text-white/90">TRANSITION OVERVIEW:</div>
              <div>
                Manual replication of this behavioral signature carries elevated execution risk.
                A Strategy Vault provides a dedicated environment that aligns capital allocation
                with the identified rotation patterns and execution windows.
              </div>
              {isLowBalance && (
                <div className="text-[var(--amber)] border-t border-white/5 pt-2 mt-2">
                  * Minimum capital threshold ($100 USD) required to activate full strategy tracking.
                </div>
              )}
            </div>

            <div className="border-t border-white/5 pt-4">
              <button
                type="button"
                onClick={handleCreateVault}
                className="btn-terminal btn-terminal-amber w-full text-center font-semibold cursor-pointer"
              >
                Activate Strategy Vault
              </button>
              <p className="mt-3 text-[10px] text-white/30 text-center">
                Vault activation requires wallet confirmation.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-white/5 flex justify-between text-white/40">
          <a href="/legal/security" className="hover:text-white transition-colors">SECURITY OVERVIEW</a>
          <a href="/legal/terms" className="hover:text-white transition-colors">TERMS OF USE</a>
        </div>
      </div>
    </div>
  );
}

export default function VaultBridgePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07080a] text-white/40 flex flex-col justify-center items-center font-mono text-xs">
        <div className="animate-pulse">Loading vault interface...</div>
      </div>
    }>
      <VaultBridgeContent />
    </Suspense>
  );
}
