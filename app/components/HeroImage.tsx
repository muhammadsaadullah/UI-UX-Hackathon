import Image from 'next/image';

export default function HeroImage() {
  return (    
    <div>
      {/* Circular Layout Container */}
      <div className="relative w-[80vw] max-w-[730px] aspect-square">
         
        {/* Background Leaf (Responsive Sizing) */}
        <div className="absolute inset-0 translate-x-[65%] translate-y-[51%] w-[80%] h-[49%] ">
          <Image 
            src="/leaf.png"
            alt="Leaf Background"
            layout="fill"
            objectFit="cover"
            className="rotate-[95deg]"
          />
        </div>


        {/* Main Plate in the Center */}
        <div className="absolute inset-0 z-10 w-[100%] h-[100%] flex justify-center items-center  translate-x-[10%] translate-y-[-10%]">
          <Image
            src="/dish.png"
            alt="Main Plate"
            className="rounded-full "
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* White Circle Border (Visible Circle) */}
        <div className="absolute inset-0 flex justify-center items-center  ">
          <div className="w-[70%] h-[70%] rounded-full border-2 border-white"></div>
        </div>

        {/* Circular Icons (with decreasing sizes) */}
        <div className="absolute inset-0 flex justify-center items-center  ">
          {[
            { src: '/side1.png',      alt: 'Small Dish 1', h: 80, w: 76, offsetX: 0,      offsetY: 0,                                  x: -50, y: -50, layout: "fill"  },
            { src: '/side2.png',      alt: 'Small Dish 2', h: 60, w: 60, offsetX: 0,      offsetY: 2.5,   width: 60,    height: 60, x: -50, y: -50, layout: "intrinsic"  },
            { src: '/side3.png',      alt: 'Small Dish 3', h: 45, w: 45, offsetX: 1,      offsetY: 2,     width: 80,    height: 80, x: -50, y: -50, layout: "intrinsic"  },
            { src: '/leavesside.png', alt: 'Small Dish 4', h: 35, w: 25, offsetX: -0.5,    offsetY: -3,  width: 80,    height: 80, x: -50, y: -50, layout: "intrinsic"  },
          ].map((icon, index) => {
            const totalIcons = 13; // Total number of icons
            const angle = (360 / totalIcons) * -index - 140; // Starts at the 12 o'clock position

            const radius = 35; // Adjust this value to fit your design

            // Use percentages directly in CSS for positioning
            const x = Math.cos((angle * Math.PI) / 180) * radius + icon.offsetX;;
            const y = Math.sin((angle * Math.PI) / 180) * radius + icon.offsetY;

            const w = icon.w
            const h = icon.h
            const width = icon.width 
            const height = icon.height 
            const transX = icon.x
            const transY = icon.y
            

            return (
              <div
                key={index}
                className="absolute flex justify-center items-center overflow-hidden"
                style={{
                  top: `calc(50% + ${y}%)`, // Position vertically
                  left: `calc(50% + ${x}%)`, // Position horizontally
                  overflow: 'hidden', // This will crop all images
                  transform: `translate( ${transX}%, ${transY}%)`, // Center the icon
                  width: `${w}px`, // Icon size
                  height: `${h}px`, // Icon size
                }}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  layout={icon.layout}
                  width={width}
                  height={height}
                  objectFit="cover" 
                  objectPosition="left" 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
