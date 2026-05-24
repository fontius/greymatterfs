import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Wind, Shield, Radio, Lock, Eye, type LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Wind,
  Shield,
  Radio,
  Lock,
  Eye,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  certs?: readonly string[];
  recraftPrompt?: string;
}

export default function ServiceCard({
  title,
  description,
  icon,
  certs,
  recraftPrompt,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border border-border/50">
      <CardHeader className="pb-3">
        {/* Recraft AI Image Placeholder */}
        <div
          className="w-full h-48 rounded-lg mb-4 bg-muted border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 overflow-hidden"
          data-recraft-prompt={
            recraftPrompt ??
            `Professional fire and security service illustration for ${title}, modern industrial setting, photorealistic style`
          }
        >
          <Icon className="h-10 w-10 text-muted-foreground/40" />
          <span className="text-xs text-muted-foreground/60">Recraft AI Image</span>
        </div>

        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-bold leading-tight">
            {title}
          </CardTitle>
          <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-accent" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>

        {certs && certs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {certs.map((cert) => (
              <Badge key={cert} variant="outline" className="text-xs font-medium">
                {cert}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}