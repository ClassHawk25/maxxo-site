import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { PlatformSection } from '@/components/PlatformSection';
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
        <ProblemSection />
        <SolutionSection />
        <PlatformSection />
        <FoundersSection />
        <DemoFormSection />
      </main>
      <Footer />
    </>
  );
}
