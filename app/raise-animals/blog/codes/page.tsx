import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { codesContent } from "./content";
import { CopyButton } from "@/components/blog/CopyButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  Gift, 
  Sparkles, 
  TrendingUp, 
  Calendar, 
  CheckCircle2, 
  XCircle,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `${codesContent.title} | Free Roblox Codes & Rewards | ${siteConfig.domain}`,
  description: codesContent.description,
  keywords: "raise animals codes, raise animals roblox codes, roblox raise animals code, raise animal code, free rubies, free coins, working codes 2025",
  openGraph: {
    title: `${codesContent.title} | ${siteConfig.domain}`,
    description: codesContent.description,
    type: 'article',
    url: `${siteConfig.url}/raise-animals/blog/codes`,
    siteName: siteConfig.name,
    publishedTime: codesContent.publishDate,
    modifiedTime: codesContent.updatedDate,
    authors: [codesContent.author],
    images: [
      {
        url: `/assets/raise-animals/raise-animals.png`,
        alt: 'Raise Animals Codes',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: codesContent.title,
    description: codesContent.description,
    images: [`/assets/raise-animals/raise-animals.png`],
  },
  alternates: {
    canonical: `/raise-animals/blog/codes`,
  }
};

export default function CodesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/raise-animals" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Raise Animals
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <time dateTime={codesContent.publishDate}>
                Published: {new Date(codesContent.publishDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
              <span className="mx-2">•</span>
              <span>Updated: {new Date(codesContent.updatedDate).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {codesContent.title}
            </h1>
            
            <p className="text-xl text-muted-foreground">
              {codesContent.description}
            </p>
          </header>

          {/* Introduction */}
          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            {codesContent.introduction.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Active Codes Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Gift className="h-8 w-8 text-green-500" />
              <h2 className="text-3xl font-bold">Active Codes</h2>
              <Badge variant="default" className="bg-green-500">
                {codesContent.activeCodes.length} Working
              </Badge>
            </div>

            <div className="grid gap-4">
              {codesContent.activeCodes.map((codeItem, index) => (
                <Card key={index} className="border-green-200 dark:border-green-900">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-2xl font-mono">
                            {codeItem.code}
                          </CardTitle>
                          {codeItem.isNew && (
                            <Badge variant="default" className="bg-blue-500">
                              <Sparkles className="mr-1 h-3 w-3" />
                              New!
                            </Badge>
                          )}
                          <Badge variant="default" className="bg-green-500">
                            <CheckCircle2 className="mr-1 h-3 w-3" />
                            Active
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          <span className="font-semibold text-foreground">Reward: </span>
                          {codeItem.reward}
                        </CardDescription>
                      </div>
                      <CopyButton code={codeItem.code} />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {codeItem.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* How to Redeem Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-8 w-8 text-blue-500" />
              <h2 className="text-3xl font-bold">{codesContent.howToRedeem.title}</h2>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ol className="space-y-6">
                  {codesContent.howToRedeem.steps.map((step) => (
                    <li key={step.step} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1">
                          {step.instruction}
                        </h3>
                        <p className="text-muted-foreground">
                          {step.details}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Sparkles className="h-5 w-5" />
                    Pro Tips:
                  </h3>
                  <ul className="space-y-2">
                    {codesContent.howToRedeem.tips.map((tip, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </section>

          <Separator className="my-12" />

          {/* Where to Find Codes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {codesContent.whereToFindCodes.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {codesContent.whereToFindCodes.description}
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {codesContent.whereToFindCodes.sources.map((source, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <span className="text-2xl">{source.icon}</span>
                      {source.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {source.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* Expired Codes Section */}
          <section className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="h-8 w-8 text-muted-foreground" />
              <h2 className="text-3xl font-bold">Expired Codes</h2>
              <Badge variant="secondary">
                No Longer Active
              </Badge>
            </div>

            <p className="text-muted-foreground mb-6">
              These codes are no longer working. We keep them listed for reference purposes.
            </p>

            <div className="grid md:grid-cols-2 gap-4 opacity-60">
              {codesContent.expiredCodes.map((codeItem, index) => (
                <Card key={index} className="border-muted">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <CardTitle className="text-lg font-mono line-through">
                          {codeItem.code}
                        </CardTitle>
                        <CardDescription className="text-sm">
                          {codeItem.reward}
                        </CardDescription>
                      </div>
                      <Badge variant="secondary">
                        Expired
                      </Badge>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </section>

          <Separator className="my-12" />

          {/* FAQ Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {codesContent.faq.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {item.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {item.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Related Articles */}
          <section className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Related Articles</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {codesContent.relatedArticles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">
                      {article.title}
                    </CardTitle>
                    <CardDescription>
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {article.isExternal ? (
                      <a 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                      >
                        Read More <ArrowLeft className="w-4 h-4 rotate-180" />
                      </a>
                    ) : (
                      <Link 
                        href={article.url}
                        className="text-primary hover:underline font-medium inline-flex items-center gap-2"
                      >
                        Read More <ArrowLeft className="w-4 h-4 rotate-180" />
                      </Link>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </article>
      </main>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": codesContent.title,
            "description": codesContent.description,
            "datePublished": codesContent.publishDate,
            "dateModified": codesContent.updatedDate,
            "author": {
              "@type": "Person",
              "name": codesContent.author
            },
            "publisher": {
              "@type": "Organization",
              "name": siteConfig.name,
              "logo": {
                "@type": "ImageObject",
                "url": `${siteConfig.url}/assets/raise-animals/raise-animals-logo.png`
              }
            },
            "image": `${siteConfig.url}/assets/raise-animals/raise-animals.png`,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `${siteConfig.url}/raise-animals/blog/codes`
            }
          }),
        }}
      />
    </div>
  );
}
