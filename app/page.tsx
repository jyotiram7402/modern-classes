import { Loader } from "@/components/Loader";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Courses } from "@/components/Courses";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Results } from "@/components/Results";
import { Faculty } from "@/components/Faculty";
import { Facilities } from "@/components/Facilities";
import { Timeline } from "@/components/Timeline";
import { Testimonials } from "@/components/Testimonials";
import { Gallery } from "@/components/Gallery";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

export default function HomePage() {
  return (
    <>
      <Loader />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <WhyChooseUs />
        <Results />
        <Faculty />
        <Facilities />
        <Timeline />
        <Testimonials />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
