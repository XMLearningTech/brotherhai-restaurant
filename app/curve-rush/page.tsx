import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { content } from "./content";

const gameConfig = {
  metadata: {
    title: "Curve Rush - Play Free Online Arcade Game",
    description: "Play Curve Rush online free! Master the slopes, perform amazing jumps, and land smoothly in this addictive physics-based arcade game.",
    url: "/curve-rush",
  },
  content: content,
};

export default function CurveRushPage() {
  return <GamePageTemplate gameConfig={gameConfig} />;
}

export const metadata = {
  title: "Curve Rush - Play Free Online Arcade Game | Speed & Physics Adventure",
  description: "Play Curve Rush online free! Master the slopes, perform amazing jumps, and land smoothly in this addictive physics-based arcade game. No download required!",
  keywords: "Curve Rush, online game, free game, arcade game, physics game, desert game, jumping game, browser game",
  openGraph: {
    title: "Curve Rush - Free Online Arcade Game",
    description: "Experience the thrill of Curve Rush! Guide your ball through endless desert landscapes, perform spectacular jumps, and master the art of perfect landings.",
    images: ["/assets/curve-rush/curve-rush.png"],
  },
};
