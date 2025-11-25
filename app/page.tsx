import Community from "@/components/community";
import FAQ from "@/components/faq";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howitswork";
import Partners from "@/components/partners";
import Resources from "@/components/resources";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <Testimonials />
      <Partners />
      <Resources />
      <Community />
      <FAQ />
    </div>
  );
}
