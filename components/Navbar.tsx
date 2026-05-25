"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { Menu, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between section-container">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="Grey Matter Fire & Security - Home">
          <div className="relative h-10 w-10">
            <Image
              src="/grey-matter-fire-security-logo.png"
              alt="Grey Matter Fire & Security Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span className="hidden font-bold text-foreground text-lg sm:inline-block">
            GREYMATTER
          </span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-transparent",
                    isActive(link.href) &&
                      "bg-accent text-accent-foreground"
                  )}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:02033057585" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Phone className="h-4 w-4 text-accent" />
            <span>24/7 Emergency</span>
          </a>
          <Link href="/contact">
            <Button className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white" size="sm">
              Get a Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-lg size-8 hover:bg-muted" aria-label="Open navigation menu">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="flex flex-col pt-10">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">
              Site navigation links for Grey Matter Fire & Security
            </SheetDescription>
            
            {/* Mobile Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 mb-6"
              onClick={() => setMobileOpen(false)}
            >
              <div className="relative h-8 w-8">
                <Image
                  src="/grey-matter-fire-security-logo.png"
                  alt="Grey Matter Fire & Security Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-foreground text-lg">
                GREYMATTER
              </span>
            </Link>

            <Separator className="mb-4" />

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              <AnimatePresence>
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center px-4 py-3 text-base font-medium rounded-lg transition-colors",
                        "hover:bg-muted hover:text-foreground",
                        isActive(link.href)
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </nav>

            <Separator className="mt-4 mb-4" />

            {/* Mobile Contact */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:02033057585"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2"
              >
                <Phone className="h-4 w-4 text-accent" />
                <span>24/7: 0203 305 7585</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mx-4"
              >
                <Button className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white w-full">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}