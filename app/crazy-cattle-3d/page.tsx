import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { content } from "./content";

export const metadata: Metadata = {
  title: `Crazy Cattle 3D | Play Unblocked Free Game | ${siteConfig.domain}`,
  description: "Play Crazy Cattle 3D unblocked for free! Master physics-based sheep combat in this explosive battle royale game. No download needed!",
  openGraph: {
    title: `Crazy Cattle 3D Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: "Play Crazy Cattle 3D - a free physics-based battle royale game with explosive sheep combat. No downloads required.",
    type: 'website',
    url: `${siteConfig.url}/crazy-cattle-3d`,
    siteName: siteConfig.name,
    images: [
      {
        url: `/assets/img/crazy-cattle-3d-og-image.png`,
        alt: `Crazy Cattle 3D Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Cattle 3D - Free Physics Battle Game',
    description: 'Play Crazy Cattle 3D free online without download',
    images: [`/assets/img/crazy-cattle-3d-og-image.png`],
  },
  alternates: {
    canonical: `/crazy-cattle-3d`,
  }
};

// 游戏页面配置
const gameConfig = {
  metadata: {
    title: "Crazy Cattle 3D",
    description: "Play Crazy Cattle 3D - a free physics-based battle royale game with explosive sheep combat. No downloads required.",
    url: "/crazy-cattle-3d"
  },
  content: content
};

export default function CrazyCattle3DPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}
