'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ResultsPageLowBalance() {
    const searchParams = useSearchParams();
    const address = searchParams.get('address') || 'Wallet #22164';
    const balance = searchParams.get('balance');

    // Variants for the snapshot text
    const variants = [
        {
            type: 'Mystery',
            activity: '$0 moved in the last 60 days',
            consistency: 'None',
            strategy: 'Dormant / No Pattern',
            risk: 'Neutral',
            activityColor: 'text-[var(--muted)]',
            consistencyColor: 'text-[var(--muted)]',
            riskColor: 'text-[var(--muted)]',
        },
        {
            type: 'Operator',
            activity: 'No significant movement detected',
            consistency: 'Undetermined',
            strategy: 'Awaiting Signal',
            risk: 'Unassigned',
            activityColor: 'text-[#B0B0B0]',
            consistencyColor: 'text-[#B0B0B0]',
            riskColor: 'text-[#B0B0B0]',
        },
        {
            type: 'Subtle FOMO',
            activity: 'Inactive for >60 days',
            consistency: 'Pending Activation',
            strategy: 'Liquidity dormant',
            risk: 'Low / Inactive',
            activityColor: 'text-[#FFD166]', // Gold-ish for FOMO
            consistencyColor: 'text-[#06D6A0]', // Green-ish hint
            riskColor: 'text-[var(--muted)]',
        },
        {
            type: 'Cold',
            activity: 'Zero volume detected recently',
            consistency: 'Cold State',
            strategy: 'No Alpha Detected',
            risk: 'Minimal',
            activityColor: 'text-blue-300',
            consistencyColor: 'text-blue-300',
            riskColor: 'text-blue-300',
        }
    ];

    const [variant, setVariant] = useState(variants[0]);

    useEffect(() => {
        // Cycle randomly or deterministically
        const index = Math.floor(Math.random() * variants.length);
        setVariant(variants[index]);
    }, []);

    return (
        <div className="min-h-screen bg-[#0c0c0f] text-white py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header - Loading/Reading State Indicator usually handled by logo, but here we show the header */}
                <header className="mb-10">
                    <div className="w-full rounded-2xl bg-[#0F1115] px-4 py-8 text-center border-b border-[#2C2F36] shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
                        <div className="mx-auto max-w-3xl">
                            <h1 className="text-2xl md:text-3xl lg:text-[32px] font-bold tracking-tight text-[#F5F5F5]">
                                Analysis Complete
                            </h1>
                            <p className="mt-3 max-w-2xl mx-auto text-sm md:text-base lg:text-[18px] leading-relaxed text-[#B0B0B0]">
                                Wallet snapshot generated.
                            </p>
                            <div className="mt-5 mx-auto h-[2px] w-16 rounded-full bg-gradient-to-r from-[#06D6A0] via-[#FFD166] to-[var(--accent)] opacity-80" />
                        </div>
                    </div>
                </header>

                {/* Section 1: Wallet Snapshot (Modified for <$100) */}
                <section className="mb-12">
                    <div className="mb-4 flex items-center justify-between gap-3">
                        <h2 className="text-xs font-semibold tracking-[0.25em] text-[#B0B0B0]">
                            WALLET SNAPSHOT
                        </h2>
                        <div className="hidden items-center gap-2 rounded-full border border-[var(--muted)]/20 bg-[var(--muted)]/5 px-3 py-1 text-xs font-medium text-[var(--muted)] sm:flex">
                            <span className="h-1.5 w-1.5 rounded-full bg-gray-500" />
                            <span>Low Activity</span>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-2xl border border-[#1a1a1c] bg-gradient-to-br from-[#171721] via-[#121215] to-[#191425] shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
                        <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[1.4fr_1fr] md:p-7">
                            <div className="space-y-4">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                                        Wallet ID
                                    </span>
                                    <p className="mt-1 text-lg font-semibold truncate" title={address}>
                                        {address.startsWith('0x') || address.length > 20 ?
                                            (address.substring(0, 6) + '...' + address.substring(address.length - 4))
                                            : address}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                                        Observed Activity
                                    </span>
                                    <p className={`mt-1 text-base font-semibold ${variant.activityColor}`}>
                                        {variant.activity}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                                        Profit Consistency
                                    </span>
                                    <p className={`mt-1 text-base font-semibold ${variant.consistencyColor}`}>
                                        {variant.consistency}
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-4 border-t border-[#232336] pt-4 md:border-l md:border-t-0 md:pl-6">
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                                        Dominant Strategy
                                    </span>
                                    <p className="mt-1 text-base font-semibold text-[#B0B0B0]">
                                        {variant.strategy}
                                    </p>
                                </div>
                                <div>
                                    <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                                        Risk Profile
                                    </span>
                                    <p className={`mt-1 text-base font-semibold ${variant.riskColor}`}>
                                        {variant.risk}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Behavior Patterns (Filtered/Simplified for empty wallets) */}
                <section className="mb-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-xs font-semibold tracking-[0.25em] text-[#B0B0B0]">
                            BEHAVIOUR PATTERNS
                        </h2>
                        <span className="text-[10px] uppercase tracking-widest text-[#FFD166] border border-[#FFD166]/30 px-2 py-0.5 rounded">
                            Detection Pending
                        </span>
                    </div>

                    <p className="mb-6 max-w-2xl text-sm text-[var(--muted)] md:text-base">
                        No historical patterns detected for mirroring. Add funds to activate strategy scanning.
                    </p>

                    <div className="space-y-3">
                        {[
                            {
                                number: 1,
                                title: "Profit Timing",
                                description: "Waiting for data...",
                            },
                            {
                                number: 2,
                                title: "Accumulation Trend",
                                description: "Waiting for data...",
                            },
                            {
                                number: 3,
                                title: "Chain Rotation",
                                description: "Waiting for data...",
                            },
                        ].map((item) => (
                            <div
                                key={item.number}
                                className="flex items-start gap-3 rounded-lg border border-[#1d1f26] bg-[#0B0E11] px-4 py-3"
                            >
                                <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#2C2F36] text-[13px] font-semibold text-[#B0B0B0]">
                                    ?
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-base font-semibold text-[#505050] md:text-lg">{item.title}</h3>
                                    <p className="text-sm text-[#303030] md:text-base">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 3: Bridge Sentence */}
                <section className="my-16">
                    <div className="rounded-2xl border border-[#1a1a1c] bg-gradient-to-r from-white/5 via-transparent to-white/5 px-6 py-10 text-center shadow-[0_20px_70px_rgba(0,0,0,0.85)]">
                        <p className="mx-auto max-w-2xl text-balance text-2xl font-semibold leading-relaxed md:text-3xl">
                            <span className="bg-gradient-to-r from-[#B0B0B0] via-[#808080] to-[#505050] bg-clip-text text-transparent">
                                Deposit funds to unlock VaultFi's behaviour mirroring.
                            </span>
                        </p>
                    </div>
                </section>

                {/* Section 4: CTA */}
                <section className="mt-16 text-center">
                    <Link
                        href="/vault-deposit"
                        className="btn-pulse inline-flex w-full items-center justify-center rounded-full bg-[#FFD166] px-8 py-4 text-sm font-semibold uppercase tracking-[0.25em] text-black shadow-[0_18px_55px_rgba(0,0,0,0.85)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_26px_80px_rgba(0,0,0,0.95)] md:w-auto md:px-12 md:text-base"
                    >
                        Load Wallet
                    </Link>
                    <p className="mt-3 text-xs text-[var(--muted)] md:text-sm">
                        Minimum $100 balance recommended for analysis.
                    </p>
                </section>
            </div>
        </div>
    );
}
