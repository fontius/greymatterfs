import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import EmergencyBanner from "@/components/EmergencyBanner";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us | GREYMATTER",
  description:
    "Get in touch with Grey Matter Fire & Security Ltd. Request a free quote, 24/7 emergency support. Phone: 0203 305 7585.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="What matters to you, matters to us. Get in touch today."
        recraftPrompt="Professional contact page hero image for a fire and security company, modern office building with phone support center aesthetic, warm corporate lighting, photorealistic style"
      />

      <section className="py-16">
        <div className="section-container flex justify-center">
          <Contact />
        </div>
      </section>

      <EmergencyBanner />
    </>
  );
}