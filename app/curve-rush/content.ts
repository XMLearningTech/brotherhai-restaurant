import { content as globalContent } from "@/config/content";

export const content = {
  ...globalContent,
  gameSection: {
    title: "Curve Rush",
    game: {
      url: '/curve-rush.embed',
      title: "curve-rush",
      externalUrl: '/game/curve-rush/index.html'
    }
  },
  howToPlay: {
    title: "How to Play Curve Rush Online Free - Game Controls & Guide",
    description: "Playing Curve Rush online is easy: Use simple controls to guide your ball across endless sand dunes. The goal is to accelerate, jump into the air and land smoothly to maintain optimal speed. You can gain bonus points by flying as high as possible, especially when crossing the white line in the sky.\n\n" +
      "Success in Curve Rush depends on mastering the physics-based momentum system. Build speed by rolling down slopes, then launch into spectacular jumps. Perfect your timing - land too hard and your ball will shatter, ending the game. The key is managing your jumping speed and landing angle.\n\n" +
      "Win by creating impressive long-distance flights! Glide close to the sand surface to maintain inertia, while perfect landings give you stronger 'pop' for the next jump. Practice makes perfect in this addictive arcade game.",
    image: "/assets/curve-rush/curve-rush.png",
    imageAlt: "Curve Rush Game Guide - Master the Controls, Physics, and Landing Techniques"
  },
  whatIs: {
    title: "Everything about Curve Rush - Play Game Online Free",
    description: "Curve Rush is an exciting arcade game developed by 1Games.IO where players control a small ball rolling across endless desert landscapes. This free online game combines speed, physics, and precision as you navigate through sand dunes and perform spectacular aerial maneuvers.\n\n" +
      "The game features intuitive controls but challenging gameplay - accelerate down slopes, launch into the sky, and land perfectly to maintain momentum. Each jump is a test of timing and skill, with bonus points awarded for achieving maximum height and distance.\n\n" +
      "What makes Curve Rush special is its addictive physics-based gameplay that's easy to learn but difficult to master. The game offers endless replayability as you chase higher scores and longer flight distances in this thrilling desert adventure.",
    logo: {
      src: "/assets/curve-rush/curve-rush-logo.png",
      alt: "Curve Rush - Free Online Arcade Game Logo"
    }
  },
  faq: {
    title: "Frequently Asked Questions - Curve Rush Online Game",
    items: [
      {
        value: "how-to-play-curve-rush",
        question: "How do I play Curve Rush online?",
        answer: "Curve Rush is simple to play - use your mouse or touch controls to guide the ball. The goal is to roll down slopes to build speed, then launch into the air and land smoothly. Perfect timing is key to achieving high scores and avoiding crashes."
      },
      {
        value: "curve-rush-controls",
        question: "What are the controls for Curve Rush?",
        answer: "Curve Rush uses intuitive controls - simply use your mouse to steer the ball or touch controls on mobile devices. The game focuses on timing and physics rather than complex button combinations, making it accessible to players of all skill levels."
      },
      {
        value: "curve-rush-scoring",
        question: "How does scoring work in Curve Rush?",
        answer: "In Curve Rush, you earn points by flying high and landing smoothly. The higher you jump, especially when crossing the white line in the sky, the bigger the bonus. Perfect landings maintain your momentum and help you achieve longer distances."
      },
      {
        value: "curve-rush-tips",
        question: "What are some tips for getting high scores in Curve Rush?",
        answer: "To excel at Curve Rush: build speed on downhill slopes, time your jumps perfectly, aim for smooth landings to maintain momentum, and practice gliding close to the sand surface. Remember, one wrong landing can end your run, so focus on consistency over risky maneuvers."
      },
      {
        value: "curve-rush-mobile",
        question: "Can I play Curve Rush on mobile devices?",
        answer: "Yes! Curve Rush is built with HTML5 technology and works perfectly on desktop, tablet, and mobile devices. The touch controls are optimized for mobile gameplay, making it easy to play anywhere."
      },
      {
        value: "curve-rush-free",
        question: "Is Curve Rush free to play?",
        answer: "Absolutely! Curve Rush is completely free to play online. No downloads, no registration required - just visit the game page and start playing immediately in your browser."
      }
    ]
  },
  features: {
    title: "Exciting Features of Curve Rush - Play Free Online Game",
    items: [
      {
        title: "Physics-Based Gameplay",
        description: "Curve Rush features realistic physics that make every jump and landing feel authentic. The ball responds naturally to momentum, gravity, and impact, creating dynamic gameplay where mastering the physics is key to success."
      },
      {
        title: "Endless Desert Adventure",
        description: "Explore vast desert landscapes with rolling sand dunes that create endless opportunities for spectacular jumps. Each run offers unique terrain challenges that test your skills and provide fresh gameplay experiences."
      },
      {
        title: "Simple Yet Addictive",
        description: "With easy-to-learn controls but challenging mechanics, Curve Rush offers the perfect balance of accessibility and depth. The 'one more try' factor keeps players coming back to beat their high scores."
      },
      {
        title: "Cross-Platform Gaming",
        description: "Built with HTML5 technology, Curve Rush runs smoothly on all devices - desktop, tablet, and mobile. Enjoy the same great gameplay experience wherever you are, with responsive controls optimized for each platform."
      }
    ]
  }
} as const;
