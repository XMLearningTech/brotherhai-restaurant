import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { GamePageTemplate } from "@/components/templates/GamePageTemplate";
import { content } from "./brother-hais-pho-restaurant/content";

export const metadata: Metadata = {
  title: "Brother Hai's Pho Restaurant - Free Cooking Game",
  description: "Play Brother Hai's Pho Restaurant online free! Run your own Vietnamese pho restaurant, cook delicious dishes, and serve customers. No download needed!",
  openGraph: {
    title: "Brother Hai's Pho Restaurant - Free Cooking Game",
    description: "Play Brother Hai's Pho Restaurant - a free online restaurant management and cooking simulation game. No downloads required.",
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/assets/brother-hais-pho-restaurant/brother-hais-pho-restaurant.png`,
        width: 1200,
        height: 630,
        alt: `Brother Hai's Pho Restaurant Game Screenshot`,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Brother Hai's Pho Restaurant - Free Online Cooking Game",
    description: "Play Brother Hai's Pho Restaurant free online - Manage your pho restaurant and serve delicious Vietnamese dishes",
    images: [`${siteConfig.url}/assets/brother-hais-pho-restaurant/brother-hais-pho-restaurant.png`],
    site: `@${siteConfig.social.twitter}`,
  },
  alternates: {
    canonical: siteConfig.url,
  }
};

export default function Page() {
  const gameConfig = {
    metadata: {
      title: "Brother Hai's Pho Restaurant",
      description: "Play Brother Hai's Pho Restaurant online free! Run your own Vietnamese pho restaurant, cook delicious dishes, and serve customers.",
      url: "/"
    },
    content: content
  };

  return <GamePageTemplate gameConfig={gameConfig} />;
}
