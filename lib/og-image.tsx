import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

let ogImageBase64: string | null = null;

function getOgImageBase64(): string {
  if (ogImageBase64) return ogImageBase64;
  const filePath = join(process.cwd(), "public", "og-image.jpg");
  const buffer = readFileSync(filePath);
  ogImageBase64 = `data:image/jpeg;base64,${buffer.toString("base64")}`;
  return ogImageBase64;
}

export function generateOgImage({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}): ImageResponse {
  const imageData = getOgImageBase64();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${imageData})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              marginBottom: subtitle ? 24 : 0,
              textWrap: "balance",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: "rgba(255, 255, 255, 0.9)",
                lineHeight: 1.3,
                textWrap: "balance",
              }}
            >
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
