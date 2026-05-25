import { generateOgImage } from "@/lib/og-image";

export const alt = "Our Services | GREYMATTER";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "Our Services",
    subtitle: "GREYMATTER — Fire & Security Solutions",
  });
}
