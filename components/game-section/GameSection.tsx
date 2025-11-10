'use client';

import { useState, useRef } from 'react';
import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface GameSectionProps {
  content?: typeof defaultContent;
}

export function GameSection({ content = defaultContent }: GameSectionProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <section
      id="game-section"
      className={cn(
        theme.gameSection.layout.section,
        theme.layout.section.scrollMargin
      )}
    >
      {layout.gameSection.isVisible.title && (
        <h2 className={cn(
          theme.gameSection.typography.title,
          theme.gameSection.spacing.title
        )}>
          {content.gameSection.title}
        </h2>
      )}

      {/* 大型游戏展示区域 - 统一暗色风格 */}
      <div
        ref={containerRef}
        className={cn(
          "w-full max-w-6xl mx-auto overflow-hidden relative",
          "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 rounded-lg",
          "min-h-[600px] flex flex-col items-center justify-center p-8 md:p-12",
          "border border-red-900/20 mb-8"
        )}
      >
        {/* 游戏视频嵌入 */}
        <div className="relative w-full max-w-4xl mb-8 rounded-lg overflow-hidden shadow-2xl">
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/0bz6TyaQhSE" 
              title="Brother Hai's Pho Restaurant - Official Trailer" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>

        {/* 游戏标题 */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-6 text-red-500 drop-shadow-lg">
          Brother Hai's Pho Restaurant
        </h1>

        {/* 下载/开始游戏按钮 */}
        <Button
          onClick={() => window.open(content.gameSection.game.externalUrl, '_blank')}
          size="lg"
          className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-lg md:text-xl px-10 py-5 md:px-12 md:py-6 rounded-full shadow-xl mb-4 transition-all duration-300 transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
          Download Game
        </Button>

        <p className="text-gray-400 text-sm">Play on itch.io - Free to play</p>
      </div>
    </section>
  );
}
