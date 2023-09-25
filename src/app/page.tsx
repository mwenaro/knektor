import {
  AuthNav,
  BannerImage,
  Blog,
  Contact,
  Faq,
  FeatureSection,
  IndividualFeatures,
  StandoutFeatures,
  Team,
  Typography,
  VendorHeader,
} from "@/components";
import TestimonialSection from "@/components/templates/home/testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" flex flex-col w-full">
      <VendorHeader logoImageSrc={"/vendors/vendor/logo.png"}>
        <AuthNav />
      </VendorHeader>
      <p className="mt-20"></p>
      <BannerImage imageSrc="/assets/hero_banner.jpg" className="h-[400px] ">
        <div className="w-full h-full flex flex-col justify-center items-center">
          <Typography variant="h1" className="max-w-[800px] text-center">
            Dependable Personalized Support, at your finger tips!
          </Typography>
          <Typography variant="p">
            Book a proffesional tasker from Knektor today!
          </Typography>
          <div className="w-full flex flex-row space-x-4  my-5 justify-center items-center">
            {/* primary button */}
            <Link href="/auth/signup">
              <button className="w-fit px-6 py-3  rounded-xl bg-product-blue  hover:bg-black text-white  mb-1 text-lg md:text-xl font-semi">
                Get Started for Free
              </button>
            </Link>

            {/* secondary button */}
            <Link href="/auth/login">
              <button className="w-fit px-10 py-3  rounded-xl  text-[#000]   text-lg font-semibold hover:text-white hover:bg-slate-800">
                Login
              </button>
            </Link>
          </div>
        </div>
      </BannerImage>
      <FeatureSection />
      <StandoutFeatures />
      <IndividualFeatures />
      <TestimonialSection />
      <Blog />
      <Faq />
      <Team />
      <Contact />
    </div>
  );
}
