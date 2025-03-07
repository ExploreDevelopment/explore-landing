import Image from "next/image"

export function DecorativeElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right star */}
      <div className="absolute top-0 right-0 w-64 h-64 rotate-45 opacity-50">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3.png-CH9K2jSnCaHfn1lgDphYyeUrWnmeEE.jpeg"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
        />
      </div>

      {/* Bottom left triangles */}
      <div className="absolute bottom-0 left-0 w-80 h-80 rotate-12 opacity-40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.png-36iHDF829YPhzi3uYm7LuLNmUgOv5j.jpeg"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
        />
      </div>

      {/* Middle right starburst */}
      <div className="absolute top-1/2 right-0 w-64 h-64 -rotate-12 opacity-30">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.png-pjxO93QLG4B18eVoflAf70FVjTeQjN.jpeg"
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
        />
      </div>

      {/* Bottom right pyramid */}
      <div className="absolute bottom-10 right-10 w-40 h-40 rotate-45 opacity-40">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6.png-hxdY0XPfq3QcA0Auv7UtjundTxRueH.jpeg"
          alt=""
          width={200}
          height={200}
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
        />
      </div>
    </div>
  )
}

