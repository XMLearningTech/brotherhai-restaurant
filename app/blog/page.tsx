import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

// Force static generation
export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

export const metadata: Metadata = {
  title: `Brother Hai's Pho Restaurant Blog - Ultimate Guide & Tips | ${siteConfig.domain}`,
  description: "Master Brother Hai's Pho Restaurant with our comprehensive guides, tips & tricks, money-making strategies, and secret techniques. Updated regularly!",
  openGraph: {
    title: `Brother Hai's Pho Restaurant Blog | ${siteConfig.domain}`,
    description: "Ultimate guides, tips and strategies for Brother Hai's Pho Restaurant game",
    type: 'website',
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  }
};

const blogPosts = [
  {
    title: "Brother Hai's Pho Restaurant - Ultimate Tips & Tricks Guide (2025)",
    description: "Master the game with our comprehensive guide! Learn pro strategies, time management tips, money-making techniques, secret features, and expert tricks to become a pho restaurant tycoon.",
    publishDate: "2025-11-10",
    slug: "tips",
    badge: "Guide",
    badgeVariant: "default" as const,
    isNew: true,
    tags: ["💰 Money Making", "🎯 Pro Strategies", "🔐 Secret Tips", "⚡ Advanced"]
  },
  // Future articles can be added here
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-sm text-gray-400 hover:text-red-500 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Brother Hai's Pho Restaurant
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            Brother Hai's Pho Restaurant Blog
          </h1>
          <p className="text-xl text-gray-400">
            Discover expert guides, tips and strategies to master Brother Hai's Pho Restaurant
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="bg-gray-900 border-gray-800 hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/20 transition-all cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={post.badgeVariant} className="bg-red-500/20 text-red-400 border-red-500/30">
                        {post.badge}
                      </Badge>
                      {post.isNew && (
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                          New!
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-100 group-hover:text-red-400 transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base text-gray-400">
                    {post.description}
                  </CardDescription>
                  {/* Tags */}
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 text-xs rounded bg-gray-800 text-gray-300 border border-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-red-500 font-medium">
                    Read Full Guide
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center p-8 border-2 border-dashed border-gray-800 rounded-lg bg-gray-900/50">
          <h2 className="text-2xl font-bold mb-2 text-gray-100">More Articles Coming Soon!</h2>
          <p className="text-gray-400">
            We're working on more guides, tips, and tutorials. Check back soon for new content!
          </p>
        </div>
      </main>
    </div>
  );
}
