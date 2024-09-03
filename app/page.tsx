import About from "@/components/About";
import { AuroraBackgroundDemo } from "@/components/Aurora";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import { ExpandableCardDemo } from "@/components/ProjectCards";

export default function Home() {
  return (
    <main className="">
      <section className="" id="services">
        <AuroraBackgroundDemo />
      </section>
      <section className="bg-[var(--primary)] p-4" id="about">
        <h1 className="py-4 lg:text-4xl text-3xl text-center font-bold text-[var(--secondary)]">
          Projects
        </h1>
        <ExpandableCardDemo />
      </section>

      <section className="bg-blue-500 " id="contact">
        <BackgroundBoxesDemo />
      </section>
    </main>
  );
}
