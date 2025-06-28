import Hero from "@/components/Home/Hero";
import AboutUs from "@/components/Home/AboutUs";
import Services from "@/components/Home/Services";
import HomeMenu from "@/components/Home/HomeMenu";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <HomeMenu />
      <Testimonials />
      <AboutUs />
    </main>
  );
}
