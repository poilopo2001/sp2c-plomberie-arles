import { HeroSection } from '@/components/sections/HeroSection';
import { StatsBar } from '@/components/sections/StatsBar';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ProcessTimeline } from '@/components/sections/ProcessTimeline';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <ServicesGrid />
      <BeforeAfterSection />
      <ProcessTimeline />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </>
  );
}
