import { content as globalContent } from "@/config/content";

export const wrangleRanchContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Wrangle Ranch",
    game: {
      url: '/wrangle-ranch.embed',
      title: "wrangleranch",
      externalUrl: '/game/wrangle-ranch/index.html'
    }
  },

  // 特性部分配置
  features: {
    title: "Wrangle Ranch: Wild West Gaming Features",
    items: [
      {
        title: "Authentic Ranch Management",
        description: "Experience the thrill of managing your own western ranch! Raise cattle, manage resources, and build your western empire in this engaging free online game. Every decision shapes your ranch's destiny."
      },
      {
        title: "Strategic Gameplay",
        description: "Master the art of ranch management with strategic planning and resource allocation. This unblocked game combines simulation elements with engaging western themes for hours of entertainment."
      },
      {
        title: "Wild West Adventure",
        description: "Immerse yourself in the authentic atmosphere of the American frontier. Wrangle cattle, expand your territory, and become the ultimate ranch tycoon in this free browser game."
      },
      {
        title: "Easy to Learn Controls",
        description: "Jump into the action with intuitive controls designed for players of all ages. This online game offers immediate fun while providing depth for strategic gameplay."
      },
      {
        title: "Endless Replayability",
        description: "With dynamic challenges and multiple strategies to explore, Wrangle Ranch offers unlimited entertainment value. Perfect for quick gaming sessions or extended play periods."
      }
    ]
  },

  whatIs: {
    title: "What is Wrangle Ranch?",
    description: "Wrangle Ranch is an exciting western-themed ranch management game where you take on the role of a frontier rancher. Build and manage your ranch, raise cattle, and navigate the challenges of the wild west in this engaging free online browser game.\n\n" +
      "Combining strategy, simulation, and western adventure, Wrangle Ranch offers players an immersive experience in frontier life. Make crucial decisions about resource management, livestock care, and ranch expansion as you work to build the most successful ranch in the territory.\n\n" +
      "Play Wrangle Ranch instantly online in your browser – no downloads needed! Perfect for strategy game enthusiasts and anyone who loves western themes. Ready to become the ultimate ranch tycoon?",
    logo: {
      src: "/assets/img/android-chrome-512x512.png",
      alt: "Wrangle Ranch Free Online Unblocked Game Logo"
    }
  },

  howToPlay: {
    title: "How to Play Wrangle Ranch Online Free: Master the Wild West!",
    description: "Playing Wrangle Ranch online is intuitive and engaging! Use your mouse and keyboard to navigate the ranch management interface in this free game. Your main goal is to build and manage a successful ranch by making strategic decisions about livestock, resources, and expansion.\n\n" +
      "Start by learning the basics of cattle management and resource allocation. Focus on maintaining healthy livestock while gradually expanding your ranch operations. Keep an eye on market prices and seasonal changes that affect your ranch's profitability in this online game.\n\n" +
      "Explore different strategies in Wrangle Ranch unblocked to find the most effective approach to ranch management. Don't rush – take time to understand the game mechanics and plan your moves carefully. Success comes from smart planning and efficient resource management in this free browser game!",
    image: "/assets/wrangle-ranch/wrangle-ranch.png",
    imageAlt: "Wrangle Ranch Gameplay Guide - Controls for Free Online Western Fun"
  },

  faq: {
    title: "Wrangle Ranch: Frequently Asked Questions (FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Wrangle Ranch difficult to play?",
        answer: "Wrangle Ranch is designed to be accessible for players of all skill levels. The game starts with simple ranch management concepts and gradually introduces more complex strategies, making it perfect for both beginners and experienced strategy game players."
      },
      {
        value: "objective",
        question: "What's the main goal in Wrangle Ranch?",
        answer: "The main objective in this online game is to build and manage a successful ranch. You'll raise cattle, manage resources, expand your territory, and make strategic decisions to become the most prosperous rancher in the wild west."
      },
      {
        value: "game-features",
        question: "What features does Wrangle Ranch offer?",
        answer: "Wrangle Ranch features comprehensive ranch management gameplay including cattle raising, resource management, strategic planning, and western-themed challenges. The game combines simulation elements with engaging storylines in this free online experience."
      },
      {
        value: "strategy-tips",
        question: "Any tips for success in Wrangle Ranch?",
        answer: "Focus on maintaining healthy livestock and efficient resource management. Plan your expansions carefully and pay attention to market conditions. Start small and gradually build your ranch empire through smart decision-making in this free game."
      },
      {
        value: "technical-requirements",
        question: "What do I need to play Wrangle Ranch unblocked online?",
        answer: "Wrangle Ranch is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required! It's optimized to run smoothly on most computers and mobile devices."
      }
    ]
  }
};
