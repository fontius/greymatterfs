const accreditations = [
  { name: "BS 5839-1:2013", description: "Fire Detection & Alarm Systems" },
  { name: "NSI Gold", description: "National Security Inspectorate" },
  { name: "BAFE", description: "British Approvals for Fire Equipment" },
  { name: "FIA", description: "Fire Industry Association" },
  { name: "CHAS", description: "Contractors Health & Safety" },
  { name: "Constructionline", description: "Supply Chain Management" },
];

export default function AccreditationStrip() {
  return (
    <section className="w-full bg-muted/30 py-10 border-y border-border">
      <div className="section-container">
        <p className="text-center text-sm font-medium text-muted-foreground mb-6">
          Accreditations & Certifications
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {accreditations.map((acc) => (
            <div
              key={acc.name}
              className="flex flex-col items-center text-center gap-1"
              title={acc.description}
            >
              {/* Recraft AI logo placeholder */}
              <div
                className="h-14 w-28 rounded border-2 border-dashed border-border bg-muted flex items-center justify-center"
                data-recraft-prompt={`Professional accreditation badge/logo for ${acc.name} - ${acc.description}, clean vector style, fire and security industry`}
              >
                <span className="text-[10px] text-muted-foreground/60 font-medium px-1 text-center leading-tight">
                  {acc.name}
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground/50 max-w-[7rem] leading-tight">
                {acc.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}