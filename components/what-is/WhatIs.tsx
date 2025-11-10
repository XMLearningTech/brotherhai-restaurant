import { content as defaultContent } from "@/config/content";
import { theme } from "@/config/theme";
import { layout } from "@/config/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Gamepad as GamepadIcon, HelpCircle as HelpCircleIcon, Info as InfoIcon } from 'lucide-react';

const IconMap = {
  GamepadIcon,
  HelpCircleIcon,
  InfoIcon
};

interface WhatIsProps {
  content?: typeof defaultContent;
}

export function WhatIs({ content = defaultContent }: WhatIsProps) {
  const paragraphs = content.whatIs.description
    .split('\n\n')
    .filter(p => !p.includes('<!-- VIDEO_EMBED'));

  return (
    <section
      id="what-is"
      className={cn(
        "mb-24",
        theme.layout.section.scrollMargin
      )}
    >
      <div className="container mx-auto px-4">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-100">
            {content.whatIs.title}
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-4 text-gray-300 mb-8">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* 视频嵌入 - 已在主页展示，这里可以不重复 */}
        </div>
      </div>
    </section>
  );
}






