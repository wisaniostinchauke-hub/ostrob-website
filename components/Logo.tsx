import { site } from "@/lib/site";

type LogoProps = {
  /** Pixel size of the hexagon mark. */
  size?: number;
  /** Renders the wordmark alongside the mark. */
  showWordmark?: boolean;
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Hexagonal "OS" monogram — carried over from the Ostrob Technology Solutions
 * identity and redrawn here in the blueprint line style used across the site.
 */
export default function Logo({
  size = 28,
  showWordmark = true,
  tone = "light",
  className = "",
}: LogoProps) {
  const stroke = tone === "dark" ? "rgba(255,255,255,0.75)" : "var(--ink)";
  const text = tone === "dark" ? "text-white" : "text-[var(--ink)]";
  const sub = tone === "dark" ? "text-white/45" : "text-[var(--ink)]/50";

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        {/* Outer hexagon */}
        <path
          d="M16 1.6 L28.5 8.8 L28.5 23.2 L16 30.4 L3.5 23.2 L3.5 8.8 Z"
          stroke={stroke}
          strokeWidth="1.3"
          fill="none"
        />
        {/* Inner construction hexagon — blueprint reference geometry */}
        <path
          d="M16 6.4 L24.3 11.2 L24.3 20.8 L16 25.6 L7.7 20.8 L7.7 11.2 Z"
          stroke="var(--rust)"
          strokeWidth="0.9"
          strokeDasharray="2.5 2"
          fill="none"
          opacity="0.75"
        />
        {/* O */}
        <circle cx="13" cy="16" r="3.4" stroke="var(--rust)" strokeWidth="1.6" fill="none" />
        {/* S */}
        <path
          d="M21.6 13.1 C21.6 12.1 20.6 11.6 19.6 11.6 C18.5 11.6 17.7 12.3 17.7 13.2 C17.7 15.4 21.7 14.6 21.7 17.1 C21.7 18.2 20.7 19 19.5 19 C18.4 19 17.5 18.4 17.5 17.4"
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          transform="translate(0.6, 1.6)"
        />
      </svg>

      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className={`font-[family-name:var(--font-display)] text-base font-semibold tracking-tight ${text}`}
          >
            {site.wordmark}
          </span>
          <span className={`mono-label mt-1 text-[8px] tracking-[0.16em] ${sub}`}>
            {site.wordmarkSub}
          </span>
        </span>
      )}
    </span>
  );
}
