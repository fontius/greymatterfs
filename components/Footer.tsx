import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-muted/50">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8">
                <Image
                  src="/grey-matter-fire-security-logo.png"
                  alt="Grey Matter Fire & Security Logo"
                  fill
                  sizes="32px"
                  className="object-contain"
                />
              </div>
              <span className="font-bold text-foreground">GREYMATTER</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fire & Security Solutions — Your Protection Matters. Over 35 years combined experience in the fire and security industry.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">Contact</h4>
            <div className="space-y-2">
              <a
                href="tel:02033057585"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Main: 0203 305 7585</span>
              </a>
              <a
                href="tel:07958361364"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                <span>Mobile: 07958 361 364</span>
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                <span>PO Box 560, Welwyn, Hertfordshire AL7 9ND</span>
              </div>
            </div>
          </div>

          {/* Emergency CTA */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground text-sm">24/7 Emergency</h4>
            <p className="text-sm text-muted-foreground">
              Fire and security emergencies dont wait. Our team is available around the clock.
            </p>
            <a
              href="tel:02033057585"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Call Now: 0203 305 7585
            </a>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Grey Matter Fire & Security Ltd. All rights reserved.
          </p>
          <p>
            Registered in England and Wales. Registered No: 05548267.
          </p>
        </div>
      </div>
    </footer>
  );
}