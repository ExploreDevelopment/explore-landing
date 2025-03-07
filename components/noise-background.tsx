export function NoiseBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-light"></div>
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-neon/10 to-transparent opacity-50"></div>
    </div>
  )
}

