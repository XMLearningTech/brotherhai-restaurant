export const theme = {
  header: {
    colors: {
      // 暗色主题 - 与整体风格统一
      background: "bg-gray-950 border-b border-gray-800",
      border: "border-b border-gray-800",
      text: "text-gray-100",
      hover: "hover:text-red-500 transition-colors",
    },
    layout: {
      height: "h-16",
      position: "sticky top-0",
      zIndex: "z-50",
      blur: "backdrop-blur-sm shadow-lg shadow-black/5",
      logo: {
        wrapper: "flex items-center gap-4",
        image: "object-contain",
      },
      nav: {
        wrapper: "flex items-center gap-6 mr-4",
        list: "hidden md:flex items-center space-x-8",
      }
    },
    spacing: {
      container: "container",
      nav: "space-x-4 lg:space-x-6",
      search: "space-x-2",
    },
  },
  footer: {
    colors: {
      // 暗色主题 - 与整体风格统一
      background: "bg-gray-950 border-t border-gray-800",
      border: "border-t border-gray-800",
      text: "text-gray-100",
      mutedText: "text-gray-400",
      hover: "hover:text-red-500 transition-colors",
    },
    layout: {
      padding: "py-8",
      container: "container mx-auto px-4",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
    },
    spacing: {
      sectionTitle: "mb-4",
      linkList: "space-y-2",
    },
  },
  layout: {
    section: {
      spacing: "mb-24", // 使用更大的间距 mb-24 (6rem) 替代原来的 mb-16 (4rem)
      scrollMargin: "scroll-mt-16" // 添加统一的滚动偏移量
    }
  },
  howToPlay: {
    colors: {
      title: "text-foreground",
      description: "text-muted-foreground",
      stepNumber: "bg-primary text-primary-foreground" // 添加步骤数字的样式
    },
    layout: {
      section: "",
      container: "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center",
      content: "prose prose-neutral dark:prose-invert max-w-none",
      imageContainer: "rounded-lg overflow-hidden",
      card: "overflow-hidden" // 添加卡片布局
    },
    spacing: {
      section: "py-12",
      title: "mb-8",
      content: "space-y-4" // 添加内容间距
    }
  },
  whatIs: {
    colors: {
      card: "bg-card",
      title: "text-foreground",
      description: "text-muted-foreground",
      link: "text-primary hover:underline"
    },
    layout: {
      section: "", // 需要添加
      container: "container",
      card: "rounded-lg shadow-lg",
      logo: "object-contain",
      logoWrapper: "flex justify-center"
    },
    spacing: {
      section: "mb-16",
      card: "p-8",
      title: "mb-4",
      description: "mb-6",
      links: "gap-6"
    },
    typography: {
      title: "text-3xl font-bold",
      description: "text-lg leading-relaxed whitespace-pre-line", // 添加 whitespace-pre-line
      link: "font-semibold"
    }
  },
  faq: {
    spacing: {
      section: "mb-16",
      title: "mb-8"
    },
    typography: {
      title: "text-3xl font-bold text-center"
    },
    layout: {
      section: "", // 添加这个属性
      accordion: "w-full"
    }
  },
  gameSection: {
    colors: {
      container: "bg-card",
      fullscreenButton: "bg-black/20 hover:bg-black/40 text-white"
    },
    layout: {
      section: "text-center",
      container: "aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl relative",
      iframe: "w-full h-full border-0",
      fullscreenButton: "absolute top-2 right-2 p-2 rounded-lg transition-colors"
    },
    spacing: {
      section: "mb-24", // Increased from mb-16 to add more space after GameSection
      title: "mb-8",
      container: "mb-16"
    },
    typography: {
      title: "text-4xl font-bold"
    }
  },
  otherGames: {
    layout: {
      section: "mb-16",
      grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
      card: "overflow-hidden hover:shadow-lg transition-shadow",
      image: "w-full h-48 object-cover"
    },
    spacing: {
      title: "mb-8",
      cardTitle: "mb-2",
      cardDescription: "mb-4"
    },
    typography: {
      title: "text-3xl font-bold text-center",
      cardTitle: "text-lg text-center"
    }
  },
  features: {
    colors: {
      item1: "text-blue-600",
      item2: "text-green-600",
      item3: "text-purple-600",
      item4: "text-orange-600"
    }
  }
} as const;
