import { MobileNavToggleBtn } from "./partials";
import {
  AboutSection,
  FactsSection,
  FooterSection,
  Header,
  HeroSection,
  PortfolioSection,
  ResumeSection,
  ServiceSection,
  SkillSection,
  TestimonialSection,
} from "./components";

function App() {
  return (
    <>
      {/* ======= Mobile nav toggle button ======= */}
      <MobileNavToggleBtn />
      {/* ======= Header ======= */}
      <Header />

      {/* ======= Hero Section ======= */}
      <HeroSection />
      <main id="main">
        {/* About Section */}
        <AboutSection />
        {/* ======= Facts Section ======= */}
        <FactsSection />

        {/* ======= Skills Section ======= */}
        <SkillSection />

        {/*  ======= Resume Section ======= */}
        <ResumeSection />

        {/* ======= Portfolio Section ======= */}
        <PortfolioSection />

        {/* ======= Services Section ======= */}
        <ServiceSection />

        {/* ======= Testimonials Section ======= */}
        <TestimonialSection />

        {/* Footer Section */}
        <FooterSection />
      </main>
    </>
  );
}

export default App;
