import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: `Raise Animals Blog - Guides, Codes & Tips | ${siteConfig.domain}`,
  description: "Discover the latest Raise Animals codes, gameplay guides, tips and tricks. Stay updated with new content and strategies to build your ultimate farm!",
  openGraph: {
    title: `Raise Animals Blog | ${siteConfig.domain}`,
    description: "Latest codes, guides, and tips for Raise Animals game",
    type: 'website',
    url: `${siteConfig.url}/raise-animals/blog`,
    siteName: siteConfig.name,
  },
  alternates: {
    canonical: `/raise-animals/blog`,
  }
};

const blogPosts = [
  {
    title: "10+ Working Raise Animals Codes (October 2025)",
    description: "Get free Rubies, Coins, and rare animals with these working Roblox codes. Updated daily!",
    publishDate: "2025-10-23",
    slug: "codes",
    badge: "Codes",
    badgeVariant: "default" as const,
    isNew: true
  },
  // Future articles can be added here
];

export default function BlogPage() {
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

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Page Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Raise Animals Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover the latest codes, guides, tips and strategies to master Raise Animals
          </p>
        </header>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 mb-12">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/raise-animals/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant={post.badgeVariant}>
                        {post.badge}
                      </Badge>
                      {post.isNew && (
                        <Badge variant="secondary">
                          New!
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="mr-2 h-4 w-4" />
                      {new Date(post.publishDate).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-primary font-medium">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Coming Soon Section */}
        <div className="text-center p-8 border-2 border-dashed rounded-lg">
          <h2 className="text-2xl font-bold mb-2">More Articles Coming Soon!</h2>
          <p className="text-muted-foreground">
            We're working on more guides, tips, and tutorials. Check back soon for new content!
          </p>
        </div>
      </main>
    </div>
  );
}
