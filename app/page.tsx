import Nav from "@/components/static/Nav";
import Hero from "@/components/static/Hero";
import TrustedBy from "@/components/static/TrustedBy";
import Stats from "@/components/static/Stats";
import WhyConnect from "@/components/static/WhyConnect";
import Speakers from "@/components/static/Speakers";
import Agenda from "@/components/static/Agenda";
import Testimonials from "@/components/static/Testimonials";
import Pricing from "@/components/static/Pricing";
import FinalCTA from "@/components/static/FinalCTA";
import FAQ from "@/components/static/FAQ";
import Footer from "@/components/static/Footer";

export default function Page() {
  return (
    <main className="bg-inman-dark">
      <Nav />
      <Hero />
      <TrustedBy />
      <Stats />
      <WhyConnect />
      <Speakers />
      <Agenda />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <FAQ />
      <Footer />
    </main>
  );
}
