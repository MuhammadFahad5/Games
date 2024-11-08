import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="min-h-screen flex flex-col justify-end items-end"
    >
      <div
        className="w-full  p-5 mb-8"
        style={{ position: "absolute", top: "90%" }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="text-center">
            <Link href={"/chess"}>
            <button className="border border-white text-white text-[16px] leading-4 hover:bg-[#05165E] hover:text-white p-4">
              View Games
            </button>
            </Link>
          </div>
          <div className="text-center">
          
            <button className="border border-white text-white text-[16px] leading-4 hover:bg-[#05165E] hover:text-white p-4">
              View Games
            </button>
           
          </div>
          <div className="text-center">
            <Link href={"/tekken"}>
            <button className="border border-white text-white text-[16px] leading-4 hover:bg-[#05165E] hover:text-white p-4">
              View Games
            </button>
            </Link>
          </div>
          <div className="text-center">
          <Link href={"/ludo-tournament"}>
            <button className="border border-white text-white text-[16px] leading-4 hover:bg-[#05165E] hover:text-white p-4">
              View Games
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
