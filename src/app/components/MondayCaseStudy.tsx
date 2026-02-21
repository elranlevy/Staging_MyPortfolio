import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyMondayContent from '@/imports/CaseStudyMondayContent';

interface MondayCaseStudyProps {
  onNextStudy: () => void;
  onLearnMore?: () => void;
  onBack?: () => void;
}

export function MondayCaseStudy({ onNextStudy, onLearnMore, onBack }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyMondayContent onNextStudy={onNextStudy} onLearnMore={onLearnMore} />
    </CaseStudyLayout>
  );
}
