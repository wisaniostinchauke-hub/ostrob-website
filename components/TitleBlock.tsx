type TitleBlockProps = {
  sheet: string;
  rev: string;
  scale?: string;
  tone?: "light" | "dark";
  className?: string;
};

export default function TitleBlock({
  sheet,
  rev,
  scale = "NTS",
  tone = "light",
  className = "",
}: TitleBlockProps) {
  const border = tone === "dark" ? "border-white/25" : "border-[var(--ink)]/20";
  const text = tone === "dark" ? "text-white/70" : "text-[var(--ink)]/70";
  const strong = tone === "dark" ? "text-white" : "text-[var(--ink)]";

  return (
    <div
      className={`mono-label inline-grid grid-cols-3 border ${border} text-[10px] leading-none ${className}`}
    >
      <div className={`border-r ${border} px-3 py-2 ${text}`}>
        SHEET
        <div className={`mt-1 ${strong}`}>{sheet}</div>
      </div>
      <div className={`border-r ${border} px-3 py-2 ${text}`}>
        REV
        <div className={`mt-1 ${strong}`}>{rev}</div>
      </div>
      <div className={`px-3 py-2 ${text}`}>
        SCALE
        <div className={`mt-1 ${strong}`}>{scale}</div>
      </div>
    </div>
  );
}
