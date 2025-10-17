import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { wrangleRanchContent } from "./content";

export const metadata: Metadata = {
  title: `Wrangle Ranch | Play Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Wrangle Ranch unblocked online for free! Experience the wild west, manage your ranch, and wrangle cattle in this engaging strategy game. No download needed!",
  openGraph: {
    title: `Wrangle Ranch Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Wrangle Ranch - a free western ranch management game right in your browser. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/wrangle-ranch`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/wrangle-ranch/wrangle-ranch.png`,
        alt: `Wrangle Ranch Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wrangle Ranch - Free Online Unblocked Game',
    description: 'Play Wrangle Ranch free online game without download',
    images: [`/assets/wrangle-ranch/wrangle-ranch.png`],
  },
  alternates: {
    canonical: `/wrangle-ranch`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Wrangle Ranch",
    description: "Play Wrangle Ranch - a free western ranch management game right in your browser. No downloads required.",
    url: "/wrangle-ranch"
  },
  content: wrangleRanchContent
};

export default function WrangleRanchPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
