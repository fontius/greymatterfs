import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Shield, Flame, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import EmergencyBanner from "@/components/EmergencyBanner";
import AccreditationStrip from "@/components/AccreditationStrip";
import StatCounter from "@/components/StatCounter";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 pt-24 pb-16">
        <div className="text-center max-w-4xl animate-fadeIn">
          {/* Logo */}
          <div className="mb-8 flex flex-col items-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src="/grey-matter-fire-security-logo.png"
                alt="Grey Matter Fire Security Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
              Fire & Security
              <span className="block text-accent">Solutions</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto">
              Over 35 years combined experience in fire detection and security systems.
              We design, install, and maintain life safety, security, and emergency systems nationwide.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white gap-2 font-semibold"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2">
                <Shield className="h-4 w-4" />
                Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <Badge variant="secondary" className="text-xs gap-1.5 py-1.5">
              <Flame className="h-3 w-3" /> BS 5839-1 Compliant
            </Badge>
            <Badge variant="secondary" className="text-xs gap-1.5 py-1.5">
              <Eye className="h-3 w-3" /> NSI Gold Approved
            </Badge>
            <Badge variant="secondary" className="text-xs gap-1.5 py-1.5">
              <Shield className="h-3 w-3" /> 24/7 Emergency Response
            </Badge>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Stats Section */}
      <section className="py-16 bg-muted/20">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCounter value={35} suffix="+" label="Years Experience" />
            <StatCounter value={1000} suffix="+" label="Projects Completed" />
            <StatCounter value={24} suffix="/7" label="Emergency Support" duration={1500} />
            <StatCounter value={100} suffix="%" label="Client Satisfaction" duration={1500} />
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Comprehensive Fire & Security Solutions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From fire detection to CCTV surveillance, we provide end-to-end protection for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Fire Safety */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Flame className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Fire Detection</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Point detection, air sampling, gas suppression, and wire-free systems compliant with BS 5839-1.
              </p>
              <Link href="/services#fire" className="text-sm font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Security */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Security Systems</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced access control, biometric solutions, and modern CCTV with remote monitoring.
              </p>
              <Link href="/services#security" className="text-sm font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1">
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Maintenance */}
            <div className="flex flex-col items-center text-center p-6 rounded-xl border border-border bg-card">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Maintenance & Support</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Ongoing maintenance contracts, 24/7 emergency call-out, and compliance audits to keep you protected.
              </p>
              <Link href="/contact" className="text-sm font-medium text-accent hover:text-accent/80 inline-flex items-center gap-1">
                Get support <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Strip */}
      <AccreditationStrip />

      {/* About CTA */}
      <section className="py-16">
        <div className="section-container">
          <div className="rounded-2xl bg-muted/30 border border-border p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Your Protection Matters
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Grey Matter Fire & Security Ltd. is a leading provider with directors respected across the industry.
                We handle every aspect of your project meticulously and professionally, from design through to maintenance.
              </p>
              <Link href="/about">
                <Button variant="outline" className="gap-2">
                  About Us
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            {/* Recraft AI Image Placeholder */}
            <div
              className="flex-1 w-full h-64 rounded-xl border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center gap-2"
              data-recraft-prompt="Professional fire and security team in front of commercial building, diverse team in work attire, photorealistic corporate style"
            >
              <Shield className="h-8 w-8 text-muted-foreground/30" />
              <span className="text-sm text-muted-foreground/50">Recraft AI Image</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-muted/20">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Protect Your Business?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Get in touch today for a free consultation and assessment of your fire and security needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:02033057585">
              <Button size="lg" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                0203 305 7585
              </Button>
            </a>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white gap-2"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}