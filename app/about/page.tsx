import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About ${siteConfig.name} | ${siteConfig.domain}`,
  description: `Learn about ${siteConfig.name} and our mission to provide fun, accessible browser-based gaming experiences for everyone.`,
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
};

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-4xl text-center font-bold mb-8">About {siteConfig.name}</h2>

          <div className="space-y-6 text-lg">
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
              <p>
                At {siteConfig.name}, our mission is to bring the authentic experience of Vietnamese pho restaurant management to players worldwide. We believe in the power of games to educate, entertain, and inspire. Our goal is to create an immersive cooking and restaurant simulation that celebrates Vietnamese culinary culture while providing engaging gameplay that can be enjoyed instantly in your browser, without downloads or barriers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
              <p>
                We are a passionate team of game developers and Vietnamese food enthusiasts dedicated to creating authentic culinary gaming experiences. Our journey began with a love for Vietnamese pho and a vision to share this wonderful cuisine with the world through interactive gameplay. {siteConfig.name} represents our commitment to quality, authenticity, and fun.
              </p>
              <p className="mt-4">
                Our game combines realistic restaurant management mechanics with the art of traditional Vietnamese pho preparation, offering players a unique opportunity to learn about this beloved cuisine while enjoying challenging and rewarding gameplay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Game</h2>
              <p>
                Brother Hai's Pho Restaurant is more than just a cooking game - it's a celebration of Vietnamese culinary traditions. From taking customer orders to preparing authentic pho with fresh ingredients and aromatic broths, every aspect of the game has been designed to provide an immersive restaurant management experience. We focus on realistic cooking mechanics, strategic time management, and progressive gameplay that keeps you coming back for more.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-3">Our Commitment</h2>
              <p>
                We are committed to providing an authentic, safe, and enjoyable gaming experience for all our players. Brother Hai's Pho Restaurant is completely free to play directly in your browser, with no hidden costs, no downloads required, and no intrusive advertisements. We value your feedback and actively incorporate player suggestions to continuously improve the game and add new features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
              <p>
                Have questions, feedback, or just want to say hello? We'd love to hear from you!
              </p>
              <p className="mt-2">
                You can reach us by email at: <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
