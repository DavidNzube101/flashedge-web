import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  BarChart3,
  Bolt,
  Brain,
  ChevronRight,
  Database,
  Github,
  Globe,
  Shield,
  Twitter,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="m-4 flex min-h-screen flex-col bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-black/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Bolt className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold">FlashEdge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-zinc-400 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#for-who" className="text-sm text-zinc-400 hover:text-white transition-colors">
              For Who
            </Link>
            <Link href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex border-zinc-700 text-white hover:bg-zinc-800">
              Login
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 border-b border-zinc-800">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-zinc-900/0 to-transparent"></div>
          <div className="container relative">
            <div className="gap-8 md:grid-cols-2 items-center">
              <div className="flex flex-col gap-6">
                <div className="inline-flex items-center rounded-full border border-zinc-700 bg-zinc-800/30 px-3 py-1 text-sm">
                  <span className="mr-2 rounded-full bg-blue-500 h-2 w-2"></span>
                  AI-Powered Flash Loan Arbitrage Swarm
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Maximize Profits. <br />
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Minimize Risk.
                  </span>{" "}
                  <br />
                  Trade Smarter.
                </h1>
                <p className="text-lg text-zinc-400 max-w-md">
                  FlashEdge is a cutting-edge AI-driven DeFi arbitrage platform that leverages flash loans to execute
                  high-speed, risk-free trades across decentralized exchanges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Launch App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                    View Documentation
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-8 w-8 rounded-full bg-zinc-800 border border-black"></div>
                    ))}
                  </div>
                  <p>Trusted by 10,000+ traders worldwide</p>
                </div>
              </div>
              {/* <div className="relative h-[400px] w-full rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="FlashEdge Dashboard Preview"
                    width={500}
                    height={400}
                    className="rounded"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 border-b border-zinc-800">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                FlashEdge combines cutting-edge AI with DeFi to create a powerful arbitrage platform
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                icon={<Brain className="h-10 w-10 text-blue-500" />}
                title="AI-Powered Arbitrage"
                description="Detects profitable opportunities instantly across multiple DEXs using advanced machine learning algorithms."
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 text-yellow-500" />}
                title="Flash Loan Execution"
                description="Borrow and trade with zero initial capital, repaying within the same transaction for risk-free arbitrage."
              />
              <FeatureCard
                icon={<Globe className="h-10 w-10 text-purple-500" />}
                title="Multi-Chain Compatibility"
                description="Executes trades seamlessly across NEAR, Ethereum, and other EVM-compatible chains."
              />
              <FeatureCard
                icon={<Database className="h-10 w-10 text-green-500" />}
                title="Real-Time Market Data"
                description="Integrated with Chainlink oracles for precise price tracking and market analysis."
              />
              <FeatureCard
                icon={<Shield className="h-10 w-10 text-red-500" />}
                title="Optimized Risk Management"
                description="AI-driven risk assessment to prevent losses and ensure profitable trades."
              />
              <FeatureCard
                icon={<BarChart3 className="h-10 w-10 text-cyan-500" />}
                title="Advanced Analytics"
                description="Comprehensive dashboard with real-time performance metrics and historical data."
              />
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 border-b border-zinc-800">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How FlashEdge Works</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Our platform simplifies the complex process of flash loan arbitrage
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <StepCard
                number="01"
                title="Market Analysis"
                description="Our AI continuously scans DEXs across multiple blockchains to identify price discrepancies and arbitrage opportunities."
              />
              <StepCard
                number="02"
                title="Flash Loan Execution"
                description="When a profitable opportunity is detected, FlashEdge automatically borrows funds via flash loans and executes the trade."
              />
              <StepCard
                number="03"
                title="Profit Distribution"
                description="After repaying the flash loan in the same transaction, profits are distributed to your wallet minus platform fees."
              />
            </div>

            <div className="mt-16 p-6 rounded-lg border border-zinc-800 bg-zinc-900/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Built on NEAR Protocol</h3>
                  <p className="text-zinc-400 mb-6">
                    FlashEdge leverages NEAR Protocol's high throughput and low transaction costs to provide the fastest
                    and most cost-effective arbitrage solution in DeFi.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">Learn More About Our Technology</Button>
                </div>
                {/* <div className="flex justify-center">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="NEAR Protocol Integration"
                    width={400}
                    height={200}
                    className="rounded"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* For Who Section */}
        <section id="for-who" className="py-20 border-b border-zinc-800">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Built for DeFi Innovators</h2>
              <p className="text-zinc-400 max-w-2xl mx-auto">
                Whether you're an advanced trader, developer, or DeFi enthusiast, FlashEdge provides an automated,
                efficient, and secure way to leverage flash loans for arbitrage
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <UserCard
                title="Traders"
                description="Access sophisticated arbitrage strategies without technical knowledge. Set your risk parameters and let our AI do the work."
                features={["No coding required", "Customizable risk profiles", "Real-time performance tracking"]}
              />
              <UserCard
                title="Developers"
                description="Integrate our API into your DeFi applications or build custom strategies on top of our infrastructure."
                features={[
                  "Comprehensive API documentation",
                  "SDK for multiple languages",
                  "Developer community support",
                ]}
              />
              <UserCard
                title="DeFi Enthusiasts"
                description="Learn about flash loans and arbitrage while earning passive income through our automated platform."
                features={["Educational resources", "Community-driven strategies", "Lower barrier to entry"]}
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="rounded-2xl bg-gradient-to-r from-blue-900/40 to-purple-900/40 border border-zinc-800 p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Join the future of decentralized finance today!
                  </h2>
                  <p className="text-zinc-300 mb-6">
                    Start leveraging AI-powered flash loan arbitrage with FlashEdge and maximize your DeFi profits.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Get Started Now
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-zinc-700 text-white hover:bg-zinc-800">
                      Schedule a Demo
                    </Button>
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-6 border border-zinc-800">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-zinc-400 mb-4">
                    Subscribe to our newsletter for the latest updates on FlashEdge and DeFi arbitrage opportunities.
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm"
                    />
                    <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Bolt className="h-6 w-6 text-blue-500" />
                <span className="text-lg font-bold">FlashEdge</span>
              </div>
              <p className="text-zinc-400 text-sm mb-4">
                AI-Powered Flash Loan Arbitrage Platform built on NEAR Protocol
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="#" className="text-zinc-400 hover:text-white">
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Community
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-zinc-400 hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} FlashEdge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Component for feature cards
function FeatureCard({ icon, title, description }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}

// Component for how it works steps
function StepCard({ number, title, description }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900">
      <div className="inline-block rounded-full bg-blue-900/30 border border-blue-800 px-3 py-1 text-sm font-bold text-blue-400 mb-4">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400">{description}</p>
    </div>
  )
}

// Component for user type cards
function UserCard({ title, description, features }) {
  return (
    <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-zinc-700 hover:bg-zinc-900">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-zinc-400 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <div className="rounded-full bg-blue-900/30 p-1">
              <Check className="h-3 w-3 text-blue-400" />
            </div>
            <span className="text-sm text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

// Check icon component
function Check(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

