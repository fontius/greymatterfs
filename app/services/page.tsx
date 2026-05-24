import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Flame, Lock } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import EmergencyBanner from "@/components/EmergencyBanner";
import { serviceItems } from "@/lib/data";

export const metadata: Metadata = {
  title: "Services | GREYMATTER",
  description:
    "Fire detection systems, security solutions, CCTV, access control, and maintenance services from Grey Matter Fire & Security Ltd.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Comprehensive fire detection and security solutions designed, installed, and maintained to the highest standards."
        recraftPrompt="Dual-panel hero illustration showing fire detection systems on one side and security/CCTV systems on the other, modern split composition, photorealistic industrial style for a fire and security company"
      />

      {/* Fire Detection Section */}
      <section id="fire" className="py-16 scroll-mt-20">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Flame className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Fire Detection Systems
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            The effects of a fire can be devastating. A reliable and effective fire
            detection and alarm system, compliant with BS 5839-1:2013, is absolutely
            essential. We provide quality, cost-effective solutions matching your
            unique fire risk and environmental conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceItems.fire.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                certs={item.certs}
              />
            ))}
          </div>
        </div>
      </section>

      <Separator className="section-container" />

      {/* Security Section */}
      <section id="security" className="py-16 scroll-mt-20">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Lock className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Security Systems
            </h2>
          </div>
          <p className="text-muted-foreground mb-10 max-w-3xl">
            Because what matters to you, matters to us. We design, install, and
            maintain quality security systems that minimize risks like theft and
            trespassing, creating a safer environment. Our independent status allows
            us to tailor solutions to your specific needs and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {serviceItems.security.map((item) => (
              <ServiceCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                certs={item.certs}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <EmergencyBanner />

      {/* Maintenance Section */}
      <section className="py-16 bg-muted/20">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
              <Shield className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Maintenance & Support
            </h2>
          </div>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            We offer comprehensive maintenance contracts to ensure your fire and
            security systems remain fully operational and compliant. Our team provides
            24/7 emergency call-out support nationwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-lg mb-2">Scheduled Maintenance</h3>
              <p className="text-sm text-muted-foreground">
                Regular inspections and servicing to BS 5839-1 standards, keeping
                your systems fully compliant.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-lg mb-2">24/7 Emergency Call-Out</h3>
              <p className="text-sm text-muted-foreground">
                Rapid response when you need it most. Our engineers are on standby
                around the clock.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card">
              <h3 className="font-bold text-lg mb-2">Compliance Audits</h3>
              <p className="text-sm text-muted-foreground">
                Full system audits and documentation to demonstrate regulatory
                compliance for insurance and legal requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Our experts can assess your premises and recommend the right fire and
            security solutions for your specific requirements and budget.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white gap-2 font-semibold"
            >
              Request a Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}