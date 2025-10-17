import { content as globalContent } from "@/config/content";

export const shellShockersContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Shell Shockers - Epic Egg FPS Battle",
    subtitle: "Crack Your Way to Victory",
    description: "Join the ultimate egg battle in Shell Shockers! This hilarious multiplayer FPS game puts you in control of an armed egg ready for combat. Battle other players in fast-paced matches with various weapons and game modes.",
    ctaText: "Start Battle Now",
    game: {
      url: '/shell-shockers.embed',
      title: "shell-shockers",
      externalUrl: '/game/shell-shockers/index.html'
    }
  },

  features: {
    title: "Shell Shockers: Ultimate FPS Game Features",
    items: [
      {
        title: "Multiplayer FPS Action",
        description: "Engage in fast-paced first-person shooter battles with players from around the world. Experience intense combat with smooth controls and responsive gameplay mechanics."
      },
      {
        title: "Multiple Game Modes",
        description: "Choose from various game modes including Team Deathmatch, Free For All, Capture the Spatula, and King of the Coop. Each mode offers unique strategic challenges."
      },
      {
        title: "Weapon Customization",
        description: "Equip your egg with different weapons like EggK-47, Scrambler shotgun, Free Ranger sniper, and more. Each weapon offers unique advantages for different play styles."
      },
      {
        title: "Character Customization",
        description: "Personalize your egg warrior with various colors, hats, stamps, and accessories. Stand out on the battlefield with your unique egg appearance."
      },
      {
        title: "Competitive Gameplay",
        description: "Climb the leaderboards and prove your skills in ranked matches. Earn experience points and unlock new items as you progress through the game."
      },
      {
        title: "Free Browser Gaming",
        description: "Play Shell Shockers instantly in your browser without any downloads. Jump into egg-citing battles immediately and enjoy seamless cross-platform gameplay."
      }
    ]
  },

  whatIs: {
    title: "What is Shell Shockers?",
    description: "Shell Shockers is a hilarious multiplayer first-person shooter game where players control armed eggs in fast-paced battles. This unique browser-based FPS combines classic shooter mechanics with a quirky egg theme to create an entertaining and addictive gaming experience.\n\n" +
      "The game features various weapons, game modes, and customization options that keep the gameplay fresh and exciting. Players can engage in team-based combat or free-for-all battles, using strategy and quick reflexes to outmaneuver opponents and climb the leaderboards.\n\n" +
      "Play Shell Shockers instantly in your browser – no downloads needed! Perfect for FPS enthusiasts, casual gamers, or anyone looking for unique multiplayer action. Ready to crack some eggs?",
    logo: {
      src: "/assets/shell-shockers/shell-shockers-logo.png",
      alt: "Shell Shockers Free FPS Game Logo"
    }
  },

  howToPlay: {
    title: "How to Play Shell Shockers Free: Master the Egg Combat!",
    description: "Playing Shell Shockers is intuitive yet challenging! Use WASD keys to move, mouse to aim and shoot, and spacebar to jump in this free FPS game. Your main goal is to eliminate enemy eggs while avoiding getting cracked yourself.\n\n" +
      "Start by choosing your preferred weapon loadout and game mode. Move strategically around the map, use cover effectively, and aim carefully to maximize your kill count. Pay attention to your ammo count and reload timing to stay in the fight.\n\n" +
      "Practice different strategies in Shell Shockers to improve your skills. Learn the maps, master weapon switching, and develop your aiming accuracy. Success comes from quick reflexes, map knowledge, and tactical thinking in this free browser FPS game!",
    image: "/assets/shell-shockers/shell-shockers.png",
    imageAlt: "Shell Shockers Gameplay Guide - FPS Controls for Free Online Battle Game"
  },

  faq: {
    title: "Shell Shockers: Frequently Asked Questions (FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Shell Shockers difficult to play?",
        answer: "Shell Shockers features accessible controls with a skill curve that rewards practice. The game is easy to learn but offers depth through weapon mastery, map knowledge, and tactical gameplay for experienced FPS players."
      },
      {
        value: "objective",
        question: "What's the main goal in Shell Shockers?",
        answer: "The main objective varies by game mode - eliminate enemies in Team Deathmatch, capture the spatula in CTF mode, or survive as the last egg standing in Free For All. Points are earned through kills, assists, and objective completion."
      },
      {
        value: "game-features",
        question: "What features does Shell Shockers offer?",
        answer: "Shell Shockers features multiple weapons, various game modes, character customization, competitive matchmaking, and progression systems. The game combines classic FPS mechanics with unique egg-themed humor in this free online experience."
      },
      {
        value: "strategy-tips",
        question: "Any tips for success in Shell Shockers?",
        answer: "Focus on map control and positioning over rushing. Learn weapon ranges and damage patterns. Use cover effectively and coordinate with teammates in team modes. Practice your aim and learn to predict enemy movement patterns."
      },
      {
        value: "technical-requirements",
        question: "What do I need to play Shell Shockers unblocked?",
        answer: "Shell Shockers is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required! It's optimized for smooth multiplayer gameplay."
      }
    ]
  }
};
