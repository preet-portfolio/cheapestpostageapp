'use client';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="flex flex-col items-center text-center gap-6 py-12 sm:py-20 px-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold">
          Affordable Shipping Made Simple
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
          Compare rates, print labels, and ship smarter with our easy-to-use platform designed for individuals and businesses alike.
        </p>
        <div className="flex gap-4 mt-6">
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
      </header>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-20 bg-white text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          Why Choose Our App?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { title: "Compare Rates", description: "Quickly find the cheapest shipping rates across trusted carriers." },
            { title: "Print Labels", description: "Purchase and print shipping labels directly from the app." },
            { title: "Drop Locations", description: "Find the nearest drop-off points for your packages with ease." },
            
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
      <section className="py-12 sm:py-20 bg-gray-50 text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Sign Up", description: "Create your account in minutes to get started." },
            { step: "2", title: "Compare & Select", description: "Enter shipment details to find the best shipping rates." },
            { step: "3", title: "Print & Ship", description: "Purchase your label, print it, and drop off your package." }
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

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20 bg-white text-center px-8 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            { text: "“This app saved me so much time and money!”", name: "Sarah, Etsy Seller" },
            { text: "“The easiest shipping platform I’ve ever used.”", name: "Mike, Small Business Owner" },
            { text: "“I love how user-friendly this app is. Highly recommend!”", name: "Amanda, Freelancer" }
          ].map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <p className="text-gray-600 italic">{testimonial.text}</p>
              <p className="text-gray-800 font-semibold mt-4">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}