import { cn } from "@/lib/cn";

export type EnrollmentSealProps = {
  monogram?: string;
  label?: string;
  className?: string;
  size?: number;
};

/**
 * 인라인 SVG 왁스 씰 — 원형 버건디 배경 + 골드 별 장식 + 중앙 모노그램.
 * 히어로 섹션의 '입학 허가' 도장 역할.
 */
export function EnrollmentSeal({
  monogram = "챗",
  label = "CHATSAPIENS · ENROLLMENT",
  className,
  size = 160,
}: EnrollmentSealProps) {
  const id = "enrollment-seal";

  return (
    <svg
      role="img"
      aria-label="챗사피엔스 입학 허가 씰"
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={cn("drop-shadow-[0_8px_24px_rgba(74,0,1,0.55)]", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id={`${id}-wax`} cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#b01c1e" />
          <stop offset="55%" stopColor="#7e0101" />
          <stop offset="100%" stopColor="#4a0001" />
        </radialGradient>
        <linearGradient id={`${id}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f4e7ab" />
          <stop offset="55%" stopColor="#d3a625" />
          <stop offset="100%" stopColor="#a07818" />
        </linearGradient>
        <path
          id={`${id}-circle`}
          d="M 100,100 m -72,0 a 72,72 0 1,1 144,0 a 72,72 0 1,1 -144,0"
        />
      </defs>

      {/* Wax body with subtle scalloped edge */}
      <circle cx="100" cy="100" r="92" fill={`url(#${id}-wax)`} />
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="#3a0001"
        strokeWidth="1.5"
        opacity="0.6"
      />

      {/* Gold inner ring */}
      <circle
        cx="100"
        cy="100"
        r="80"
        fill="none"
        stroke={`url(#${id}-gold)`}
        strokeWidth="2"
      />
      <circle
        cx="100"
        cy="100"
        r="74"
        fill="none"
        stroke="#d3a625"
        strokeWidth="0.75"
        opacity="0.65"
      />

      {/* Decorative stars — 4방향 */}
      {[
        { cx: 100, cy: 24 },
        { cx: 176, cy: 100 },
        { cx: 100, cy: 176 },
        { cx: 24, cy: 100 },
      ].map((p, i) => (
        <Star key={i} cx={p.cx} cy={p.cy} fill={`url(#${id}-gold)`} size={6} />
      ))}

      {/* Small accent dots — 4 대각선 */}
      {[
        { cx: 148, cy: 52 },
        { cx: 148, cy: 148 },
        { cx: 52, cy: 148 },
        { cx: 52, cy: 52 },
      ].map((p, i) => (
        <circle
          key={`dot-${i}`}
          cx={p.cx}
          cy={p.cy}
          r={2.5}
          fill="#d3a625"
          opacity={0.85}
        />
      ))}

      {/* Curved label around the inner ring */}
      <text
        fill="#d3a625"
        fontFamily="var(--font-display), 'Cinzel', serif"
        fontSize="10"
        letterSpacing="4"
        fontWeight="600"
      >
        <textPath href={`#${id}-circle`} startOffset="5%">
          {label}
        </textPath>
      </text>

      {/* Monogram */}
      <text
        x="100"
        y="116"
        textAnchor="middle"
        fill={`url(#${id}-gold)`}
        fontFamily="var(--font-display), 'Cinzel', serif"
        fontSize="54"
        fontWeight="700"
        letterSpacing="-2"
      >
        {monogram}
      </text>

      {/* Underline flourish */}
      <path
        d="M 72 130 Q 100 138 128 130"
        stroke="#d3a625"
        strokeWidth="1.25"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
}

function Star({
  cx,
  cy,
  size,
  fill,
}: {
  cx: number;
  cy: number;
  size: number;
  fill: string;
}) {
  const points: string[] = [];
  for (let i = 0; i < 10; i += 1) {
    const r = i % 2 === 0 ? size : size / 2.3;
    const a = (Math.PI / 5) * i - Math.PI / 2;
    points.push(`${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`);
  }
  return <polygon points={points.join(" ")} fill={fill} />;
}
