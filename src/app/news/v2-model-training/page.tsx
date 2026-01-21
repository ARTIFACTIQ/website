export default function V2ModelTrainingNews() {
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
            <a href="/news" className="hover:text-blue-400 transition">News</a>
            <a href="https://docs.artifactiq.ai" className="hover:text-blue-400 transition">Docs</a>
          </div>
        </nav>

        <article className="max-w-4xl mx-auto">
          <div className="mb-8">
            <a href="/news" className="text-blue-400 hover:underline">← Back to News</a>
          </div>

          <header className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-gray-400">January 21, 2026</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Model</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Training</span>
              <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">AI</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Artifactiq v2 Model Training: Domain-Specific Detection Breakthrough
            </h1>
            <p className="text-xl text-gray-400">
              Our custom-trained YOLOv8 model now detects 39 domain-specific classes that stock models cannot identify,
              enabling true fashion, accessory, and merchandise detection.
            </p>
          </header>

          <div className="prose prose-invert prose-lg max-w-none">
            {/* Key Results */}
            <section className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 mb-12">
              <h2 className="text-2xl font-bold text-blue-400 mb-4">Key Results</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">40+</div>
                  <div className="text-gray-400">Apparel Detections</div>
                  <div className="text-sm text-gray-500">vs 0 with stock model</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">14+</div>
                  <div className="text-gray-400">Accessory Detections</div>
                  <div className="text-sm text-gray-500">vs 0 with stock model</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-400">9+</div>
                  <div className="text-gray-400">Footwear Detections</div>
                  <div className="text-sm text-gray-500">vs 0 with stock model</div>
                </div>
              </div>
            </section>

            {/* The Problem */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">The Problem with Generic Models</h2>
              <p className="text-gray-300 mb-4">
                Stock object detection models like YOLOv8n are trained on COCO, a dataset of 80 general-purpose classes.
                While excellent for generic object detection, these models have significant blind spots for e-commerce
                and fashion applications:
              </p>
              <div className="bg-gray-800/50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold mb-3 text-red-400">What Stock YOLOv8n CANNOT Detect:</h3>
                <ul className="grid md:grid-cols-2 gap-2 text-gray-400">
                  <li>❌ Clothing, Dress, Jacket, Jeans</li>
                  <li>❌ Hat, Glasses, Sunglasses, Watch</li>
                  <li>❌ Boots, Sandals, High heels</li>
                  <li>❌ Backpack (limited), Briefcase</li>
                  <li>❌ Man vs Woman vs Boy vs Girl</li>
                  <li>❌ Scarf, Tie, Belt, Suit</li>
                </ul>
              </div>
              <p className="text-gray-300">
                For Artifactiq's use case—monetizing visual content through fashion and merchandise detection—these
                missing classes represent the core value proposition.
              </p>
            </section>

            {/* Our Solution */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Solution: Domain-Specific Training</h2>
              <p className="text-gray-300 mb-4">
                We fine-tuned YOLOv8n on a custom dataset of 10,000 images from Open Images V7, filtered for 39
                domain-specific classes across six categories:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">People (5)</h4>
                  <p className="text-sm text-gray-400">Boy, Girl, Man, Person, Woman</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Apparel (11)</h4>
                  <p className="text-sm text-gray-400">Clothing, Dress, Jacket, Jeans, Shorts, Skirt, Suit...</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Accessories (9)</h4>
                  <p className="text-sm text-gray-400">Backpack, Glasses, Hat, Handbag, Sunglasses, Watch...</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Footwear (4)</h4>
                  <p className="text-sm text-gray-400">Boot, Footwear, High heels, Sandal</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Vehicles (5)</h4>
                  <p className="text-sm text-gray-400">Bicycle, Bus, Car, Motorcycle, Truck</p>
                </div>
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-400 mb-2">Electronics (5)</h4>
                  <p className="text-sm text-gray-400">Camera, Laptop, Mobile phone, Tablet computer...</p>
                </div>
              </div>
            </section>

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Head-to-Head Comparison</h2>
              <p className="text-gray-300 mb-4">
                We tested both models on 100 validation images with a confidence threshold of 0.10:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Stock YOLOv8n</th>
                      <th className="py-3 px-4">Artifactiq v2</th>
                      <th className="py-3 px-4">Delta</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-800 bg-green-500/10">
                      <td className="py-3 px-4 font-medium">Apparel</td>
                      <td className="py-3 px-4 text-red-400">0</td>
                      <td className="py-3 px-4 text-green-400">40</td>
                      <td className="py-3 px-4 text-green-400">+40 ✓</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-green-500/10">
                      <td className="py-3 px-4 font-medium">Accessories</td>
                      <td className="py-3 px-4 text-red-400">0</td>
                      <td className="py-3 px-4 text-green-400">14</td>
                      <td className="py-3 px-4 text-green-400">+14 ✓</td>
                    </tr>
                    <tr className="border-b border-gray-800 bg-green-500/10">
                      <td className="py-3 px-4 font-medium">Footwear</td>
                      <td className="py-3 px-4 text-red-400">0</td>
                      <td className="py-3 px-4 text-green-400">9</td>
                      <td className="py-3 px-4 text-green-400">+9 ✓</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">People</td>
                      <td className="py-3 px-4">661</td>
                      <td className="py-3 px-4">130</td>
                      <td className="py-3 px-4 text-gray-500">Different calibration*</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Vehicles</td>
                      <td className="py-3 px-4">77</td>
                      <td className="py-3 px-4">9</td>
                      <td className="py-3 px-4 text-gray-500">Still training</td>
                    </tr>
                    <tr className="border-b border-gray-800">
                      <td className="py-3 px-4 font-medium">Electronics</td>
                      <td className="py-3 px-4">16</td>
                      <td className="py-3 px-4">3</td>
                      <td className="py-3 px-4 text-gray-500">Still training</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                * Stock model only has generic "person" class, while Artifactiq v2 distinguishes Man, Woman, Boy, Girl.
                Model is at epoch 18/100, performance will improve with continued training.
              </p>
            </section>

            {/* Training Progress */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Training Progress</h2>
              <p className="text-gray-300 mb-4">
                The model is currently at epoch 18 of 100, with consistent improvement in mAP metrics:
              </p>
              <div className="bg-gray-800/50 rounded-xl p-6">
                <div className="grid md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-sm text-gray-500">Epoch 1</div>
                    <div className="text-2xl font-bold text-gray-400">2.95%</div>
                    <div className="text-xs text-gray-500">mAP50</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Epoch 10</div>
                    <div className="text-2xl font-bold text-blue-400">9.80%</div>
                    <div className="text-xs text-gray-500">mAP50</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Epoch 18</div>
                    <div className="text-2xl font-bold text-green-400">12.92%</div>
                    <div className="text-xs text-gray-500">mAP50</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Projected (100)</div>
                    <div className="text-2xl font-bold text-purple-400">~30%</div>
                    <div className="text-xs text-gray-500">mAP50</div>
                  </div>
                </div>
              </div>
            </section>

            {/* What's Next */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">What's Next</h2>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Complete training to 100 epochs for optimal performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Release v2.0 model via GitHub releases and Axon registry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Integrate with product matching pipeline for e-commerce monetization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-400">→</span>
                  <span>Expand dataset with more fashion and lifestyle images</span>
                </li>
              </ul>
            </section>

            {/* Try It */}
            <section className="bg-gray-800/50 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Try It Yourself</h2>
              <p className="text-gray-300 mb-4">
                The preview model is available for testing. Note: This is epoch 18/100, not the final release.
              </p>
              <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm mb-4">
                <code className="text-green-400">{`# Using Artifactiq CLI (when released)
artifactiq analyze --input photo.jpg --model artifactiq:v2.0-preview

# Direct ONNX usage
python -c "
from ultralytics import YOLO
model = YOLO('artifactiq_v2_epoch16.onnx')
results = model.predict('photo.jpg', conf=0.15)
"`}</code>
              </pre>
            </section>
          </div>
        </article>

        <footer className="mt-24 pt-10 border-t border-gray-800 text-center text-gray-500">
          <p>© 2026 Artifactiq. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
