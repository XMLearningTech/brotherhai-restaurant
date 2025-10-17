import { content as globalContent } from "@/config/content";

export const stealBrainrotOnlineContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Steal Brainrot Online",
    game: {
      url: '/steal-brainrot-online.embed',
      title: "steal-brainrot-online",
      externalUrl: '/game/steal-brainrot-online/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Steal Brainrot Online: Ultimate Stealth Game Features",
    items: [
      {
        title: "Strategic Stealth Missions",
        description: "Master the art of stealth gameplay with carefully crafted missions that test your cunning and strategy. Every level presents unique challenges requiring tactical thinking and precise execution."
      },
      {
        title: "Brain-Teasing Challenges",
        description: "Engage your mind with complex puzzles and strategic scenarios that require quick thinking and clever solutions. This unblocked game offers perfect mental stimulation for strategy enthusiasts."
      },
      {
        title: "Online Multiplayer Action",
        description: "Compete with players worldwide in thrilling stealth competitions. Challenge your skills against real opponents in this engaging online gaming experience."
      },
      {
        title: "Intuitive Stealth Controls",
        description: "Jump into the stealth action with responsive controls designed for precision gameplay. This online game offers smooth mechanics perfect for both casual and hardcore stealth gaming."
      },
      {
        title: "Progressive Difficulty Levels",
        description: "From beginner-friendly tutorials to expert-level challenges, Steal Brainrot Online provides endless entertainment with increasing complexity and rewarding gameplay mechanics."
      }
    ]
  },

  whatIs: {
    title: "What is Steal Brainrot Online?",
    description: "Steal Brainrot Online is an exciting stealth action game that challenges players to infiltrate secured locations and complete covert missions. This thrilling free online browser game combines strategic thinking with quick reflexes to create an adrenaline-pumping gaming experience.\n\n" +
      "The game features immersive environments that focus on stealth mechanics and tactical gameplay. Players must analyze security patterns, plan their approach carefully, and execute precise movements to avoid detection while completing objectives. Steal Brainrot Online offers the perfect balance of strategy and action.\n\n" +
      "Play Steal Brainrot Online instantly in your browser – no downloads needed! Perfect for stealth game enthusiasts, action lovers, or anyone who enjoys strategic infiltration challenges. Ready to test your stealth skills?",
    logo: {
      src: "/assets/steal-brainrot-online/steal-brainrot-online-logo.png",
      alt: "Steal Brainrot Online Free Browser Game Logo"
    }
  },

  howToPlay: {
    title: "How to Play Steal Brainrot Online Free: Master the Art of Stealth!",
    description: "Playing Steal Brainrot Online is all about strategy and stealth! Use WASD or arrow keys to move your character, and mouse for interactions in this exciting free game. Your main goal is to complete infiltration missions while avoiding detection by security systems and guards.\n\n" +
      "Start by observing patrol patterns and security camera movements. Plan your route carefully, using shadows and cover to remain hidden. Pay attention to sound indicators and environmental cues that help you navigate safely through each level in this online stealth game.\n\n" +
      "Practice different stealth techniques in Steal Brainrot Online to master the gameplay. Learn to time your movements perfectly, use distractions effectively, and complete objectives without alerting enemies. Success comes from patience, observation, and strategic thinking in this free browser game!",
    image: "/assets/steal-brainrot-online/steal-brainrot-online.png",
    imageAlt: "Steal Brainrot Online Gameplay Guide - Stealth Controls for Free Online Action Game"
  },

  faq: {
    title: "Steal Brainrot Online: Frequently Asked Questions (FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Steal Brainrot Online difficult to play?",
        answer: "Steal Brainrot Online features progressive difficulty, starting with basic stealth missions and gradually introducing more complex security systems. The game is accessible to newcomers while offering challenging scenarios for experienced stealth game players."
      },
      {
        value: "objective",
        question: "What's the main goal in Steal Brainrot Online?",
        answer: "The main objective in this stealth game is to complete infiltration missions while avoiding detection. You'll need to navigate through secured areas, bypass security systems, and accomplish your objectives without alerting guards or triggering alarms."
      },
      {
        value: "game-features",
        question: "What features does Steal Brainrot Online offer?",
        answer: "Steal Brainrot Online features immersive stealth gameplay, multiple mission types, dynamic security systems, realistic sound effects, and strategic challenge elements. The game combines tactical thinking with action-packed stealth mechanics in this free online experience."
      },
      {
        value: "strategy-tips",
        question: "Any tips for success in Steal Brainrot Online?",
        answer: "Focus on observing patrol patterns and security camera movements before acting. Use shadows and cover effectively, time your movements carefully, and listen for audio cues. Patience and strategic planning are key to mastering this stealth game."
      },
      {
        value: "technical-requirements",
        question: "What do I need to play Steal Brainrot Online unblocked?",
        answer: "Steal Brainrot Online is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required! It's optimized to run smoothly on most computers and devices."
      }
    ]
  }
};
