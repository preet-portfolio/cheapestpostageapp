export default function Footer() {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Top Section */}
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6 lg:gap-0">
            {/* Company Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-xl font-bold text-white mb-2">Cheapest Postage Company</h2>
              <p className="text-sm text-gray-400">
                Delivering the best postage solutions globally at the most affordable rates.
              </p>
            </div>
  
            {/* Quick Links */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
              <ul className="space-y-2 lg:space-y-0 lg:space-x-6">
                <li>
                  <a href="/" className="hover:text-white transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-white transition">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898v-2.89h2.54V9.397c0-2.506 1.492-3.89 3.775-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.261c-1.242 0-1.628.772-1.628 1.562v1.875h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.496 0-.174-.004-.349-.012-.523A8.348 8.348 0 0022 5.92a8.192 8.192 0 01-2.357.635 4.115 4.115 0 001.804-2.27 8.223 8.223 0 01-2.605.975 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.003 4.003 0 001.27 5.482A4.093 4.093 0 012.8 9.71v.05a4.107 4.107 0 003.292 4.022 4.093 4.093 0 01-1.853.07 4.108 4.108 0 003.835 2.84 8.233 8.233 0 01-5.096 1.745A8.3 8.3 0 012 19.129 11.616 11.616 0 008.29 20.25z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <svg
                  className="w-6 h-6 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.998 3A2.005 2.005 0 0122 5.006v13.988A2.005 2.005 0 0119.998 21H4.002A2.005 2.005 0 012 18.994V5.006A2.005 2.005 0 014.002 3h15.996zM6.837 9.172H4.644V18h2.193V9.172zm-.084-3.43c-.781 0-1.303.513-1.303 1.187 0 .66.506 1.187 1.26 1.187h.015c.797 0 1.303-.527 1.303-1.187-.015-.674-.506-1.187-1.275-1.187zm4.184 3.43H8.857v8.828h2.08V12.77c0-1.312.486-2.207 1.698-2.207 1.211 0 1.77.832 1.77 2.305v5.13h2.08v-5.498c0-2.637-1.41-3.866-3.293-3.866-1.506 0-2.184.822-2.563 1.394v.012h-.014l.014-.012v-.012z" />
                </svg>
              </a>
            </div>
          </div>
  
          {/* Bottom Section */}
          <div className="mt-8 text-center border-t border-gray-700 pt-4">
            <p>&copy; {new Date().getFullYear()} Cheapest Postage Company. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              Designed and built with ❤️ by the Cheapest Postage team.
            </p>
          </div>
        </div>
      </footer>
    );
  }