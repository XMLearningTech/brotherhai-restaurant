"use client";

import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { GameSection } from "@/components/game-section/GameSection";
import { OtherGames } from "@/components/other-games/OtherGames";
import { Features } from "@/components/features/Features";
import { WhatIs } from "@/components/what-is/WhatIs";
import { HowToPlay } from "@/components/how-to-play/HowToPlay";
import { FAQ } from "@/components/faq/FAQ";
import { Rating } from "@/components/rating/Rating";
import { Footer } from "@/components/layout/Footer";
import { getOtherGames } from "@/app/games/game-data";

/**
 * 客户端组件 - 处理首页交互逻辑（搜索、游戏选择等）
 * 这个组件包含 useState 等客户端功能
 */
export function HomeContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const game = getOtherGames().find(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (game) {
      const element = document.getElementById("other-games");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearch={handleSearch}
      />

      <main className="container mx-auto px-4 py-8">
        <GameSection />
        <OtherGames
          games={getOtherGames()}
          onGameSelect={setActiveGame}
        />
        <Features />
        <WhatIs />
        <HowToPlay />
        <FAQ />
        <section className="mb-16" id="rating">
          <Rating />
        </section>
      </main>

      <Footer />
    </div>
  );
}

