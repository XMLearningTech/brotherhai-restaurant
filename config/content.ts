import { siteConfig } from "./site";

export const content = {
  header: {
    title: siteConfig.name,
    search: {
      placeholder: "Find your next favorite game...",
      ariaLabel: "Search games",
      buttonAriaLabel: "Search",
    },
    navigation: {
      links: [
        { text: "Start Play", href: "#game-section" },
        { text: "Features", href: "#features" },
        { text: "What Is", href: "#what-is" },
        { text: "How to Play", href: "#how-to-play" },
        { text: "Why Play", href: "#game-highlights" },
        { text: "FAQ", href: "#faq" },
      ]
    }
  },
  footer: {
    about: {
      title: "About",
      description: `Play Brother Hai's Pho Restaurant - a free online cooking and restaurant management game. Run your own Vietnamese pho restaurant, prepare authentic dishes, serve customers, and build your culinary empire. No downloads required, play instantly in your browser on any device.`,
    },
    quickLinks: {
      title: "Quick Links",
      links: [
        { text: "Blog", href: "/blog" },
        { text: "About Us", href: "/about" },
        { text: "Contact", href: "/contact" },
      ]
    },
    social: {
      title: "Share",
      links: [
        {
          icon: "Facebook",
          href: `https://www.facebook.com/sharer.php?t=${encodeURIComponent(siteConfig.name)}&u=${encodeURIComponent(siteConfig.url)}`
        },
        {
          icon: "Twitter",
          href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(siteConfig.name)}&url=${encodeURIComponent(siteConfig.url)}&hashtags=${siteConfig.social.twitter},Games`
        }
      ]
    },
    legal: {
      title: "Legal",
      links: [
        { text: "About Us", href: "/about" },
        { text: "Contact Us", href: "/contact" },
        { text: "Privacy Policy", href: "/privacy-policy" },
        { text: "Terms of Service", href: "/terms-of-service" }
      ]
    },
    copyright: {
      text: "© {year} Brother Hai's Pho Restaurant. All rights reserved.",
      subText: "Play free online restaurant management and cooking games. No downloads required."
    }
  },
  rating: {
    title: "Rate Brother Hai's Pho Restaurant",
    votes: "votes",
    initialRating: 4.5,
    initialVotes: 256
  },
  gameSection: {
    title: "Brother Hai's Pho Restaurant",
    game: {
      // itch.io 游戏直接链接到游戏页面，因为嵌入可能被限制
      url: 'https://marisa0704.itch.io/brother-hais-pho-restaurant',
      title: "Brother Hai's Pho Restaurant",
      externalUrl: 'https://marisa0704.itch.io/brother-hais-pho-restaurant'
    }
  },
  otherGames: {
    title: "Hot Games",
    cardLabels: {
      playButton: "Play Now",
    }
  },
  howToPlay: {
    title: "How to Play Brother Hai's Pho Restaurant Online - Complete Game Guide",
    description: "Welcome to Brother Hai's Pho Restaurant, the ultimate online restaurant management game! When you first start playing Brother Hai's Pho Restaurant, you'll use your mouse or touchscreen to interact with hungry customers as they enter your restaurant. Click on each customer to take their pho order and pay close attention to their specific requests and preferences. Every customer in Brother Hai's Pho Restaurant has unique tastes for their perfect pho bowl, from the type of protein to the amount of herbs and spices they desire.\n\n" +
      "Navigate to your kitchen workspace where you'll prepare authentic Vietnamese pho dishes. The cooking process in Brother Hai's Pho Restaurant requires careful attention to detail. Click on ingredients in the proper sequence to create the perfect bowl: begin with fresh rice noodles as your base, then add your customer's choice of protein such as tender beef slices, juicy chicken pieces, or savory tofu chunks. Layer on aromatic fresh herbs including fragrant cilantro and sweet Thai basil leaves, add crunchy bean sprouts for texture, slice in lime wedges for zesty flavor, and finally ladle the steaming hot aromatic broth over everything. The key to becoming successful in Brother Hai's Pho Restaurant is maintaining both speed and accuracy - you must serve each pho dish while it's still hot and fresh to maximize customer satisfaction and earn bigger tips!\n\n" +
      "As you progress through Brother Hai's Pho Restaurant and earn coins from your satisfied customers, you can visit the in-game upgrade shop to enhance various aspects of your restaurant operations. Purchase faster cooking equipment like industrial woks and premium stoves that reduce preparation time, unlock exotic premium ingredients such as wagyu beef and organic vegetables that attract VIP customers, and hire talented staff members to assist you during the hectic rush hours. Always keep a close eye on customer patience meters displayed above their heads and develop smart strategies to prioritize orders efficiently. With practice and dedication, you'll master the intricate art of Vietnamese pho cuisine and build an unstoppable restaurant empire in Brother Hai's Pho Restaurant!",
    image: "/assets/brother-hais-pho-restaurant/brother-hais-pho-restaurant.png",
    imageAlt: "Brother Hai's Pho Restaurant Gameplay Screenshot - Restaurant Management and Vietnamese Cooking Game"
  },
  whatIs: {
    title: "Everything You Need to Know About Brother Hai's Pho Restaurant - Free Online Game",
    description: "Brother Hai's Pho Restaurant is an immersive and highly engaging restaurant management and cooking simulation game that puts you in control of your very own authentic Vietnamese pho restaurant. Developed by talented indie creator marisa0704 and published on the popular itch.io gaming platform, you can play Brother Hai's Pho Restaurant online free on any PC desktop computer or mobile device. The game runs smoothly in modern web browsers including Chrome, Firefox, Safari, and Edge, with absolutely no downloads, installations, or account registrations required to start playing immediately.\n\n" +
      "Experience the genuine thrill and challenge of restaurant management as you take customer orders throughout busy service periods, skillfully cook traditional Vietnamese pho noodle soup following authentic recipes, and serve hungry customers in an exciting fast-paced restaurant environment. Brother Hai's Pho Restaurant masterfully combines strategic time management gameplay elements with hands-on cooking simulation mechanics, creating a uniquely addictive and entertaining gaming experience. The game challenges you to balance multiple competing priorities: maintaining food quality standards, managing customer satisfaction levels, controlling ingredient costs, and maximizing your daily profits.\n\n" +
      "Play Brother Hai's Pho Restaurant online free and discover why thousands of players worldwide have fallen in love with this charming cooking game. The intuitive point-and-click controls make Brother Hai's Pho Restaurant accessible for casual gamers and newcomers, while the progressively challenging levels and complex restaurant management systems provide deep strategic gameplay that will satisfy even experienced simulation game veterans. Whether you're a devoted fan of cooking games, restaurant tycoon simulations, or time management challenges, Brother Hai's Pho Restaurant offers countless hours of captivating entertainment as you work tirelessly to build your culinary empire one steaming bowl of delicious pho at a time.\n\n" +
      "<!-- VIDEO_EMBED_WHATIS -->",
    logo: {
      src: "/assets/brother-hais-pho-restaurant/brother-hais-pho-restaurant-logo.png",
      alt: "Brother Hai's Pho Restaurant Logo - Free Online Cooking and Restaurant Management Game"
    }
  },
  faq: {
    title: "Frequently Asked Questions About Brother Hai's Pho Restaurant Online Game",
    items: [
      {
        value: "where-to-play-original",
        question: "Where can I play Brother Hai's Pho Restaurant online for free?",
        answer: "You can play Brother Hai's Pho Restaurant online free directly on the official itch.io page created by developer marisa0704, as well as through various browser-based gaming websites that host the game. Our website provides an optimized unblocked version of Brother Hai's Pho Restaurant that functions perfectly in your web browser on all major platforms including Windows PC, Mac computers, Linux systems, and mobile devices running iOS or Android. Best of all, Brother Hai's Pho Restaurant requires absolutely no downloads, no software installations, and no account registration - simply click play and immediately start managing your own virtual pho restaurant!"
      },
      {
        value: "play-on-mobile",
        question: "Can I play Brother Hai's Pho Restaurant online on my mobile device?",
        answer: "Yes, absolutely! Brother Hai's Pho Restaurant has been specifically optimized and designed to work flawlessly on mobile devices including smartphones and tablets. You can play this engaging free online restaurant management game on your iPhone, iPad, Android phone, or Android tablet using intuitive touch screen controls that make managing your pho restaurant incredibly easy and enjoyable while you're on the go. The responsive design of Brother Hai's Pho Restaurant automatically adapts to different screen sizes, ensuring a smooth and immersive gaming experience whether you're playing on a compact phone display or a larger tablet screen."
      },
      {
        value: "creator-info",
        question: "Who created Brother Hai's Pho Restaurant game?",
        answer: "Brother Hai's Pho Restaurant was skillfully developed and published by the talented independent game developer known as marisa0704 on the popular indie gaming platform itch.io. Since its release, Brother Hai's Pho Restaurant has gained significant popularity and recognition among players worldwide for its entertaining and addictive restaurant management gameplay mechanics, its charming visual presentation, and its authentic celebration of Vietnamese cultural culinary traditions. The game showcases marisa0704's creativity in combining accessible casual gameplay with deeper strategic restaurant management elements."
      },
      {
        value: "game-rating",
        question: "What is the age rating for Brother Hai's Pho Restaurant?",
        answer: "Brother Hai's Pho Restaurant is rated as suitable and appropriate for players of all ages, from young children to adults. The game features exclusively family-friendly content that focuses on wholesome activities like cooking delicious food, running a successful restaurant business, and providing excellent customer service. Brother Hai's Pho Restaurant contains absolutely no violent content, no inappropriate language or themes, no scary elements, and no gambling mechanics, making it a perfect safe entertainment choice for younger players while still offering engaging and challenging gameplay that adults can thoroughly enjoy as well."
      },
      {
        value: "new-player-difficulty",
        question: "How difficult is Brother Hai's Pho Restaurant for new players who are just starting?",
        answer: "Brother Hai's Pho Restaurant has been thoughtfully designed with a gentle learning curve to be very accessible and welcoming for brand new players, even those with little or no prior experience with restaurant management games or cooking simulation games. When you first start playing Brother Hai's Pho Restaurant, the game begins with simple straightforward customer orders and basic pho recipes, allowing you to learn and master the fundamental cooking mechanics at your own comfortable pace. As you gain experience and confidence, Brother Hai's Pho Restaurant gradually introduces more complex multi-ingredient dishes, more demanding customers with specific preferences, and additional restaurant management challenges. The intuitive point-and-click control scheme makes Brother Hai's Pho Restaurant easy to pick up and learn, while the progressively increasing difficulty ensures the game remains engaging and challenging even for experienced players."
      },
      {
        value: "technical-requirements-online",
        question: "What are the technical requirements needed to play Brother Hai's Pho Restaurant online?",
        answer: "To play Brother Hai's Pho Restaurant online, you'll need a relatively modern web browser such as Google Chrome, Mozilla Firefox, Microsoft Edge, or Safari with JavaScript enabled. Brother Hai's Pho Restaurant also requires a stable and reasonably fast internet connection to load the game assets and run smoothly without interruptions. The game is surprisingly lightweight and has been optimized to run efficiently on most computers and mobile devices manufactured within the last five years with basic hardware specifications. There are no special graphics cards, high-end processors, or excessive RAM requirements needed to enjoy Brother Hai's Pho Restaurant - if your device can browse modern websites comfortably, it can almost certainly run this game perfectly."
      },
      {
        value: "game-features",
        question: "What are the main features and gameplay elements of Brother Hai's Pho Restaurant?",
        answer: "Brother Hai's Pho Restaurant offers a comprehensive and feature-rich restaurant management and cooking simulation experience. The main gameplay features include detailed restaurant management mechanics where you oversee all aspects of running a busy pho restaurant, hands-on cooking simulation where you physically prepare authentic Vietnamese pho dishes by selecting and combining various ingredients, exciting customer service challenges that test your ability to satisfy diverse customer preferences and maintain high satisfaction ratings, an extensive upgrades and progression system featuring purchasable kitchen equipment and unlockable premium ingredients, challenging time management gameplay that requires efficient multitasking during peak rush hours, and a rewarding business growth system where you earn coins to expand and improve your restaurant empire. Brother Hai's Pho Restaurant masterfully combines all these elements to create an engaging, addictive, and highly replayable gaming experience."
      },
      {
        value: "tips-tricks",
        question: "What are some helpful tips and strategies for playing Brother Hai's Pho Restaurant successfully?",
        answer: "To excel at Brother Hai's Pho Restaurant and build a thriving successful restaurant, focus on developing both speed and accuracy when taking customer orders and preparing their pho dishes - rushing too much leads to mistakes, but being too slow frustrates customers. Prioritize upgrading your kitchen equipment early in the game since faster cooking tools like improved stoves and industrial woks significantly reduce preparation times, allowing you to serve more customers and earn more coins per hour. Always pay close attention to the customer patience meters displayed above each patron's head, and strategically prioritize serving orders from customers whose patience is running dangerously low to avoid losing their business. Practice and memorize common ingredient combinations for popular pho varieties so you can prepare dishes more quickly and efficiently during hectic rush hour periods in Brother Hai's Pho Restaurant."
      },
      {
        value: "strategy-guide",
        question: "Where can I find a complete strategy guide for Brother Hai's Pho Restaurant?",
        answer: "We've created an ultimate comprehensive tips and tricks guide specifically for Brother Hai's Pho Restaurant featuring advanced gameplay strategies, proven money-making techniques and profit optimization tips, secret hidden features and Easter eggs, pro-level tricks used by expert players, detailed upgrade recommendations, customer management strategies, and much more valuable information! Visit our dedicated Brother Hai's Pho Restaurant Strategy Guide to discover everything you need to master this addictive cooking game and transform yourself from a struggling beginner into a successful pho restaurant tycoon and culinary empire builder!"
      }
    ]
  },
  features: {
    title: "Brother Hai's Pho Restaurant Game Features - What Makes This Cooking Game Special",
    items: [
      {
        title: "Restaurant Management",
        description: "Take full control of every aspect of your own thriving Vietnamese pho restaurant in Brother Hai's Pho Restaurant. Manage incoming customer orders efficiently, prepare and cook delicious authentic meals with precision, and maintain high customer satisfaction levels while building your restaurant's stellar reputation in the community. Track your daily revenue, manage ingredient inventory, and make strategic business decisions that will determine your success in the competitive restaurant industry."
      },
      {
        title: "Cooking Mechanics",
        description: "Master the ancient art of preparing genuine Vietnamese pho noodle soup in Brother Hai's Pho Restaurant. Work with a diverse array of traditional ingredients including fresh rice noodles, premium beef cuts, tender chicken, aromatic herbs like cilantro and Thai basil, crunchy bean sprouts, zesty lime wedges, and rich flavorful broths. Learn authentic pho recipes passed down through generations and create perfect bowls that will keep customers coming back to your restaurant again and again."
      },
      {
        title: "Time Management",
        description: "Test and improve your multitasking abilities in Brother Hai's Pho Restaurant as you balance multiple simultaneous customer orders during peak rush hours. Serve hungry customers quickly and efficiently while maintaining the highest food quality standards. Monitor customer patience levels carefully, prioritize urgent orders strategically, and develop efficient workflows that maximize your service speed without sacrificing the quality that makes your pho restaurant famous."
      },
      {
        title: "Upgrades & Progress",
        description: "Earn valuable coins and unlock exciting upgrades throughout your journey in Brother Hai's Pho Restaurant. Invest your hard-earned profits wisely to purchase state-of-the-art kitchen equipment that speeds up cooking times, unlock exotic premium ingredients like wagyu beef and organic vegetables that attract wealthy VIP customers, hire skilled staff members to assist during busy periods, and expand your restaurant's menu offerings. Watch your small pho shop transform into a bustling culinary empire."
      },
      {
        title: "Free Browser Game",
        description: "Enjoy Brother Hai's Pho Restaurant completely free online without any downloads, installations, or hidden costs. Simply open your web browser on any PC computer or mobile device and start playing Brother Hai's Pho Restaurant instantly. The game works seamlessly on Windows, Mac, Linux, iOS, and Android platforms, ensuring you can manage your pho restaurant anytime, anywhere with an internet connection."
      },
      {
        title: "Family Friendly",
        description: "Brother Hai's Pho Restaurant offers wholesome, family-friendly gaming content suitable for players of all ages and skill levels. The game focuses exclusively on positive themes like cooking, restaurant management, customer service, and business entrepreneurship, with absolutely no violence, inappropriate content, or gambling elements. Perfect for casual gamers, cooking enthusiasts, aspiring chefs, and anyone who enjoys relaxing simulation games."
      }
    ]
  }
} as const;


