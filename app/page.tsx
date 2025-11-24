import Header from "@/components/header";
import Hero from "@/components/hero";
import HowItWorks from "@/components/howitswork";
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
    </div>
  );
}
