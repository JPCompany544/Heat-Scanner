'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Signal {
  id: string;
  timestamp: string;
  type: string;
  message: string;
  status: 'green' | 'amber' | 'blue';
}

const STATIC_TRACKED = [
  { address: "F4TprQ6WdkenYLfBrg5b5fL8JGp5yhojSKUTnG8U4EBD", chain: "Solana", activeVolume: "$1.20M", efficiency: "94.2%" },
  { address: "7jHK1mEJJdVcQw12Yo7bkQeF7B1jiNBxtxaftQ5aRq7L", chain: "Solana", activeVolume: "$980K", efficiency: "88.6%" },
  { address: "0xf375c5d69d153319594Ae1C8B5123C11c4fd9F45", chain: "EVM (Mainnet)", activeVolume: "$750K", efficiency: "91.1%" },
];

const INITIAL_SIGNALS: Signal[] = [
  {
    id: '1',
    timestamp: '15:42:10',
    type: 'ACCUMULATION SIGNAL',
    message: 'Tier IV wallet cluster increasing SOL exposure [+4.8k SOL].',
    status: 'green',
  },
  {
    id: '2',
    timestamp: '15:40:02',
    type: 'CROSS-CHAIN ROTATION',
    message: 'Capital migration detected: $1.2M shifted ETH to BASE liquidity pools.',
    status: 'blue',
  },
  {
    id: '3',
    timestamp: '15:37:45',
    type: 'EXECUTION PATTERN',
    message: 'Arbitrage loop consistency metrics above 87% across tracked addresses.',
    status: 'amber',
  },
];

// Expanded pool — 25 entries to prevent visible repetition within normal sessions
const SIGNAL_POOL: Omit<Signal, 'id' | 'timestamp'>[] = [
  { type: 'LIQUIDITY STAGING',       message: 'USDC capital consolidating in EVM gateway addresses ahead of rotation window.', status: 'amber' },
  { type: 'CROSS-CHAIN ROTATION',    message: 'Solana wallets rotating liquidity into Raydium concentrated positions.', status: 'green' },
  { type: 'YIELD POSITIONING',       message: 'Tier III address cluster completing 30-day yield cycle rebalance.', status: 'blue' },
  { type: 'VOLATILITY EXPOSURE',     message: 'High-conviction wallet shifting exposure toward delta-neutral positioning.', status: 'amber' },
  { type: 'PORTFOLIO REBALANCE',     message: 'Structured address cluster executing unified capital redistribution.', status: 'green' },
  { type: 'ACCUMULATION SIGNAL',     message: 'Buy-side momentum increasing across tracked mid-cap positions.', status: 'green' },
  { type: 'CAPITAL CONCENTRATION',   message: 'Stablecoin concentration rising in Tier IV wallets. Potential deployment pending.', status: 'amber' },
  { type: 'ROUTING ACTIVITY',        message: 'Multi-hop routing observed across Arbitrum and Base liquidity hubs.', status: 'blue' },
  { type: 'EXECUTION PATTERN',       message: 'Disciplined entry cadence identified across three indexed wallets.', status: 'green' },
  { type: 'LIQUIDITY MIGRATION',     message: '$2.1M capital rotation from Ethereum mainnet to L2 venues detected.', status: 'blue' },
  { type: 'CROSS-CHAIN ROTATION',    message: 'BTC-correlated wallet increasing stablecoin allocation across EVM chains.', status: 'amber' },
  { type: 'SIGNAL CONFIRMATION',     message: 'Behavioral pattern confirmed across 6 independently indexed addresses.', status: 'green' },
  { type: 'VOLATILITY EXPOSURE',     message: 'Reduced leverage observed in high-activity wallets. Risk-off repositioning.', status: 'amber' },
  { type: 'ACCUMULATION SIGNAL',     message: 'Structured accumulation window identified. Avg. entry size +18% vs. prior period.', status: 'green' },
  { type: 'LIQUIDITY STAGING',       message: 'Kamino Finance positions expanding. Concentrated liquidity staging detected.', status: 'blue' },
  { type: 'EXECUTION PATTERN',       message: 'Cross-venue order flow consistency at 89% for monitored Tier III cluster.', status: 'green' },
  { type: 'CAPITAL CONCENTRATION',   message: 'WETH/USDC pool weighting increasing across 4 indexed wallets.', status: 'blue' },
  { type: 'ROUTING ACTIVITY',        message: 'Jupiter DEX aggregate routing active. Large position split across 3 venues.', status: 'amber' },
  { type: 'PORTFOLIO REBALANCE',     message: 'Yield-bearing position liquidated. Capital reallocating to spot holdings.', status: 'amber' },
  { type: 'CROSS-CHAIN ROTATION',    message: 'ETH bridge volume elevated on Arbitrum gateway. Net inflow trend positive.', status: 'blue' },
  { type: 'SIGNAL CONFIRMATION',     message: 'Behavioral signature stable across 14-day observation window.', status: 'green' },
  { type: 'LIQUIDITY MIGRATION',     message: 'Uniswap v3 fee revenue harvest detected. Capital redeployed intraday.', status: 'green' },
  { type: 'VOLATILITY EXPOSURE',     message: 'Indexed apex wallet reducing perp exposure. Spot allocation increasing.', status: 'amber' },
  { type: 'ACCUMULATION SIGNAL',     message: 'Solana ecosystem wallets increasing USDC reserves. Deployment window likely.', status: 'green' },
  { type: 'EXECUTION PATTERN',       message: 'Timing consistency above threshold. Execution windows aligning with historical cadence.', status: 'blue' },
];

export default function LiveSignalsFeed() {
  const [signals, setSignals] = useState<Signal[]>(INITIAL_SIGNALS);
  const [clusterCount, setClusterCount] = useState(382);
  const [signalPoolIndex, setSignalPoolIndex] = useState(0);
  const router = useRouter();

  // Rotate through signal pool in order, with time-based offset for variety
  useEffect(() => {
    // Start from a time-seeded position so returning users see different signals
    const startOffset = Math.floor(Date.now() / 1000) % SIGNAL_POOL.length;
    setSignalPoolIndex(startOffset);
  }, []);

  // Real-time signal stream
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

      setSignalPoolIndex(prev => {
        const idx = prev % SIGNAL_POOL.length;
        const signal = SIGNAL_POOL[idx];

        const newSignal: Signal = {
          id: Math.random().toString(),
          timestamp: timeStr,
          type: signal.type,
          message: signal.message,
          status: signal.status,
        };

        setSignals(prevSigs => [newSignal, ...prevSigs.slice(0, 4)]);
        return prev + 1;
      });
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  // Cluster counter drifts slowly — ±1 to ±3 every 25–60 seconds
  useEffect(() => {
    const drift = () => {
      const delay = 25000 + Math.random() * 35000;
      setTimeout(() => {
        setClusterCount(prev => {
          const change = Math.floor(Math.random() * 3) + 1;
          const direction = Math.random() > 0.4 ? 1 : -1; // slight upward bias
          return Math.max(370, Math.min(410, prev + change * direction));
        });
        drift();
      }, delay);
    };
    drift();
  }, []);

  const handleSelectAddress = (address: string) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    router.push(`/?scanAddress=${address}&t=${Date.now()}`);
  };

  const getStatusClass = (status: string) => {
    if (status === 'green') return 'signal-green';
    if (status === 'amber') return 'signal-amber';
    return 'signal-blue';
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Live Activity Feed */}
      <div className="live-feed-window">
        <div className="live-feed-title">
          <span>LIVE BEHAVIORAL INTELLIGENCE FEED</span>
          <span className="text-white/30 font-light">SYSTEM FEED: ACTIVE</span>
        </div>
        <div className="space-y-1">
          {signals.map(sig => (
            <div key={sig.id} className="live-feed-row">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <span className="text-white/20 font-mono text-[10px]">{sig.timestamp}</span>
                <span className={`signal-status font-mono text-[11px] ${getStatusClass(sig.status)}`}>
                  [{sig.type}]
                </span>
                <span className="text-white/70 text-[11px] font-mono">{sig.message}</span>
              </div>
              <span className={`hidden md:inline w-2 h-2 rounded-full ${sig.status === 'green' ? 'bg-[#00E676]' : sig.status === 'amber' ? 'bg-[#FFD54F]' : 'bg-[#2979FF]'}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Tracked wallets table */}
      <div className="terminal-window mt-6">
        <div className="border-b border-[#141721] pb-3 mb-4 flex justify-between items-center">
          <span className="mono-label text-white/90">ACTIVE INDEXED WALLETS</span>
          <span className="text-xs text-[var(--muted)]">WALLETS MONITORED: {clusterCount}</span>
        </div>

        <div className="overflow-x-auto">
          <table className="matrix-table">
            <thead>
              <tr>
                <th className="w-12 text-center">#</th>
                <th>Wallet Address</th>
                <th>Network</th>
                <th>60D Volume</th>
                <th>Consistency</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {STATIC_TRACKED.map((wallet, index) => (
                <tr key={wallet.address}>
                  <td className="text-center text-white/30 font-semibold">#{index + 1}</td>
                  <td className="font-mono text-[var(--accent)] text-xs">
                    {wallet.address.slice(0, 8)}...{wallet.address.slice(-8)}
                  </td>
                  <td className="text-white/70 font-mono text-[11px]">{wallet.chain}</td>
                  <td className="text-white/80 font-mono text-[11px]">{wallet.activeVolume}</td>
                  <td className="text-[#FFD54F] font-mono text-[11px]">{wallet.efficiency}</td>
                  <td className="text-right">
                    <button
                      type="button"
                      onClick={() => handleSelectAddress(wallet.address)}
                      className="border border-[#2979FF]/40 text-[#2979FF] hover:bg-[#2979FF]/10 text-[10px] px-2.5 py-1 rounded transition-colors font-mono uppercase font-semibold cursor-pointer"
                    >
                      Analyze Wallet
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
