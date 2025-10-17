import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { driftKingNtlContent } from "./content";

export const metadata: Metadata = {
  title: `Drift King NTL | Play Unblocked Free Racing Game | ${siteConfig.domain}`,
  description: "Play Drift King NTL unblocked for free! Master the art of drifting in this exciting racing game. No download needed!",
  openGraph: {
    title: `Drift King NTL Unblocked | Play Free Racing Game | ${siteConfig.domain}`,
    description: "Play Drift King NTL - a free racing game that challenges your drifting skills. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/drift-king-ntl`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/drift-king-ntl/drift-king-ntl.png`,
        alt: `Drift King NTL Racing Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drift King NTL - Free Online Racing Game',
    description: 'Play Drift King NTL free online without download',
    images: [`/assets/drift-king-ntl/drift-king-ntl.png`],
  },
  alternates: {
    canonical: `/drift-king-ntl`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Drift King NTL",
    description: "Play Drift King NTL - a free racing game that challenges your drifting skills. No downloads required.",
    url: "/drift-king-ntl"
  },
  content: driftKingNtlContent
};

export default function DriftKingNtlPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
