export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "raise-animals": {
    id: "raise-animals",
    title: "Raise Animals",
    description: "Catch and raise animals in this captivating Roblox farm simulation! Build your dream farm with unique mutations and offline progress.",
    image: "/assets/raise-animals/raise-animals.png",
    url: "/raise-animals",
  },
  "crazy-cattle-3d": {
    id: "crazy-cattle-3d",
    title: "Crazy Cattle 3D",
    description: "The original free online 3D action game with explosive physics-based gameplay. Control crazy cattle and battle it out!",
    image: "/assets/crazycattle3d-howto.jpg",
    url: "/crazy-cattle-3d",
  },
  "crazy-cow-3d": {
    id: "crazy-cow-3d",
    title: "Crazy Cow 3D",
    description: "Experience unpredictable fun with Crazy Cow 3D's physics engine! Send objects flying and discover comical interactions.",
    image: "/assets/crazy-cow-3d/crazy-cow-3d.png",
    url: "/crazy-cow-3d",
  },
  "cheese-chompers-3d": {
    id: "cheese-chompers-3d",
    title: "Cheese Chompers 3D",
    description: "A hilarious free online knockout game! Control a goofy rat and battle it out in a chaotic arena to be the last rat standing.",
    image: "/assets/cheese-chompers-3d/cheese-chompers-3d.png",
    url: "/cheese-chompers-3d",
  },
  "brainrot-clicker": {
    id: "brainrot-clicker",
    title: "Italian Brainrot Clicker",
    description: "Dive into Italian Brainrot Clicker! Tap through meme madness in this addictive online clicker game. Instant play, no download!",
    image: "/assets/brainrot-clicker/brainrot-clicker.jpg",
    url: "/brainrot-clicker",
  },
  "basketball-bros-unblocked": {
    id: "basketball-bros-unblocked",
    title: "Basketball Bros Unblocked",
    description: "Experience exciting basketball action with unique characters. Play online for free, no download required!",
    image: "/assets/basketball-bros-unblocked/basketball-bros-unblocked.png",
    url: "/basketball-bros-unblocked",
  },
  "pokemon-gamma-emerald": {
    id: "pokemon-gamma-emerald",
    title: "Pokemon Gamma Emerald",
    description: "Play this enhanced Pokemon ROM hack with new features, Pokemon, and challenging gameplay.",
    image: "/assets/pokemon-gamma-emerald/pokemon-gamma-emerald.webp", // 更新为实际的图片
    url: "/pokemon-gamma-emerald",
  },
  "crazy-chicken-3d": {
    id: "crazy-chicken-3d",
    title: "Crazy Chicken 3D",
    description: "Experience unpredictable fun with Crazy Chicken 3D's physics engine! Control a chaotic chicken in this hilarious action game.",
    image: "/assets/crazy-chicken-3d/crazy-chicken-3d.webp",
    url: "/crazy-chicken-3d",
  },
  "sprunki-incredibox": {
    id: "sprunki-incredibox",
    title: "Sprunki Incredibox",
    description: "Create amazing music beats with colorful characters in this fun interactive music game. Drag and drop to make music!",
    image: "/assets/sprunki-incredibox/sprunki-incredibox.webp",
    url: "/sprunki-incredibox",
  },
  "futbol-libre": {
    id: "futbol-libre",
    title: "Futbol Libre",
    description: "Watch live football matches from around the world directly in your browser. Never miss a goal with Futbol Libre.",
    image: "/assets/futbol-libre/futbol-libre.webp",
    url: "/futbol-libre",
  },
  "doodle-baseball": {
    id: "doodle-baseball",
    title: "Doodle Baseball",
    description: "Classic Google Doodle baseball game! Control cute food characters as batters and test your timing skills in this fun and addictive baseball experience.",
    image: "https://doodle-baseball.net/assets/doodle-baseball/doodle-baseball.webp",
    url: "https://doodle-baseball.net/",
  },
  "drift-boss": {
    id: "drift-boss",
    title: "Drift Boss",
    description: "Play Drift Boss unblocked online for free! Test your timing and precision in this fun 3D drifting game. ",
    image: "https://doodle-baseball.net/assets/drift-boss/drift-boss.webp",
    url: "https://doodle-baseball.net/drift-boss",
  },
  "wrangle-ranch": {
    id: "wrangle-ranch",
    title: "Wrangle Ranch",
    description: "Experience the wild west in Wrangle Ranch! Manage your ranch, wrangle cattle, and build your western empire in this engaging strategy game.",
    image: "/assets/wrangle-ranch/wrangle-ranch.png",
    url: "/wrangle-ranch",
  },
  "steal-brainrot-online": {
    id: "steal-brainrot-online",
    title: "Steal Brainrot Online",
    description: "Experience the ultimate stealth and strategy adventure! Master the art of stealth gameplay in this engaging online game with strategic missions and brain-teasing challenges.",
    image: "/assets/steal-brainrot-online/steal-brainrot-online.png",
    url: "/steal-brainrot-online",
  },
  "drift-king-ntl": {
    id: "drift-king-ntl",
    title: "Drift King NTL",
    description: "Master the art of drifting in this exciting racing game! Experience realistic drift physics and become the ultimate drift champion with precision control.",
    image: "/assets/drift-king-ntl/drift-king-ntl.png",
    url: "/drift-king-ntl",
  },
  "shell-shockers": {
    id: "shell-shockers",
    title: "Shell Shockers",
    description: "Join epic egg battles in this hilarious multiplayer FPS game! Control armed eggs in fast-paced combat with various weapons and game modes.",
    image: "/assets/shell-shockers/shell-shockers.png",
    url: "/shell-shockers",
  },
  "curve-rush": {
    id: "curve-rush",
    title: "Curve Rush",
    description: "Speed down and launch into the sky! Master the slopes, land smoothly, and go for insane air tricks in this addicting sand-riding game.",
    image: "/assets/curve-rush/curve-rush.png",
    url: "/curve-rush",
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



