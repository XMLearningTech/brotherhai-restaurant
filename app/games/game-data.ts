export interface Game {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
}

export const games: Record<string, Game> = {
  "brother-hais-pho-restaurant": {
    id: "brother-hais-pho-restaurant",
    title: "Brother Hai's Pho Restaurant",
    description: "Run your own Vietnamese pho restaurant! Manage orders, cook delicious pho, and serve customers in this fun cooking simulation game.",
    image: "/assets/brother-hais-pho-restaurant/brother-hais-pho-restaurant.png",
    url: "/brother-hais-pho-restaurant",
  }
};

// 获取其他游戏列表
export function getOtherGames(): Game[] {
  return Object.values(games);
}



