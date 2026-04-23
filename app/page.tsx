import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemEmpathySection } from "@/components/sections/ProblemEmpathySection";
import { SolutionProposalSection } from "@/components/sections/SolutionProposalSection";
import { CoreValuesSection } from "@/components/sections/CoreValuesSection";
import { DifferentiationSection } from "@/components/sections/DifferentiationSection";
import { OutcomeJourneySection } from "@/components/sections/OutcomeJourneySection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ProgramDetailsSection } from "@/components/sections/ProgramDetailsSection";
import { BrandPhilosophySection } from "@/components/sections/BrandPhilosophySection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main id="main-content">
      <HeroSection />
      <ProblemEmpathySection />
      <SolutionProposalSection />
      <CoreValuesSection />
      <DifferentiationSection />
      <OutcomeJourneySection />
      <TargetAudienceSection />
      <ProgramDetailsSection />
      <FaqSection />
      <BrandPhilosophySection />
      <FinalCtaSection />
      <FooterSection />
    </main>
  );
}
