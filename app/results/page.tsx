'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface TierData {
  classification: string;
  consistency: string;
  rotationStyle: string;
  stagingSignature: string;
  riskProfile: string;
  sim30d: string;
  sim90d: string;
  confidence: string;
}

const TIER_MAPPING: Record<string, TierData> = {
  Tier0: {
    classification: 'Early-Stage Capital Profile',
    consistency: '68.2%',
    rotationStyle: 'Basic Single-Chain Rotation',
    stagingSignature: 'Linear accumulation',
    riskProfile: 'Unclassified / Low Activity',
    sim30d: '+8.4%',
    sim90d: '+28.1%',
    confidence: '76%'
  },
  Tier1: {
    classification: 'Tactical Rotation Operator',
    consistency: '78.4%',
    rotationStyle: 'Periodic Cross-Chain Rotation',
    stagingSignature: 'Measured consolidating activity',
    riskProfile: 'Balanced / Low Volatility',
    sim30d: '+12.6%',
    sim90d: '+42.3%',
    confidence: '82%'
  },
  Tier2: {
    classification: 'Structured Capital Router',
    consistency: '84.2%',
    rotationStyle: 'Structured Multi-Venue Rotation',
    stagingSignature: 'Tactical multi-protocol positioning',
    riskProfile: 'Controlled Aggression',
    sim30d: '+16.8%',
    sim90d: '+58.7%',
    confidence: '88%'
  },
  Tier3: {
    classification: 'High-Accumulation Behavioral Profile',
    consistency: '91.8%',
    rotationStyle: 'Cross-Chain Capital Rotation',
    stagingSignature: 'Structured Liquidity Staging',
    riskProfile: 'Disciplined Capital Preservation',
    sim30d: '+22.5%',
    sim90d: '+74.2%',
    confidence: '92%'
  },
  Tier4: {
    classification: 'Apex Liquidity Orchestrator',
    consistency: '96.5%',
    rotationStyle: 'Complex Multi-Hop Routing',
    stagingSignature: 'Apex liquidity positioning',
    riskProfile: 'Systematic Capture / Low Noise',
    sim30d: '+28.2%',
    sim90d: '+92.7%',
    confidence: '96%'
  }
};

function BehavioralReportContent() {
  const searchParams = useSearchParams();

  const rawAddress = searchParams.get('address') || '0xUNKNOWN_ADDRESS';
  const tier = (searchParams.get('tier') || 'Tier2') as keyof typeof TIER_MAPPING;
  const balance = parseFloat(searchParams.get('balance') || '280000');

  const isEVM = rawAddress.startsWith('0x');
  const displayAddress = rawAddress.length > 20
    ? `${rawAddress.slice(0, 8)}...${rawAddress.slice(-8)}`
    : rawAddress;

  const data = TIER_MAPPING[tier] || TIER_MAPPING.Tier2;

  // Format currency dynamically
  const formattedBalance = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(balance);

  // Generate logs matching the chain's environment (Solana or EVM)
  const simulatedLogs = isEVM
    ? [
      { time: '14:22:15 UTC', action: 'STAGING TRANSFER', detail: 'USDC from Ethereum to Arbitrum Bridge', amount: '$120,000' },
      { time: '10:05:42 UTC', action: 'YIELD DEPLOYMENT', detail: 'Aave v3 USDC collateral staging pool', amount: '$350,000' },
      { time: '02:18:11 UTC', action: 'LIQUIDITY HARVEST', detail: 'Uniswap v3 BASE WETH/USDC fees', amount: '$45,200' },
      { time: 'Yesterday', action: 'PORTFOLIO REBALANCE', detail: '1inch cross-chain aggregate route', amount: '$600,000' },
    ]
    : [
      { time: '14:22:15 UTC', action: 'STAGING TRANSFER', detail: 'SOL to deBridge router wallet', amount: '$120,000' },
      { time: '10:05:42 UTC', action: 'YIELD DEPLOYMENT', detail: 'Meteora DLMM SOL/USDC liquidity staging', amount: '$350,000' },
      { time: '02:18:11 UTC', action: 'LIQUIDITY HARVEST', detail: 'Kamino Finance lend/borrow optimizer', amount: '$45,200' },
      { time: 'Yesterday', action: 'PORTFOLIO REBALANCE', detail: 'Jupiter DEX aggregate routing path', amount: '$600,000' },
    ];

  return (
    <div className="container py-8 max-w-4xl font-mono text-xs">
      {/* HUD Header */}
      <div className="system-status-bar mb-6">
        <div>BEHAVIORAL ANALYSIS // ACTIVE REPORT</div>
        <div>WALLET: {displayAddress}</div>
      </div>

      <header className="report-title-block">
        <h1 className="h1 text-white">Intelligence Report</h1>
        <div className="subtext text-white/80 mt-1">Behavioral signature identified for wallet: {displayAddress}</div>
        <div className="micro text-[var(--accent)]">Analysis Complete // Simulation Engine Ready</div>
      </header>

      {/* Section 1: Executive Classification */}
      <section className="mb-8">
        <div className="mono-label text-white/50 mb-3 tracking-wider">SECTION 1 // EXECUTIVE CLASSIFICATION</div>

        <div className="classification-grid">
          <div className="classification-card">
            <div className="classification-label">Behavioral Classification</div>
            <div className="classification-value text-[var(--accent)]">{data.classification}</div>
          </div>
          <div className="classification-card">
            <div className="classification-label">Execution Consistency</div>
            <div className="classification-value">{data.consistency}</div>
          </div>
          <div className="classification-card">
            <div className="classification-label">Observed Portfolio USD</div>
            <div className="classification-value text-white">{formattedBalance}</div>
          </div>
          <div className="classification-card">
            <div className="classification-label">Capital Staging Signature</div>
            <div className="classification-value text-[var(--amber)]">{data.stagingSignature}</div>
          </div>
        </div>

        <div className="terminal-window p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="classification-label">Primary Rotation Channel</div>
            <div className="text-white text-xs">{data.rotationStyle}</div>
          </div>
          <div>
            <div className="classification-label">Behavioral Risk Profile</div>
            <div className="text-[#2979FF] text-xs">{data.riskProfile}</div>
          </div>
        </div>
      </section>

      {/* Section 2: Forensic Transaction Rotation */}
      <section className="mb-8">
        <div className="mono-label text-white/50 mb-3 tracking-wider">SECTION 2 // FORENSIC TRANSACTION ROTATION</div>
        <div className="terminal-window p-2">
          {/* Desktop table — hidden on mobile */}
          <table className="matrix-table hidden md:table">
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Action Type</th>
                <th>Execution Details</th>
                <th className="text-right">Estimated Capital</th>
              </tr>
            </thead>
            <tbody>
              {simulatedLogs.map((log, i) => (
                <tr key={i}>
                  <td className="text-white/40">{log.time}</td>
                  <td className="text-[var(--accent)] font-semibold">{log.action}</td>
                  <td className="text-white/70">{log.detail}</td>
                  <td className="text-right text-white/80">{log.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile card rows — hidden on md+ */}
          <div className="md:hidden divide-y divide-white/5">
            {simulatedLogs.map((log, i) => (
              <div key={i} className="py-3 px-2 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-[var(--accent)] font-semibold text-[11px] uppercase tracking-wide">{log.action}</span>
                  <span className="text-white/80 font-semibold text-[11px]">{log.amount}</span>
                </div>
                <div className="text-white/60 text-[10px] leading-relaxed">{log.detail}</div>
                <div className="text-white/30 text-[9px] uppercase tracking-wider">{log.time}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Behavioral Execution Simulator */}
      <section className="mb-8">
        <div className="mono-label text-white/50 mb-3 tracking-wider">SECTION 3 // BEHAVIORAL EXECUTION SIMULATOR</div>

        <div className="simulation-hero">
          <div className="flex justify-between items-center border-b border-white/5 pb-2 mb-4">
            <span className="font-semibold text-white/90">RETURN SIMULATION ACTIVE</span>
            <span className="text-[10px] bg-[#00E676]/10 text-[var(--accent)] px-2 py-0.5 rounded border border-[#00E676]/20">80-DAY HISTORICAL SIMULATION</span>
          </div>

          {/* ASCII Equity Graph */}
          <div className="border border-white/5 p-4 rounded bg-black/40 font-mono text-[9px] text-[var(--accent)]/60 leading-none overflow-x-auto select-none">
            <div>120% │                                                       .──*</div>
            <div>100% │                                                .───*─┘</div>
            <div> 80% │                                         .──*──┘</div>
            <div> 60% │                                  .───*─┘</div>
            <div> 40% │                           .───*──┘</div>
            <div> 20% │                   .───*──┘</div>
            <div>  0% └───*──────*──────*──────────────────────────────────────</div>
            <div className="text-white/20 mt-2 text-right">0d          15d          30d          45d          60d          90d</div>
          </div>

          <div className="simulation-grid">
            <div className="simulation-stat accent">
              <div className="classification-label">30-Day Simulated Return</div>
              <div className="text-lg font-bold text-[var(--accent)]">{data.sim30d}</div>
            </div>
            <div className="simulation-stat">
              <div className="classification-label">90-Day Capital Projection</div>
              <div className="text-lg font-bold text-white">{data.sim90d}</div>
            </div>
            <div className="simulation-stat">
              <div className="classification-label">Pattern Match Confidence</div>
              <div className="text-lg font-bold text-[var(--amber)]">{data.confidence}</div>
            </div>
            <div className="simulation-stat">
              <div className="classification-label">Preservation Index</div>
              <div className="text-lg font-bold text-white">Strong</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Execution Readiness */}
      <section className="mb-8">
        <div className="mono-label text-white/50 mb-3 tracking-wider">SECTION 4 // EXECUTION READINESS SYSTEM</div>
        <div className="terminal-window p-4 border-l-2 border-l-[var(--amber)] space-y-3">
          <div className="text-white font-semibold">MANUAL REPLICATION LIMITATIONS IDENTIFIED:</div>
          <div className="text-white/70 leading-relaxed text-[11px] space-y-2">
            <div>• **Latency Overhead:** Capital rotations occur within narrow timing windows. Manual execution introduces elevated latency risk.</div>
            <div>• **Multi-Hop Slippage:** Complex routing across DeFi venues introduces elevated slippage risk when executed manually.</div>
            <div>• **Gas Overhead:** High-frequency smart routing bundles transactions efficiently. Standard wallet execution carries significantly higher gas overhead.</div>
          </div>
          <div className="border-t border-white/5 pt-3 flex justify-between items-center text-[10px]">
            <span className="text-[var(--muted)]">Strategy Vault Compatibility:</span>
            <span className="text-[var(--accent)] font-bold">READY</span>
          </div>
        </div>
      </section>

      {/* Bridge Trigger */}
      <section className="text-center mt-12 p-6 border-t border-[#141721]">
        <div className="mb-4 text-white/60 max-w-lg mx-auto leading-relaxed">
          The behavioral signature has been identified. Create a strategy vault to follow these execution patterns.
        </div>
        <Link
          href={`/vault?address=${rawAddress}`}
          className="btn-terminal btn-terminal-amber inline-block text-center no-underline font-semibold"
        >
          Activate Strategy Vault
        </Link>
        <div className="text-[10px] text-white/30 mt-2 font-mono">
          VAULT INFRASTRUCTURE INTEGRITY // CERTIFIED BY VAULTFI
        </div>
      </section>
    </div>
  );
}

export default function BehavioralReport() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#07080a] text-white/40 flex flex-col justify-center items-center font-mono text-xs">
        <div className="animate-pulse">Loading analysis module...</div>
      </div>
    }>
      <BehavioralReportContent />
    </Suspense>
  );
}
