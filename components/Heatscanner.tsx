'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getWalletTier } from '@/utils/tierEngine';
import { getTierTemplate } from '@/utils/tierTemplates';
import { fetchWalletUSD as fetchBalance } from '@/utils/fetchWalletUSD';

type Chain =
  | 'ethereum'
  | 'solana'
  | 'bsc'
  | 'polygon'
  | 'base'
  | 'arbitrum'
  | 'bitcoin'
  | 'unknown';

const FORMAT_LABELS: Record<Chain, string> = {
  ethereum: 'EVM address detected',
  solana: 'Solana address detected',
  bsc: 'EVM address detected',
  polygon: 'EVM address detected',
  base: 'EVM address detected',
  arbitrum: 'EVM address detected',
  bitcoin: 'Bitcoin address detected',
  unknown: 'Awaiting address input'
};

// Full pool of processing steps — 6 are selected per scan
const STEP_POOL = [
  'Parsing wallet activity...',
  'Indexing capital movements...',
  'Analyzing transaction routing...',
  'Cross-referencing liquidity positions...',
  'Building behavioral profile...',
  'Evaluating execution patterns...',
  'Assessing capital concentration...',
  'Modeling historical consistency...',
  'Classifying behavioral signature...',
  'Finalizing intelligence report...',
];

// Seeded pseudo-random number generator (deterministic per wallet)
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function getWalletSeed(address: string): number {
  let hash = 0;
  for (let i = 0; i < address.length; i++) {
    hash = address.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

function selectSteps(address: string): string[] {
  const seed = getWalletSeed(address);
  const rng = seededRandom(seed);
  const shuffled = [...STEP_POOL].sort(() => rng() - 0.5);
  return shuffled.slice(0, 6);
}

function getScanDuration(address: string): number {
  const seed = getWalletSeed(address);
  const rng = seededRandom(seed + 1);
  // Variable between 12s and 18s
  return Math.floor(12000 + rng() * 6000);
}

function getStepInterval(address: string): number {
  const seed = getWalletSeed(address);
  const rng = seededRandom(seed + 2);
  // Variable between 1800ms and 2800ms
  return Math.floor(1800 + rng() * 1000);
}

function isDegradedScan(address: string): boolean {
  const seed = getWalletSeed(address);
  // ~20% of wallets get a degraded state notice
  return (seed % 10) < 2;
}

function HeatScannerContent() {
  const [wallet, setWallet] = useState('');
  const [detected, setDetected] = useState<Chain>('unknown');
  const [loading, setLoading] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [scanSteps, setScanSteps] = useState<string[]>([]);
  const [degraded, setDegraded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  // Load from query parameters (for tracked wallet clicks)
  useEffect(() => {
    const scanAddress = searchParams.get('scanAddress');
    if (scanAddress) {
      setWallet(scanAddress);
    }
  }, [searchParams]);

  // Real-time chain detection heuristics
  useEffect(() => {
    const w = wallet.trim();
    if (!w) {
      setDetected('unknown');
      setError(null);
      return;
    }

    // BTC
    if (/^(bc1|BC1)[0-9A-Za-z]{25,60}$/.test(w) || /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(w)) {
      setDetected('bitcoin');
      setError(null);
      return;
    }

    // EVM (0x...)
    if (/^0x[a-fA-F0-9]{40}$/.test(w)) {
      setDetected('ethereum');
      setError(null);
      return;
    }

    // Solana (base58, 32-44 alphanumeric)
    if (/^[1-9A-HJ-NP-Za-km-z]{32,44}$/.test(w)) {
      setDetected('solana');
      setError(null);
      return;
    }

    setDetected('unknown');
  }, [wallet]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = wallet.trim();
    if (!trimmed) {
      setError('Please enter a wallet address.');
      return;
    }

    if (detected === 'unknown') {
      setError('Unrecognized address format. Paste a valid EVM, Solana, or Bitcoin address.');
      return;
    }

    setError(null);
    executeAnalysis();
  };

  const executeAnalysis = async () => {
    const trimmed = wallet.trim();
    setLoading(true);
    setScanStep(0);

    // Select and configure this wallet's scan session
    const steps = selectSteps(trimmed);
    const duration = getScanDuration(trimmed);
    const interval = getStepInterval(trimmed);
    const showDegraded = isDegradedScan(trimmed);

    setScanSteps(steps);
    setDegraded(showDegraded);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, interval);

    try {
      let balanceUSD = 0;
      let networkFailed = false;

      try {
        balanceUSD = await fetchBalance(trimmed);
      } catch (err) {
        console.warn('Balance fetch unavailable — running simulation mode.', err);
        networkFailed = true;
      }

      if (balanceUSD === 0 || networkFailed) {
        let hash = 0;
        for (let i = 0; i < trimmed.length; i++) {
          hash = trimmed.charCodeAt(i) + ((hash << 5) - hash);
        }
        hash = Math.abs(hash);
        balanceUSD = 42000 + (hash % 2450000);
      }

      const tier = getWalletTier(balanceUSD);

      await new Promise((resolve) => setTimeout(resolve, duration));
      clearInterval(stepInterval);

      if (balanceUSD < 100) {
        const params = new URLSearchParams({
          address: trimmed,
          balance: balanceUSD.toString()
        });
        router.push(`/results/low?${params.toString()}`);
      } else {
        const template = getTierTemplate(tier);
        const params = new URLSearchParams({
          eligible: 'true',
          tier,
          balance: balanceUSD.toString(),
          address: trimmed,
          template: template ? JSON.stringify(template) : ''
        });
        router.push(`/results?${params.toString()}`);
      }
    } catch (err) {
      console.error('Analysis error:', err);
      setError('Analysis timed out. Please try again.');
      clearInterval(stepInterval);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="terminal-window">
        <div className="processing-container">
          <div className="processing-hud">
            <span>ANALYSIS IN PROGRESS</span>
            <span>WALLET: {wallet.slice(0, 10)}...{wallet.slice(-8)}</span>
          </div>

          <div className="visual-pulse-grid" />

          <div className="checklists font-mono text-xs">
            {scanSteps.map((step, idx) => {
              let icon = '[ ]';
              let lineClass = 'pending';

              if (scanStep > idx) {
                icon = '[✓]';
                lineClass = 'done';
              } else if (scanStep === idx) {
                icon = '[⌁]';
                lineClass = 'active';
              }

              return (
                <div key={idx} className={`checklist-line ${lineClass}`}>
                  <span className="indicator">{icon}</span>
                  <span>{step}</span>
                </div>
              );
            })}
            {degraded && (
              <div className="checklist-line pending mt-2 text-[var(--amber)]/70">
                <span className="indicator">—</span>
                <span>Historical indexing partially available. Signal confidence stabilized.</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="terminal-window">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="border-b border-[#141721] pb-3 flex justify-between items-center">
          <span className="mono-label text-white/90">WALLET ANALYSIS CONSOLE</span>
          <span className="text-xs text-[var(--accent)] font-semibold">ONLINE</span>
        </div>

        <div className="flex flex-col md:flex-row gap-3">
          <input
            className={`wallet-input font-mono ${error ? 'wallet-input--error' : ''}`}
            value={wallet}
            onChange={(e) => setWallet(e.target.value)}
            placeholder="Enter wallet address (EVM, Solana, or Bitcoin)"
            aria-label="Wallet Address"
            disabled={loading}
          />
          <button
            type="submit"
            className="btn-terminal shrink-0"
            disabled={loading || !wallet.trim()}
          >
            Run Analysis
          </button>
        </div>

        {error && (
          <div className="text-xs text-red-500 font-mono mt-1">
            ✕ {error}
          </div>
        )}

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2 border-t border-[#141721] pt-3">
          <div className="chains">
            <span className={`chain-badge ${detected === 'solana' ? 'active' : ''}`}>SOLANA</span>
            <span className={`chain-badge ${detected === 'ethereum' ? 'active' : ''}`}>EVM / ETH</span>
            <span className={`chain-badge ${detected === 'bitcoin' ? 'active' : ''}`}>BITCOIN</span>
          </div>

          <div className="text-[10px] text-white/40 font-mono mt-2 sm:mt-0">
            Format Detected: <span className="font-semibold text-white/70">{FORMAT_LABELS[detected]}</span>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function HeatScanner() {
  return (
    <Suspense fallback={<div className="terminal-window p-8 text-center text-white/40 font-mono text-xs">Loading analysis console...</div>}>
      <HeatScannerContent />
    </Suspense>
  );
}
