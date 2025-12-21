// ============ //
// Landing Page //
// ============ //

import Image from "next/image";

export default function Home() 
{
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-sky-300">
      <h1 className="text-6xl font-[family-name:var(--font-super-mario)] z-10 text-gray-900">
        MarioGPT
      </h1>
      
      {/* Background Hills - Left */}
      <div className="absolute bottom-0 left-0 w-1/3 h-56">
        <Image
          src="/assets/bg-hills.png"
          alt="Hills background"
          width={2000}
          height={400}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
      
      {/* Background Hills - Middle */}
      <div className="absolute bottom-0 left-1/3 w-1/3 h-56">
        <Image
          src="/assets/bg-hills.png"
          alt="Hills background"
          width={2000}
          height={400}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
      
      {/* Background Hills - Right */}
      <div className="absolute bottom-0 left-2/3 w-1/3 h-56">
        <Image
          src="/assets/bg-hills.png"
          alt="Hills background"
          width={2000}
          height={400}
          className="w-full h-full object-contain object-bottom"
        />
      </div>
    </div>
  );
}
