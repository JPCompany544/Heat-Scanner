'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

// Static data based on user request
const HOT_WALLETS = [
    { address: "F4TprQ6WdkenYLfBrg5b5fL8JGp5yhojSKUTnG8U4EBD", usdMoved: 1_200_000 },
    { address: "7jHK1mEJJdVcQw12Yo7bkQeF7B1jiNBxtxaftQ5aRq7L", usdMoved: 980_000 },
    { address: "0xf375c5d69d153319594Ae1C8B5123C11c4fd9F45", usdMoved: 750_000 },
];

export default function HottestWallets() {
    const router = useRouter();

    const handleCopyAndScan = async (address: string) => {
        // Attempt copy safely (ignores failure on non-secure contexts e.g. local IP mobile testing)
        try {
            await navigator.clipboard.writeText(address);
        } catch (err) {
            console.warn('Clipboard write failed', err);
        }

        // Force scroll to top so user sees the scanner activation
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Trigger scanner via URL param
        // Adding timestamp ensures navigation triggers update even if stuck
        router.push(`/?scanAddress=${address}&t=${Date.now()}`, { scroll: true });
    };

    const formatUSD = (val: number) => {
        if (val >= 1_000_000) {
            return `$${(val / 1_000_000).toFixed(1)}M`;
        }
        return `$${(val / 1_000).toFixed(0)}k`;
    };

    return (
        <section className="container max-w-lg mx-auto mt-12 mb-8 px-4">
            <h3 className="text-center font-bold mb-6 text-white/90">
                🔥 Top 3 Hottest Wallets Today 🔥
            </h3>

            <div className="flex flex-col gap-3">
                {HOT_WALLETS.map((wallet, index) => (
                    <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:items-center justify-between bg-[var(--card)] border border-[#1a1a1c] p-3 rounded-xl transition-all hover:border-[#7b3ff2]/40 group gap-3 sm:gap-0"
                    >
                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <span className="text-white/30 font-mono text-sm font-bold w-5 shrink-0">
                                #{index + 1}
                            </span>
                            <span className="font-mono text-[#06D6A0] text-sm bg-[#06D6A0]/10 px-2 py-1 rounded border border-[#06D6A0]/10 truncate max-w-[140px] sm:max-w-none">
                                {/* Shorten logic: First 4 + Last 4 */}
                                {wallet.address.slice(0, 4)}...{wallet.address.slice(-4)}
                            </span>
                        </div>

                        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto pl-8 sm:pl-0">
                            <span className="text-xs text-white/60 font-medium whitespace-nowrap">
                                {formatUSD(wallet.usdMoved)} moved
                            </span>
                            <button
                                type="button"
                                onClick={() => handleCopyAndScan(wallet.address)}
                                className="bg-[#18181c] text-white/70 hover:text-white/90 hover:bg-[#2a2a2e] text-xs px-3 py-1.5 rounded-lg border border-[#2a2a2e] hover:border-[#7b3ff2] transition-colors cursor-pointer whitespace-nowrap shrink-0"
                            >
                                Copy & Scan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
