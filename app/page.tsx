import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { Problem } from "@/components/Problem";
import { HowItWorks } from "@/components/HowItWorks";
import { Features } from "@/components/Features";
import { Trust } from "@/components/Trust";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Impact />
        <Problem />
        <HowItWorks />
        <Features />
        <Trust />
        <WaitlistForm />
      </main>
      <Footer />
    </>
  );
}
