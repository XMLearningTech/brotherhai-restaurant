import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";
import { generateGameSchema } from "@/app/schema";

// 游戏页面模板的属性接口
interface GamePageTemplateProps {
  gameConfig: {
    metadata: {
      title: string;
      description: string;
      url: string;
    };
    content: any;
  };
}

export function GamePageTemplate({ gameConfig }: GamePageTemplateProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <GameSection content={gameConfig.content} />
        
        <Features content={gameConfig.content} />
        <WhatIs content={gameConfig.content} />
        <HowToPlay content={gameConfig.content} />
        
        {/* Additional Game Highlights Section - Moved before FAQ */}
        <section id="game-highlights" className="max-w-7xl mx-auto mb-16 px-4 scroll-mt-32">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-100 mb-4">
              Why Play Brother Hai's Pho Restaurant?
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover what makes this Vietnamese cooking simulator a unique and engaging experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Master Authentic Pho Preparation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Discover the intricate process of creating authentic Vietnamese pho from scratch. Learn to select the freshest ingredients, from tender meat cuts to aromatic herbs and spices. Each bowl requires careful attention - combining rice noodles with perfectly cooked proteins, layering fresh vegetables, and finishing with steaming hot broth. Master traditional Vietnamese cooking techniques while developing time management skills.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Build Your Restaurant Empire
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Start with a small neighborhood pho shop and gradually expand your culinary empire through smart business decisions. Earn coins by satisfying customers, then reinvest in kitchen upgrades, premium ingredients, and staff. Strategic planning is essential - balance speed with quality to build your restaurant's reputation and become a successful restaurateur in the competitive food service industry.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center justify-center mb-5">
                <svg className="w-7 h-7 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-100 mb-4">
                Cultural Cuisine Experience
              </h3>
              <p className="text-gray-400 leading-relaxed">
                More than entertainment - it's a cultural journey celebrating Vietnamese culinary heritage. Learn about pho's history and significance in Vietnamese culture, understand traditional preparation methods, and appreciate the skill behind successful restaurants. The game captures authentic Vietnamese eatery atmosphere while providing educational value. Perfect for food lovers and cooking enthusiasts.
              </p>
            </div>
          </div>
        </section>
        
        <FAQ content={gameConfig.content} />
      </main>

      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateGameSchema({
              title: gameConfig.metadata.title,
              description: gameConfig.metadata.description,
              url: gameConfig.metadata.url
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "HowTo",
            "name": gameConfig.content.howToPlay.title,
            "url": `https://brotherhai.restaurant${gameConfig.metadata.url}`,
            "inLanguage": "en",
            "image": {
              "@type": "ImageObject",
              "url": gameConfig.content.howToPlay.image
            },
            "step": [{
              "@type": "HowToStep",
              "position": "1",
              "name": gameConfig.content.howToPlay.title,
              "text": gameConfig.content.howToPlay.description,
              "image": gameConfig.content.howToPlay.image
            }]
          }),
        }}
      />
    </div>
  );
}
