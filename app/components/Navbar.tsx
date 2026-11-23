"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon, MenuIcon } from "./Icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open ? "border-b border-night-line bg-night" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="page flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[15px] font-semibold tracking-tight text-paper">
          Richie Momodu
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-[15px] text-paper-muted transition-colors duration-150 hover:text-paper">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-solid min-h-[40px] px-5 text-sm">
              Get in touch
            </a>
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="press -mr-2 inline-flex h-12 w-12 items-center justify-center rounded-full text-paper md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="h-[calc(100dvh-4rem)] bg-night md:hidden"
      >
        <ul className="page flex flex-col gap-1 py-6">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className="block rounded-xl py-4 font-display text-2xl font-medium text-paper active:text-amber"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="mt-6">
            <a href="#contact" onClick={close} className="btn-solid w-full">
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
