import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Eye, Zap, BarChart3, Globe, ChevronRight, TrendingUp, Clock } from "lucide-react";
import geoGridReportUrl from "@assets/image_(2)_1766589446803.png";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card/50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">[ YourLogo ]</div>
            <button className="text-sm text-muted-foreground hover:text-foreground">
              [ Surya ▼ ]
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="space-y-12">
          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline">Free Trial • No Credit Card</Badge>
            <Badge variant="outline">2-Minute Setup</Badge>
          </div>

          {/* Main Headline & Subheading */}
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                See Your Local Rankings <span className="text-primary">Across The Map</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Instantly visualize how your business ranks for any keyword in different geographic areas. Identify gaps and opportunities in minutes, not days.
              </p>
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/grid">
                <Button size="lg" className="w-full sm:w-auto px-8">
                  <Zap className="mr-2 h-4 w-4" />
                  Run Your Free Analysis
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button size="lg" variant="outline" className="w-full sm:w-auto px-8">
                  <Globe className="mr-2 h-4 w-4" />
                  See How It Works
                </Button>
              </a>
            </div>

            {/* Subtext */}
            <p className="text-sm text-muted-foreground">
              ✓ Instant results • ✓ No setup required • ✓ Full-featured free trial
            </p>
          </div>

          {/* Two Core Features Section */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Complete Local SEO Intelligence</h2>
              <p className="mt-2 text-muted-foreground">Two powerful features that work together</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {/* Primary Feature: Geo Grid */}
              <Card className="border-2 border-primary/30 bg-card p-6 hover:border-primary/50">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="default">Primary</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Geo Grid Analysis</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Get an instant snapshot of how your business ranks across different geographic areas. See the full picture in minutes.
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Visual heatmaps showing ranking patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Identify ranking gaps by location</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      <span>Instant competitor insights</span>
                    </li>
                  </ul>
                </div>
              </Card>

              {/* Secondary Feature: Organic Tracking */}
              <Card className="border border-border bg-card p-6 hover:border-primary/20">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                      <TrendingUp className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <Badge variant="secondary">Secondary</Badge>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Organic Ranking Tracking</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Monitor how your rankings change over time. Track progress, detect drops, and measure the impact of your SEO efforts.
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">✓</span>
                      <span>Continuous ranking monitoring</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">✓</span>
                      <span>Historical trend analysis</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-muted-foreground">✓</span>
                      <span>Alert notifications for changes</span>
                    </li>
                  </ul>
                  <div className="pt-6">
                    <Link href="/dashboard">
                      <Button className="w-full">
                        <TrendingUp className="mr-2 h-4 w-4" />
                        Explore Tracking
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>

            {/* How They Work Together */}
            <Card className="border border-border bg-card/50 p-6">
              <div className="flex gap-4">
                <Clock className="h-5 w-5 flex-shrink-0 text-primary" />
                <div>
                  <h4 className="font-semibold">Why Both?</h4>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Use Geo Grid Analysis to understand your current position and find opportunities. Then use Organic Ranking Tracking to monitor your progress and prove ROI as you implement changes.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Preview Card */}
          <Card className="overflow-hidden border-2 shadow-lg">
            <div className="space-y-4 p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">Live Geo Grid Report</h3>
              </div>
              <div className="relative overflow-hidden rounded-md bg-muted">
                <img
                  src={geoGridReportUrl}
                  alt="Real local search grid report example"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "280px" }}
                />
              </div>
              <p className="text-xs text-muted-foreground">
                Real data from an actual geo grid analysis - this is what you'll see after your first run
              </p>
            </div>
          </Card>

          {/* Key Features / How It Works */}
          <div className="space-y-10 py-8" id="how-it-works">
            <div className="text-center">
              <h2 className="text-3xl font-bold">Three-Step Process</h2>
              <p className="mt-2 text-muted-foreground">Get actionable insights in under 2 minutes</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {/* Step 1 */}
              <div className="space-y-4 rounded-lg border border-border bg-card p-6 hover:border-primary/50">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">01</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Add Your Business</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Enter your business details and the geographic area you want to analyze
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="space-y-4 rounded-lg border border-border bg-card p-6 hover:border-primary/50">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Search className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">02</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Select Your Keyword</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Choose one high-impact keyword that matters most to your business goals
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="space-y-4 rounded-lg border border-border bg-card p-6 hover:border-primary/50">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">03</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">View Results Instantly</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See your geo grid rankings and identify ranking gaps in real-time
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-8 rounded-lg border border-border bg-card p-8 md:p-12">
            <div>
              <h2 className="text-2xl font-bold">Why This Tool Works</h2>
              <p className="mt-2 text-muted-foreground">Get the data you need to make better decisions</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Lightning Fast Results</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Get actionable data in 2 minutes instead of days
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Identify Ranking Gaps</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Spot weak areas and focus your SEO efforts where they matter most
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Local Focus</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Analyze rankings by specific geographic regions and districts
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">Visual Intelligence</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    See patterns and opportunities through interactive heatmaps
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6 text-center">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg text-muted-foreground">
                Try it out for free - no credit card required
              </p>
            </div>

            <Link href="/grid">
              <Button size="lg" className="px-8">
                Run Your Free Geo Grid Analysis
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <p className="text-sm text-muted-foreground">
              No credit card required • Instant setup • Full-featured free trial
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 mb-8">
            <div className="space-y-3">
              <h3 className="font-semibold">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Features</a></li>
                <li><a href="#" className="hover:text-foreground">Pricing</a></li>
                <li><a href="#" className="hover:text-foreground">Integrations</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">About</a></li>
                <li><a href="#" className="hover:text-foreground">Blog</a></li>
                <li><a href="#" className="hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground">Contact Us</a></li>
                <li><a href="#" className="hover:text-foreground">Status Page</a></li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="hover:text-foreground">Terms</a></li>
                <li><a href="#" className="hover:text-foreground">Security</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Local Ranking Tool. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
