import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.jpg"
                alt="Fast Forward Sport Logo"
                width={180}
                height={60}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-zinc-400 mb-4 max-w-md">
              Professional motorsport engineering and racing support services.
              Delivering excellence in rally, circuit racing, and technical
              solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-zinc-400 hover:text-accent-yellow transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-400 hover:text-accent-yellow transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-zinc-400 hover:text-accent-yellow transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/facilities"
                  className="text-zinc-400 hover:text-accent-yellow transition-colors"
                >
                  Facilities
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-zinc-400">
              <li>Email: fastforwardsport@outlook.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>
                <Link
                  href="/contact"
                  className="text-accent-yellow hover:text-accent-lime transition-colors"
                >
                  Contact Form →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Fast Forward Sport. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-zinc-500 hover:text-accent-yellow transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-accent-yellow transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
