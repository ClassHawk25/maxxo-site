import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { StorySection } from '@/components/StorySection';
import { LimitsSection } from '@/components/LimitsSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { HowItWorksSection } from '@/components/HowItWorksSection';
import { FoundersSection } from '@/components/FoundersSection';
import { DemoFormSection } from '@/components/DemoFormSection';
import { Footer } from '@/components/Footer';

// ============================================================================
// LANDING PAGE
// ============================================================================

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <StorySection />
        <LimitsSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <FoundersSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
