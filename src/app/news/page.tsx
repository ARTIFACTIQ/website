export default function NewsPage() {
  const newsItems = [
    {
      date: "January 21, 2026",
      title: "Artifactiq v2 Model Training: Domain-Specific Detection Breakthrough",
      slug: "v2-model-training",
      excerpt: "Our custom-trained model now detects domain-specific classes that stock models cannot - including apparel, accessories, and footwear categories.",
      tags: ["Model", "Training", "AI"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-20">
        <nav className="flex justify-between items-center mb-20">
          <a href="/" className="text-2xl font-bold">
            <span className="text-blue-400">Artifact</span>iq
          </a>
          <div className="space-x-6">
            <a href="/#features" className="hover:text-blue-400 transition">Features</a>
            <a href="/#install" className="hover:text-blue-400 transition">Install</a>
            <a href="/news" className="text-blue-400">News</a>
            <a href="https://docs.artifactiq.ai" className="hover:text-blue-400 transition">Docs</a>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">News & Updates</h1>
          <p className="text-xl text-gray-400 mb-12">
            Latest developments from the Artifactiq team
          </p>

          <div className="space-y-8">
            {newsItems.map((item, index) => (
              <article key={index} className="bg-gray-800/50 p-8 rounded-xl hover:bg-gray-800/70 transition">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-400">{item.date}</span>
                  <div className="flex gap-2">
                    {item.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-3 hover:text-blue-400 transition">
                  <a href={`/news/${item.slug}`}>{item.title}</a>
                </h2>
                <p className="text-gray-400 mb-4">{item.excerpt}</p>
                <a href={`/news/${item.slug}`} className="text-blue-400 hover:underline">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>

        <footer className="mt-24 pt-10 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 Artifactiq. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
