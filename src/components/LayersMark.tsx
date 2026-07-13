const LAYER_COLORS = [
  "#ff6b5e",
  "#ff8a3d",
  "#ffc23d",
  "#8ee08a",
  "#2dd4bf",
  "#4aa8ff",
  "#a78bfa",
];

export function LayersMark({ className }: { className?: string }) {
  const width = 320;
  const layerWidth = 220;
  const layerHeight = 46;
  const rise = 38;
  const startY = 30;

  const layers = LAYER_COLORS.map((color, i) => {
    const cx = width / 2;
    const cy = startY + i * rise;
    const points = [
      [cx, cy],
      [cx + layerWidth / 2, cy + layerHeight / 2],
      [cx, cy + layerHeight],
      [cx - layerWidth / 2, cy + layerHeight / 2],
    ]
      .map(([x, y]) => `${x},${y}`)
      .join(" ");
    return { color, points, i };
  });

  const height = startY + (LAYER_COLORS.length - 1) * rise + layerHeight + 20;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={className}
      aria-hidden="true"
    >
      <defs>
        {layers.map(({ color, i }) => (
          <linearGradient
            key={i}
            id={`layer-grad-${i}`}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
          >
            <stop offset="0%" stopColor={color} stopOpacity="0.85" />
            <stop offset="100%" stopColor={color} stopOpacity="0.35" />
          </linearGradient>
        ))}
      </defs>
      {layers.map(({ points, i }) => (
        <polygon
          key={i}
          points={points}
          fill={`url(#layer-grad-${i})`}
          stroke={LAYER_COLORS[i]}
          strokeOpacity="0.5"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
