export const metadata = {
  title: appendWebsiteName("Dashboard"),
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import { appendWebsiteName } from "@/utils/config";
import InfoTestimonials from "@/components/Responses";
import Responses from "@/components/Responses";

export default function Home() {
  return (
    <>
      {/*<PageIllustration />
      <Hero />
      <Workflows />
      <Features />*/}
      <Responses/>
      {/*<Cta />*/}

    </>
  );
}
