import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";

interface FeaturesProps {
  content?: typeof defaultContent;
}

export function Features({ content = defaultContent }: FeaturesProps) {
  const colors = [
    theme.features.colors.item1, 
    theme.features.colors.item2, 
    theme.features.colors.item3,
    theme.features.colors.item4
  ];
  
  return (
    <section 
      id="features" 
      className={cn(
        "mb-24",
        theme.layout.section.spacing,
        theme.layout.section.scrollMargin  // 添加统一的滚动偏移量
      )}
    >
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-100">{content.features.title}</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {content.features.items.map((feature, index) => (
          <div key={index} className="p-6 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-red-900/30 transition-all duration-300">
            <h3 className={cn("text-xl font-bold mb-4", "text-red-500")}>
              {feature.title}
            </h3>
            <p className="text-gray-300 text-left">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


