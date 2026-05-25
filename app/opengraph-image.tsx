import { generateOgImage } from "@/lib/og-image";

export const alt = "GREYMATTER — Fire & Security Solutions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "GREYMATTER",
    subtitle: "Fire & Security Solutions",
  });
}
