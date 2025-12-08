export interface TierTemplate {
  observed_activity: string;
  profit_consistency: string;
  snapshot: {
    holding_style: string;
    transfer_behavior: string;
    movement_confidence: string;
  };
}

export const Tier1Template: TierTemplate = {
  observed_activity: "$15k–$60k moved in last 60 days",
  profit_consistency: "Medium",
  snapshot: {
    holding_style: "Small, steady accumulation with occasional consolidation",
    transfer_behavior: "Light, periodic transfers — low-frequency rotations",
    movement_confidence: "Measured / Low chaos",
  },
};

export const Tier2Template: TierTemplate = {
  observed_activity: "$120k–$900k moved in last 60 days",
  profit_consistency: "Medium-High",
  snapshot: {
    holding_style: "Mixed accumulation with tactical scaling",
    transfer_behavior: "Structured rotations across venues and chains",
    movement_confidence: "Predictable with moderate volatility",
  },
};

export const Tier3Template: TierTemplate = {
  observed_activity: "$1.1M–$4.2M moved in last 60 days",
  profit_consistency: "High",
  snapshot: {
    holding_style: "Whale-level structured accumulation and rebalancing",
    transfer_behavior: "Coordinated capital routing with timing windows",
    movement_confidence: "High predictability / disciplined cadence",
  },
};

export const Tier4Template: TierTemplate = {
  observed_activity: "$5M–$20M moved in last 60 days",
  profit_consistency: "Very High",
  snapshot: {
    holding_style: "Apex-pattern aggregation with strategic deployments",
    transfer_behavior: "Complex multi-hop routing across liquidity hubs",
    movement_confidence: "Very high conviction / low randomness",
  },
};

import type { WalletTier } from "./tierEngine";

export function getTierTemplate(tier: WalletTier): TierTemplate | null {
  switch (tier) {
    case "Tier1":
      return Tier1Template;
    case "Tier2":
      return Tier2Template;
    case "Tier3":
      return Tier3Template;
    case "Tier4":
      return Tier4Template;
    default:
      return null;
  }
}
