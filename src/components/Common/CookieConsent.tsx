"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import {
  CookieConsent as ConsentType,
  getCookieConsent,
  setCookieConsent,
} from "@/lib/cookies";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if consent has been given already
    const consent = getCookieConsent();
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    setCookieConsent(ConsentType.ACCEPTED);
    setIsVisible(false);
  };

  const declineCookies = () => {
    setCookieConsent(ConsentType.DECLINED);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-50 p-5"
        >
          <div className="container mx-auto">
            <div className="relative bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Cookie icon */}
                  <div className="hidden md:flex items-center justify-center w-14 h-14 rounded-full bg-black/30 border border-white/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-[#fcc81a]"
                    >
                      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                      <path d="M8.5 8.5v.01" />
                      <path d="M16 15.5v.01" />
                      <path d="M12 12v.01" />
                      <path d="M11 17v.01" />
                      <path d="M7 14v.01" />
                    </svg>
                  </div>

                  <div className="space-y-4 flex-1">
                    <h3 className="text-xl font-medium text-white tracking-wide">
                      Cookie-Hinweis
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      Diese Website verwendet Cookies, um Ihr Nutzererlebnis zu
                      verbessern. Mit der Nutzung unserer Website erklären Sie
                      sich mit unserer{" "}
                      <Link
                        href="/datenschutz"
                        className="text-[#fcc81a] hover:underline font-medium transition-colors"
                      >
                        Datenschutzerklärung
                      </Link>{" "}
                      einverstanden.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={declineCookies}
                        className={cn(
                          "px-6 py-2.5 bg-transparent border border-white/20 text-white/80 rounded-md hover:bg-white/10",
                          "text-sm font-medium transition-all duration-200 w-full sm:w-auto cursor-pointer"
                        )}
                      >
                        Ablehnen
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={acceptCookies}
                        className={cn(
                          "px-6 py-2.5 bg-[#fcc81a] text-black rounded-md hover:bg-[#fcc81a]/90",
                          "text-sm font-medium transition-all duration-200 w-full sm:w-auto",
                          "relative group overflow-hidden cursor-pointer shadow-lg"
                        )}
                      >
                        <span className="relative z-10">Akzeptieren</span>
                        <span className="absolute inset-0 bg-white transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100 -z-0"></span>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
