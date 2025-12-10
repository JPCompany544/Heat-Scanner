'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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

const SUPPORTED: Record<Chain, string> = {
  ethereum: 'Ethereum',
  solana: 'Solana',
  bsc: 'BSC',
  polygon: 'Polygon',
  base: 'Base',
  arbitrum: 'Arbitrum',
  bitcoin: 'Bitcoin',
  unknown: 'Unknown'
};

export default function HeatScanner() {
  const [wallet, setWallet] = useState('');
  const [detected, setDetected] = useState<Chain>('unknown');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Quick auto-chain detection heuristic by format
    const w = wallet.trim();
    if (!w) {
      setDetected('unknown');
      setError(null);
      return;
    }

    // Bitcoin legacy (1..., 3...) and bech32 (bc1...)
    if (/^(bc1|BC1)[0-9A-Za-z]{25,60}$/.test(w) || /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(w)) {
      setDetected('bitcoin');
      setError(null);
      return;
    }

    // Ethereum-like (0x... 40 hex chars)
    if (/^0x[a-fA-F0-9]{40}$/.test(w)) {
      setDetected('ethereum');
      setError(null);
      return;
    }

    // Solana base58 (32-44 chars, alphanumeric with [A-Za-z0-9])
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
      setError('Please enter a supported wallet address to scan.');
      return;
    }

    if (detected === 'unknown') {
      setError('Please enter a supported wallet address to scan.');
      return;
    }

    setError(null);
    scanWallet();
  };

  const scanWallet = async () => {
    const trimmed = wallet.trim();
    if (!trimmed) {
      return;
    }

    setLoading(true);
    try {
      // 1. Fetch USD balance using existing balance fetcher
      const balanceUSD = await fetchBalance(trimmed);

      // 2. Determine tier
      const tier = getWalletTier(balanceUSD);

      // 3. Low balance routing (<$100) -> page2
      if (balanceUSD < 100) {
        const params = new URLSearchParams({
          address: trimmed,
          balance: balanceUSD.toString(),
        });
        router.push(`/results/low?${params.toString()}`);
        return;
      }

      // 4. Get tier template
      const template = getTierTemplate(tier);

      // 5. Route to results with tier data
      const params = new URLSearchParams({
        eligible: 'true',
        tier,
        balance: balanceUSD.toString(),
        address: trimmed,
        template: template ? JSON.stringify(template) : '',
      });
      router.push(`/results?${params.toString()}`);
    } catch (error) {
      console.error('Error scanning wallet:', error);
      setError('Failed to scan wallet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="input-card" aria-label="Wallet scanner">
        <input
          className={`wallet-input${error ? ' wallet-input--error' : ''}`}
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          placeholder="Enter wallet address (0x..., .sol, or BTC address)"
          aria-label="Wallet address"
          disabled={loading}
        />
        <button
          type="submit"
          className="cta"
          disabled={loading || !wallet.trim()}
        >
          {loading ? 'Scanning...' : 'Scan Wallet'}
        </button>
      </form>

      {error && (
        <div className="mt-2 text-sm text-red-400 text-center">
          {error}
        </div>
      )}

      <div className="chains" aria-hidden>
        <span>Solana</span>
        <span>•</span>
        <span>Ethereum / EVM</span>
        <span>•</span>
        <span>Base</span>
        <span>•</span>
        <span>Arbitrum</span>
        <span>•</span>
        <span>Bitcoin</span>
      </div>

      <div className="mt-3 text-center text-sm text-[var(--muted)]">
        {wallet && (
          <div className="mt-2">
            Detected: <span className="font-medium capitalize">{SUPPORTED[detected]?.toLowerCase() || 'Unknown'}</span>
          </div>
        )}
      </div>
    </div>
  );
}
