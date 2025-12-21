// ============ //
// Landing Page //
// ============ //

import Image from "next/image";

export default function Home() 
{
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-8xl font-[family-name:var(--font-super-mario)] text-gray-400">
          MarioGPT
        </h1>
      </div>
      
      {/* Bottom Section with Background */}
      <div className="relative h-56">
        {/* Background Gradient Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/bg-wiigradient.png"
            alt="Wii gradient background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        {/* Bottom Buttons Section */}
        <div className="relative pb-16 px-20 flex justify-center gap-8 items-center h-full">
          {/* Wii Menu Button */}
          <button className="w-96 py-8 rounded-full bg-gradient-to-b from-white to-gray-100 border-4 border-cyan-400 shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <span className="text-gray-700 text-4xl font-semibold tracking-wide">Chat</span>
          </button>
          
          {/* Start Button */}
          <button className="w-96 py-8 rounded-full bg-gradient-to-b from-white to-gray-100 border-4 border-cyan-400 shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
            <span className="text-gray-700 text-4xl font-semibold tracking-wide">Sign-Up</span>
          </button>
        </div>
      </div>
    </div>
  );
}
