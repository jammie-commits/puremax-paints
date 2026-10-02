"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/dealers", label: "Dealers" },
  { href: "/blog", label: "Paint guide" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="wordmark" href="/" aria-label="Puremax Paints home" onClick={() => setOpen(false)}>
          <Image className="wordmark-logo" src="/puremax-logo-transparent.png" alt="PPL Puremax Paints logo" width={84} height={48} priority />
          <span className="wordmark-copy">
            <span className="wordmark-name">PUREMAX<span>.</span></span>
            <span className="wordmark-caption">PAINTS INDUSTRIES LIMITED</span>
          </span>
        </Link>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
        <nav id="primary-navigation" className={`main-nav${open ? " is-open" : ""}`} aria-label="Main navigation">
          <Link className={pathname === "/" ? "nav-active" : ""} href="/" onClick={() => setOpen(false)}>Home</Link>
          {links.map((link) => (
            <Link
              className={pathname.startsWith(link.href) ? "nav-active" : ""}
              href={link.href}
              key={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link className="button button-gold nav-quote" href="/quote" onClick={() => setOpen(false)}>Get a quote</Link>
        </nav>
      </div>
    </header>
  );
}
