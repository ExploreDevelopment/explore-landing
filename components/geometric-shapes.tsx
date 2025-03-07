export function GeometricShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Large circle */}
      <div
        className="circle-glow absolute w-[500px] h-[500px] -top-[250px] -right-[250px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(255, 44, 205, 0.4) 0%, rgba(255, 255, 255, 0) 70%)",
        }}
      ></div>

      {/* Small floating circles */}
      <div className="absolute top-[20%] left-[10%] w-[100px] h-[100px] circle-glow floating"></div>
      <div
        className="absolute top-[60%] right-[15%] w-[150px] h-[150px] circle-glow floating"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-[10%] left-[20%] w-[120px] h-[120px] circle-glow floating"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30"></div>

      {/* Hexagon grid */}
      <div className="hexagon-grid"></div>

      {/* Diagonal lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/30 to-transparent transform rotate-[30deg] origin-left"></div>
      <div className="absolute top-[30%] right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/20 to-transparent transform -rotate-[20deg] origin-right"></div>
      <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon/25 to-transparent transform rotate-[15deg] origin-left"></div>
    </div>
  )
}

