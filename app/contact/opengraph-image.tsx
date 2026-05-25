import { generateOgImage } from "@/lib/og-image";

export const alt = "Contact Us | GREYMATTER";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return generateOgImage({
    title: "Contact Us",
    subtitle: "GREYMATTER — Fire & Security Solutions",
  });
}
