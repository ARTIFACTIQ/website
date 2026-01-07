export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-2xl font-bold">
            <span className="text-blue-400">Artifact</span>iq
          </div>
          <div className="space-x-6">
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="https://docs.artifactiq.ai" className="hover:text-blue-400 transition">Docs</a>
            <a href="#waitlist" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
              Join Waitlist
            </a>
          </div>
        </nav>

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6">
            Intelligence in Every Frame
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            AI-powered visual intelligence that transforms your images and videos
            into monetizable experiences. Detect valuable artifacts, connect to products,
            and generate tourism packages automatically.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            <a
              href="#waitlist"
              className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition"
            >
              Get Early Access
            </a>
            <a
              href="https://docs.artifactiq.ai"
              className="border border-gray-600 hover:border-gray-400 px-8 py-4 rounded-lg text-lg transition"
            >
              View Documentation
            </a>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 text-left" id="features">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">Detect</h3>
              <p className="text-gray-400">
                AI identifies every artifact of interest in your visual content with precision.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">Connect</h3>
              <p className="text-gray-400">
                Automatically link detected objects to purchasable products and earn commissions.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="text-3xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold mb-2">Explore</h3>
              <p className="text-gray-400">
                Generate tourism packages from scenic locations detected in your content.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="max-w-4xl mx-auto mt-24" id="about">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="space-y-8">
            <div className="flex items-start gap-6">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Upload Your Content</h3>
                <p className="text-gray-400">Upload images or videos through our API or dashboard. We support all major formats.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-gray-400">Our AI detects artifacts, recognizes locations, and builds scene graphs to understand context.</p>
              </div>
            </div>
            <div className="flex items-start gap-6">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Monetization Links</h3>
                <p className="text-gray-400">Get product matches, tourism packages, and affiliate links for every detected artifact.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="max-w-3xl mx-auto mt-24">
          <h2 className="text-3xl font-bold text-center mb-8">Simple Integration</h2>
          <pre className="bg-gray-800 p-6 rounded-xl overflow-x-auto text-sm">
            <code className="text-gray-300">{`from artifactiq import Artifactiq

client = Artifactiq(api_key="...")
result = client.analyze("travel_video.mp4")

for artifact in result.artifacts:
    # Get matching products
    products = artifact.get_products()

    # Get tourism packages for locations
    if artifact.type == "location":
        packages = artifact.get_tourism_packages()

    print(f"{artifact.label}: {len(products)} products found")`}</code>
          </pre>
        </div>

        {/* Waitlist Section */}
        <div className="max-w-md mx-auto mt-24 text-center" id="waitlist">
          <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
          <p className="text-gray-400 mb-6">
            Be the first to know when Artifactiq launches.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition"
            >
              Join
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-10 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 Artifactiq. All rights reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="https://github.com/ARTIFACTIQ" className="hover:text-gray-300">GitHub</a>
            <a href="https://twitter.com/artifactiq" className="hover:text-gray-300">Twitter</a>
            <a href="mailto:hello@artifactiq.ai" className="hover:text-gray-300">Contact</a>
          </div>
        </footer>
      </div>
    </main>
  );
}
