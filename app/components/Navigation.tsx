"use client";

import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/services", label: t("services") },
    { href: "/projects", label: t("projects") },
    { href: "/facilities", label: t("facilities") },
    { href: "/contact", label: t("contact") },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "th", name: "ไทย", flag: "🇹🇭" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const isActivePath = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsLangOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              src="/logo.jpg"
              alt="Fast Forward Sport Logo"
              className="h-12 w-auto object-cover"
            />
            <div className="text-xl md:hidden lg:block md:text-2xl font-bold truncate">
              <span className="text-white">FAST Forward</span>
              <span className="text-accent-yellow ml-2">Sport</span>
            </div>
            <div className="hidden text-xl md:block lg:hidden md:text-2xl font-bold">
              <span className="text-white">FF</span>
              <span className="text-accent-yellow">S</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActivePath(link.href) ? "page" : undefined}
                className={`text-sm font-medium transition-colors duration-200 pb-1 ${
                  isActivePath(link.href)
                    ? "text-accent-yellow border-b border-accent-yellow"
                    : "text-zinc-300 hover:text-accent-yellow"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="hidden lg:block bg-accent-yellow text-black px-3 py-2.5 rounded-lg font-semibold text-sm hover:bg-accent-lime transition-colors duration-200 truncate"
            >
              {t("getInTouch")}
            </Link>

            {/* Language Switcher - Desktop */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="h-10 flex items-center space-x-2 text-sm font-medium text-zinc-300 hover:text-accent-yellow transition-colors duration-200 px-3 rounded-lg bg-zinc-900"
                aria-label="Toggle language"
              >
                <span className="hidden lg:block text-xl">
                  {currentLanguage?.flag}
                </span>
                <span>{currentLanguage?.code.toUpperCase()}</span>
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isLangOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Language Dropdown */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-lg shadow-lg py-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-zinc-800 transition-colors ${
                        locale === lang.code
                          ? "text-accent-yellow"
                          : "text-zinc-300"
                      }`}
                    >
                      <span className="text-xl">{lang.flag}</span>
                      <span>{lang.name}</span>
                      {locale === lang.code && (
                        <svg
                          className="w-4 h-4 ml-auto"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/98 border-t border-zinc-800">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActivePath(link.href) ? "page" : undefined}
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors duration-200 ${
                  isActivePath(link.href)
                    ? "bg-zinc-900 text-accent-yellow"
                    : "text-zinc-300 hover:text-accent-yellow hover:bg-zinc-900"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-accent-yellow text-black px-6 py-3 rounded-lg font-semibold text-center hover:bg-accent-lime transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {t("getInTouch")}
            </Link>

            {/* Language Switcher - Mobile */}
            <div className="mt-4 pt-4 border-t border-zinc-800">
              <div className="text-xs font-semibold text-zinc-500 px-3 mb-2">
                {tCommon("language")}
              </div>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      handleLanguageChange(lang.code);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-base transition-colors ${
                      locale === lang.code
                        ? "bg-zinc-900 text-accent-yellow"
                        : "text-zinc-300 hover:bg-zinc-900"
                    }`}
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {locale === lang.code && (
                      <svg
                        className="w-5 h-5 ml-auto"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
