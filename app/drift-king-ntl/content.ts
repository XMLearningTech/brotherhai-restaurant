import { content as globalContent } from "@/config/content";

export const driftKingNtlContent = {
  // 基础内容继承自全局配置
  ...globalContent,

  // 游戏区域配置
  gameSection: {
    ...globalContent.gameSection,
    title: "Drift King NTL - Ultimate Drifting Experience",
    subtitle: "Master the Art of Drifting",
    description: "Experience the thrill of professional drifting in Drift King NTL! Master precision control, perfect your drifting techniques, and become the ultimate drift champion in this exciting racing game.",
    ctaText: "Start Drifting Now",
    game: {
      url: '/drift-king-ntl.embed',
      title: "drift-king-ntl",
      externalUrl: '/game/drift-king-ntl/index.html'
    }
  },

  features: {
    title: "Drift King NTL: Ultimate Racing Game Features",
    items: [
      {
        title: "Realistic Drift Physics",
        description: "Experience authentic drifting mechanics with realistic car physics that respond to every turn, brake, and acceleration. Feel the excitement of controlled slides around every corner."
      },
      {
        title: "Multiple Racing Tracks",
        description: "Challenge yourself on various track designs, from tight city circuits to open mountain roads. Each track offers unique drifting opportunities and scoring challenges."
      },
      {
        title: "Car Customization",
        description: "Tune your vehicle for optimal drifting performance. Adjust suspension, tires, and engine settings to create the perfect drift machine that matches your driving style."
      },
      {
        title: "Combo Scoring System",
        description: "Build up massive point combos by linking drifts together. The longer you maintain control while drifting, the higher your score multiplier becomes."
      },
      {
        title: "Free Browser Gaming",
        description: "Play Drift King NTL instantly in your browser without any downloads. Jump into the action immediately and start perfecting your drifting skills right away."
      },
      {
        title: "Progressive Difficulty",
        description: "Start with beginner-friendly tracks and gradually work your way up to challenging expert-level courses that will test even the most skilled drift drivers."
      }
    ]
  },

  whatIs: {
    title: "What is Drift King NTL?",
    description: "Drift King NTL is an exciting racing game that focuses on the art of drifting. This thrilling free online browser game combines realistic car physics with arcade-style gameplay to create an adrenaline-pumping racing experience.\n\n" +
      "The game features detailed car customization options and realistic drift mechanics. Players must master throttle control, steering precision, and timing to execute perfect drifts while maintaining speed and control. Drift King NTL offers the perfect balance of skill-based gameplay and accessible fun.\n\n" +
      "Play Drift King NTL instantly in your browser – no downloads needed! Perfect for racing enthusiasts, drift fans, or anyone who enjoys high-speed driving challenges. Ready to become the drift king?",
    logo: {
      src: "/assets/drift-king-ntl/drift-king-ntl-logo.png",
      alt: "Drift King NTL Free Racing Game Logo"
    }
  },

  howToPlay: {
    title: "How to Play Drift King NTL Free: Master the Drift!",
    description: "Playing Drift King NTL is all about precision and timing! Use WASD or arrow keys to control your car, with smooth steering inputs for the best drifting results in this free racing game. Your main goal is to execute perfect drifts while maintaining speed and control through each turn.\n\n" +
      "Start by approaching corners at the right speed and angle. Initiate drifts by turning sharply while managing your throttle carefully. Pay attention to your car's weight transfer and momentum to maintain long, controlled slides that maximize your score.\n\n" +
      "Practice different drifting techniques in Drift King NTL to master the gameplay. Learn to link drifts together for combo bonuses, use handbrake effectively for tight corners, and perfect your exit speed. Success comes from smooth inputs, track knowledge, and consistent practice in this free browser racing game!",
    image: "/assets/drift-king-ntl/drift-king-ntl.png",
    imageAlt: "Drift King NTL Gameplay Guide - Drifting Controls for Free Online Racing Game"
  },

  faq: {
    title: "Drift King NTL: Frequently Asked Questions (FAQ)",
    items: [
      {
        value: "difficulty",
        question: "Is Drift King NTL difficult to play?",
        answer: "Drift King NTL features progressive difficulty, starting with basic drifting tutorials and gradually introducing more complex tracks and challenges. The game is accessible to beginners while offering substantial depth for experienced racing game players."
      },
      {
        value: "objective",
        question: "What's the main goal in Drift King NTL?",
        answer: "The main objective in this racing game is to master the art of drifting by executing perfect slides around corners while maintaining speed and control. You'll need to score points through skillful drifting and complete various track challenges."
      },
      {
        value: "game-features",
        question: "What features does Drift King NTL offer?",
        answer: "Drift King NTL features realistic drift physics, multiple racing tracks, car customization options, combo scoring systems, and progressive difficulty levels. The game combines authentic driving mechanics with arcade-style fun in this free online experience."
      },
      {
        value: "strategy-tips",
        question: "Any tips for success in Drift King NTL?",
        answer: "Focus on smooth steering inputs and throttle control for better drift initiation. Learn each track's layout and optimal racing lines. Practice linking drifts together for higher scores and master the balance between speed and control."
      },
      {
        value: "technical-requirements",
        question: "What do I need to play Drift King NTL unblocked?",
        answer: "Drift King NTL is a free browser game, playable unblocked online! You just need a modern web browser (like Chrome, Firefox, Edge) and a stable internet connection. No downloads required! It's optimized to run smoothly on most computers and devices."
      }
    ]
  }
};
