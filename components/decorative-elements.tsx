import Image from "next/image"
import Star1 from '@/public/star-1.png';
import Star2 from '@/public/star-2.png';
import Star3 from '@/public/star-3.png';
import Star4 from '@/public/star-4.png';
import { useIsMobile } from '@/hooks/use-mobile';

export function DecorativeElements() {
  const isMobile = useIsMobile()

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Top right star */}
      <div className="absolute top-0 right-0 w-64 h-64 rotate-45 opacity-50">
        <Image
          src={Star1}
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
          src={Star2}
          alt=""
          width={400}
          height={400}
          className="w-full h-full object-contain"
          style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
        />
      </div>

      {!isMobile && (
        <>
          {/* Middle right starburst */}
          <div className="absolute top-3/4 -right-20 w-64 h-64 -rotate-12 opacity-30">
            <Image
              src={Star3}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
            />
          </div>

          {/* Bottom right pyramid */}
          <div className="absolute top-10 left-40 w-40 h-40 rotate-45 opacity-40">
            <Image
              src={Star4}
              alt=""
              width={200}
              height={200}
              className="w-full h-full object-contain"
              style={{ filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))" }}
            />
          </div>
        </>
      )}
    </div>
  )
}

