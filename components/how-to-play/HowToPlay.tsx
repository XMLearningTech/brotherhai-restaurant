import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { cn } from "@/lib/utils";
import { HowToPlayCard } from "./HowToPlayCard";
import { howToPlaySchema } from "@/app/schema";

interface HowToPlayProps {
  content?: typeof defaultContent;
}

export function HowToPlay({ content = defaultContent }: HowToPlayProps) {
  const paragraphs = content.howToPlay.description
    .split('\n\n')
    .filter(p => !p.includes('<!-- VIDEO_EMBED'));

  return (
    <section
      id="how-to-play"
      className={cn(
        "mb-24",
        theme.howToPlay.spacing.section,
        theme.layout.section.scrollMargin
      )}
    >
      <h2 className={cn(
        "text-3xl font-bold text-center",
        theme.howToPlay.spacing.title,
        theme.howToPlay.colors.title
      )}>
        {content.howToPlay.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className={cn(
              theme.howToPlay.colors.description,
              "text-gray-300"
            )}>
              {paragraph}
            </p>
          ))}
        </div>
        
        {/* 视频嵌入 */}
        <div className="w-full rounded-lg overflow-hidden shadow-xl bg-gray-900">
          <div className="aspect-video">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/GeR_n5mq9d0" 
              title="I Opened A Pho Restaurant…" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}




