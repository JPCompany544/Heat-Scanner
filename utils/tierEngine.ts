export type WalletTier = "Tier0" | "Tier1" | "Tier2" | "Tier3" | "Tier4";

export function getWalletTier(usdBalance: number): WalletTier {
  if (usdBalance < 10_000) return "Tier0";
  if (usdBalance <= 100_000) return "Tier1";
  if (usdBalance <= 500_000) return "Tier2";
  if (usdBalance <= 2_000_000) return "Tier3";
  return "Tier4";
}

export function isScanEligible(tier: WalletTier): boolean {
  return tier !== "Tier0";
}
