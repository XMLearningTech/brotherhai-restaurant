import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { stealBrainrotOnlineContent } from "./content";

export const metadata: Metadata = {
  title: `Steal Brainrot Online | Play Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Steal Brainrot Online unblocked for free! Master the art of stealth in this exciting action game. No download needed!",
  openGraph: {
    title: `Steal Brainrot Online Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Steal Brainrot Online - a free stealth action game that challenges your tactical skills. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/steal-brainrot-online`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/steal-brainrot-online/steal-brainrot-online.png`,
        alt: `Steal Brainrot Online Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Steal Brainrot Online - Free Stealth Action Game',
    description: 'Play Steal Brainrot Online free online without download',
    images: [`/assets/steal-brainrot-online/steal-brainrot-online.png`],
  },
  alternates: {
    canonical: `/steal-brainrot-online`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Steal Brainrot Online",
    description: "Play Steal Brainrot Online - a free stealth action game that challenges your tactical skills. No downloads required.",
    url: "/steal-brainrot-online"
  },
  content: stealBrainrotOnlineContent
};

export default function StealBrainrotOnlinePage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
