import { Metadata } from "next";
import { tipsContent } from "./content";
import { CopyButton } from "@/components/blog/CopyButton";
import { siteConfig } from "@/config/site";

// Force static generation for better SEO
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: tipsContent.title,
  description: tipsContent.description,
  openGraph: {
    title: tipsContent.title,
    description: tipsContent.description,
    type: "article",
    publishedTime: tipsContent.publishDate,
    modifiedTime: tipsContent.updatedDate,
    authors: [tipsContent.author],
    url: `${siteConfig.url}/brother-hais-pho-restaurant/blog/tips`,
  },
  alternates: {
    canonical: `${siteConfig.url}/brother-hais-pho-restaurant/blog/tips`,
  },
};

export default function TipsPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      <article className="container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            {tipsContent.title}
          </h1>
          <p className="text-lg text-gray-400 mb-6">
            {tipsContent.description}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <span>By {tipsContent.author}</span>
            <span>Published: {tipsContent.publishDate}</span>
            <span>Updated: {tipsContent.updatedDate}</span>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-12">
          <div className="prose prose-invert max-w-none">
            {tipsContent.introduction.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Basic Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">📚</span> Essential Tips for Beginners
          </h2>
          <div className="space-y-6">
            {tipsContent.basicTips.map((tip, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-red-500/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {tip.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded bg-gray-800 text-gray-400">
                    {tip.difficulty}
                  </span>
                </div>
                <p className="text-red-400 font-medium mb-3">{tip.tip}</p>
                <p className="text-gray-400 leading-relaxed">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advanced Strategies */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">🎯</span> Advanced Strategies
          </h2>
          <div className="space-y-6">
            {tipsContent.advancedStrategies.map((strategy, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-950 border border-red-500/30 rounded-lg p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-100">
                    {strategy.title}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded bg-red-500/20 text-red-400 border border-red-500/50">
                    {strategy.difficulty}
                  </span>
                </div>
                <p className="text-red-400 font-medium mb-3">{strategy.strategy}</p>
                <p className="text-gray-300 leading-relaxed mb-4">{strategy.details}</p>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">💰 Earnings Boost:</span>
                  <span className="text-green-400 font-semibold">{strategy.earnings}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secret Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">🔐</span> Secret Tips & Hidden Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tipsContent.secretTips.map((secret, idx) => (
              <div key={idx} className="bg-gray-900 border border-yellow-500/30 rounded-lg p-6 hover:border-yellow-500/60 transition-colors">
                <h3 className="text-lg font-semibold text-yellow-400 mb-3">
                  {secret.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">{secret.description}</p>
                <div className="text-sm text-yellow-500 font-medium">
                  🎁 {secret.reward}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Mistakes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">⚠️</span> Common Mistakes to Avoid
          </h2>
          <div className="space-y-6">
            {tipsContent.mistakesToAvoid.map((mistake, idx) => (
              <div key={idx} className="bg-gray-900 border-l-4 border-red-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-semibold text-red-400 mb-2">
                  ❌ {mistake.mistake}
                </h3>
                <p className="text-gray-400 mb-3">
                  <span className="font-medium text-gray-300">Why it's bad:</span> {mistake.why}
                </p>
                <p className="text-gray-300 mb-3">
                  <span className="font-medium text-green-400">✓ Solution:</span> {mistake.solution}
                </p>
                <p className="text-sm text-orange-400">
                  ⚡ Impact: {mistake.impact}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Money Making Guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            {tipsContent.moneyMakingGuide.title}
          </h2>
          <div className="space-y-6">
            {tipsContent.moneyMakingGuide.stages.map((stage, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-900 to-gray-950 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-green-400">
                    {idx + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100">
                      {stage.stage}
                    </h3>
                    <p className="text-sm text-green-400">{stage.goal}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed mb-3">{stage.strategy}</p>
                <p className="text-sm text-gray-500">
                  ⏱️ Estimated time: {stage.timeframe}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pro Tricks */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">⚡</span> Pro Tricks & Shortcuts
          </h2>
          <div className="bg-gradient-to-br from-purple-900/20 to-gray-900 border border-purple-500/30 rounded-lg p-6">
            <ul className="space-y-3">
              {tipsContent.proTricks.map((trick, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-purple-400 mt-1">💎</span>
                  <span>{trick}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-6 flex items-center gap-2">
            <span className="text-red-500">❓</span> Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {tipsContent.faq.map((item, idx) => (
              <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-400 mb-3">
                  Q: {item.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  <span className="text-green-400 font-medium">A:</span> {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <div className="bg-gradient-to-br from-red-900/20 to-gray-900 border border-red-500/30 rounded-lg p-8">
            {tipsContent.conclusion.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Footer Navigation */}
        <footer className="border-t border-gray-800 pt-8 text-center">
          <a 
            href="/brother-hais-pho-restaurant" 
            className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
          >
            ← Back to Brother Hai's Pho Restaurant
          </a>
        </footer>
      </article>
    </div>
  );
}
