import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: `Raise Animals | Play Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Raise Animals online free! Catch and raise animals, build your dream farm with unique mutations. Roblox simulation game - no download needed!",
  openGraph: {
    title: `Raise Animals Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Raise Animals - a free Roblox farm simulation game with innovative lasso catching and animal mutations. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/raise-animals`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/raise-animals/raise-animals.png`,
        alt: `Raise Animals Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raise Animals - Free Roblox Farm Simulation Game',
    description: 'Play Raise Animals free online - Catch wild animals, build your farm, discover mutations',
    images: [`/assets/raise-animals/raise-animals.png`],
  },
  alternates: {
    canonical: `/raise-animals`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Raise Animals",
    description: "Play Raise Animals - a free Roblox farm simulation game with innovative lasso catching and animal mutations. No downloads required.",
    url: "/raise-animals"
  },
  content: content
};

export default function RaiseAnimalsPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
