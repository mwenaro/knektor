import {
  Blog,
  Contact,
  Faq,
  FeatureSection,
  IndividualFeatures,
  StandoutFeatures,
  Team,
} from "@/components";
import TestimonialSection from "@/components/templates/home/testimonials";

export default function Home() {
  <div className="container flex flex-col w-full">
    <FeatureSection />
    <StandoutFeatures />
    <IndividualFeatures />
    <TestimonialSection />
    <Blog />
    <Faq />
    <Team />
    <Contact />
  </div>;
}
