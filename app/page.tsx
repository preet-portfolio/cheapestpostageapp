import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans p-8">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center gap-6 py-12 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Affordable Shipping Made Simple
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Compare rates, print labels, and ship smarter with our easy-to-use
          platform designed for individuals and businesses alike.
        </p>
        <div className="flex gap-4 mt-6">
          <a
            href="/register"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow transition duration-300"
          >
            Get Started for Free
          </a>
          <a
            href="#features"
            className="border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10">
          <Image
            src="/hero-image.png"
            alt="App interface preview"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </header>

      {/* Features Section */}
      <section
        id="features"
        className="py-12 sm:py-20 bg-white text-center px-4 sm:px-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Why Choose Our App?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/compare-rates.svg"
              alt="Compare rates icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Compare Rates</h3>
            <p className="text-gray-600">
              Quickly find the cheapest shipping rates across trusted carriers.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/print-labels.svg"
              alt="Print labels icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Print Labels</h3>
            <p className="text-gray-600">
              Purchase and print shipping labels directly from the app.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <Image
              src="/drop-locations.svg"
              alt="Drop-off locations icon"
              width={50}
              height={50}
              className="mx-auto mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Drop Locations</h3>
            <p className="text-gray-600">
              Find the nearest drop-off points for your packages with ease.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 sm:py-20 bg-gray-50 text-center px-4 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="font-semibold text-xl">Sign Up</h3>
            <p className="text-gray-600">
              Create your account in minutes to get started.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">2</span>
            </div>
            <h3 className="font-semibold text-xl">Compare & Select</h3>
            <p className="text-gray-600">
              Enter shipment details to find the best shipping rates.
            </p>
          </div>
          <div className="flex flex-col items-center text-center gap-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">3</span>
            </div>
            <h3 className="font-semibold text-xl">Print & Ship</h3>
            <p className="text-gray-600">
              Purchase your label, print it, and drop off your package.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white text-center px-4 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “This app saved me so much time and money!”
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Sarah, Etsy Seller</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “The easiest shipping platform I’ve ever used.”
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Mike, Small Business Owner</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow hover:shadow-md transition">
            <p className="text-gray-600 italic">
              “I love how user-friendly this app is. Highly recommend!”
            </p>
            <p className="text-gray-800 font-semibold mt-4">- Amanda, Freelancer</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2025 Cheapest Postage App. All rights reserved.</p>
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