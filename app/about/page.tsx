import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Users, Target, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PageHero from "@/components/PageHero";
import AccreditationStrip from "@/components/AccreditationStrip";

export const metadata: Metadata = {
  title: "About Us | GREYMATTER",
  description:
    "Grey Matter Fire & Security Ltd. — Over 35 years combined experience in fire detection and security solutions nationwide. Your Protection Matters.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Your Protection Matters — the ethos at the core of everything we do."
        recraftPrompt="Professional corporate team photo of a fire and security company, diverse team in professional attire standing in front of a modern commercial building with fire safety and security branding, photorealistic style"
      />

      {/* Company Story */}
      <section className="py-16">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Grey Matter Fire & Security Ltd., we are a leading
                  Fire Detection and Security Solutions provider with over 35 years
                  combined experience within the industry.
                </p>
                <p>
                  Our company ethos{" "}
                  <span className="font-semibold text-accent">
                    Your Protection Matters
                  </span>{" "}
                  stands at the core of everything we do. We take great pride that
                  every aspect of our service meets the highest mark and exceeds our
                  customers expectations. Thats why most of our clients
                  stay with us for years, confident of our service quality and
                  reassured by our diligence to their protection needs.
                </p>
                <p>
                  Grey Matters directors are respected fire and security industry
                  professionals who have worked on projects of every size, discipline
                  and timescale, from the smallest of extensions to major
                  construction projects. We design, supply, install and maintain Life
                  Safety, Security and Emergency Systems nationwide.
                </p>
                <p className="font-medium text-foreground">
                  We have specialist knowledge of the legislations and standards for
                  all of the systems we support and will handle every aspect of your
                  project meticulously and professionally.
                </p>
              </div>
            </div>

            {/* Recraft AI Image Placeholder */}
            <div
              className="w-full h-80 lg:h-96 rounded-xl border-2 border-dashed border-border bg-muted flex flex-col items-center justify-center gap-2"
              data-recraft-prompt="Grey Matter Fire & Security company team photo, professional group shot in front of a fire engine or commercial building, corporate style, photorealistic"
            >
              <Users className="h-10 w-10 text-muted-foreground/30" />
              <span className="text-sm text-muted-foreground/50">
                Recraft AI Team Image
              </span>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Protection First</h3>
              <p className="text-sm text-muted-foreground">
                Every decision we make is driven by our commitment to protect your
                people, property, and assets to the highest possible standard.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Precision & Expertise</h3>
              <p className="text-sm text-muted-foreground">
                With specialist knowledge of legislation and standards, we deliver
                meticulous, compliant solutions tailored to your exact requirements.
              </p>
            </div>

            <div className="flex flex-col items-center text-center p-6">
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                <Award className="h-7 w-7 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Trusted Partnership</h3>
              <p className="text-sm text-muted-foreground">
                Most of our clients stay with us for years, confident in our
                service quality and reassured by our diligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <AccreditationStrip />

      {/* CTA */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Lets Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Whether you need a new fire detection system, security upgrade, or
            ongoing maintenance, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[var(--fire-red)] hover:bg-[var(--fire-red)]/90 text-white gap-2 font-semibold"
              >
                Get in Touch
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="gap-2">
                <Shield className="h-4 w-4" />
                View Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}