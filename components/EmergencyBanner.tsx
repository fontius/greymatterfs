import { Phone, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EmergencyBanner() {
  return (
    <div className="w-full bg-accent text-accent-foreground py-4">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <ShieldAlert className="h-6 w-6 shrink-0" />
          <div>
            <p className="font-semibold text-sm sm:text-base">
              24/7 Emergency Fire & Security Response
            </p>
            <p className="text-xs sm:text-sm opacity-90">
              Immediate assistance when you need it most
            </p>
          </div>
        </div>
        <a href="tel:02033057585">
          <Button
            variant="secondary"
            size="lg"
            className="bg-white text-accent hover:bg-white/90 font-bold gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now: 0203 305 7585
          </Button>
        </a>
      </div>
    </div>
  );
}