import HeroSection from "@/components/HeroSection";
import { Metadata } from "next";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col items-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-primary/20 blur-[120px] rounded-full -z-10 " />
      <HeroSection />
    </div>
  );
}

export const metadata: Metadata = {
  title: "Waiting List...",
  description: "Lumina Neon launching soon!",
};
