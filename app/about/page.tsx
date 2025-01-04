'use client';

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* About Hero Section */}
      <header className="flex flex-col items-center text-center gap-6 py-12 sm:py-20 px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          About Cheapest Postage App
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Affordable, reliable, and designed to simplify your shipping needs. We help individuals and businesses save time and money on every shipment.
        </p>
      </header>

      {/* Our Story Section */}
      <section className="py-12 sm:py-20 bg-white text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Our Story</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold">Cheapest Postage App</span>, we started with one mission: to make shipping stress-free and affordable for everyone. Whether you're running a small business, selling online, or simply sending packages to loved ones, we’re here to help you save more and do it faster.
        </p>
        <p className="text-gray-600 max-w-3xl mx-auto mt-6">
          With us, you can compare rates, print labels, and manage your shipments in just a few clicks. We’re not just about low prices – we’re about making every shipment smooth, secure, and reliable.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 bg-gray-50 text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              title: "Cheapest Shipping Rates",
              description: "Save big on domestic and international shipments with our unbeatable rates.",
            },
            {
              title: "Insurance & Tracking",
              description: "Every shipment includes insurance and real-time tracking for peace of mind.",
            },
            {
              title: "Privacy & Security",
              description: "We protect your information, your packages, and your trust at every step.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="font-semibold text-xl mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-white text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Sign Up",
              description: "Create an account in minutes and start shipping smarter.",
            },
            {
              step: "2",
              title: "Compare Rates",
              description: "Find the best shipping options tailored to your needs.",
            },
            {
              step: "3",
              title: "Print & Ship",
              description: "Print labels instantly and send your packages with confidence.",
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">{item.step}</span>
              </div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 sm:py-20 bg-gray-50 text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">Join Us Today</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Ready to make shipping affordable and hassle-free? Sign up now and experience the Cheapest Postage App difference. Whether you're shipping across town or across the world, we're here to help you save.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-lg transition-all"
          >
            Get Started for Free
          </a>
          <a
            href="#features"
            className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-medium py-3 px-6 rounded-lg transition-all"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 text-white text-center">
        <p>&copy; {new Date().getFullYear()} Cheapest Postage App. All rights reserved.</p>
        <p className="mt-2">
          <a href="/privacy-policy" className="underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="/terms" className="underline">
            Terms of Service
          </a>
        </p>
      </footer>
    </div>
  );
}