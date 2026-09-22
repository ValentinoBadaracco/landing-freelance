import Image from "next/image";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import WhyMe from "@/components/WhyMe";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-cream font-sans dark:bg-black">
      <Hero />
      <main className="flex flex-1 w-full flex-col items-center justify-center bg-cream dark:bg-black sm:items-start">
        <ProblemSection />
        <ServicesSection />
        <WhyMe />
        <Projects />
        <AboutMe />
      </main>
      <Contact />
    </div>
  );
}
