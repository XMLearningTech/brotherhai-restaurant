import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { shellShockersContent } from "./content";

export const metadata: Metadata = {
  title: `Shell Shockers | Play Unblocked Free FPS Game | ${siteConfig.domain}`,
  description: "Play Shell Shockers unblocked for free! Join epic egg battles in this hilarious multiplayer FPS game. No download needed!",
  openGraph: {
    title: `Shell Shockers Unblocked | Play Free FPS Game | ${siteConfig.domain}`,
    description: "Play Shell Shockers - a free multiplayer FPS game with egg warriors and hilarious combat. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/shell-shockers`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/shell-shockers/shell-shockers.png`,
        alt: `Shell Shockers FPS Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shell Shockers - Free Online Multiplayer FPS Game',
    description: 'Play Shell Shockers free online without download',
    images: [`/assets/shell-shockers/shell-shockers.png`],
  },
  alternates: {
    canonical: `/shell-shockers`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Shell Shockers",
    description: "Play Shell Shockers - a free multiplayer FPS game with egg warriors and hilarious combat. No downloads required.",
    url: "/shell-shockers"
  },
  content: shellShockersContent
};

export default function ShellShockersPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
