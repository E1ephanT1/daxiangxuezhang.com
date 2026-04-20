"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "首页", href: "/" },
  { label: "免费AI攻略", href: "/videos" },
  { label: "付费课程", href: "/courses" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gray-900 flex items-center justify-center text-white font-bold text-sm">
            象
          </div>
          <span className="text-gray-900 font-semibold text-lg tracking-tight">
            大象学长
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-50 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/courses"
            className="px-5 py-2 text-sm bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            报名课程
          </Link>
        </div>

        <button
          className="md:hidden text-gray-600"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 pb-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="block w-full py-3 text-gray-600 hover:text-gray-900 text-sm border-b border-gray-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
