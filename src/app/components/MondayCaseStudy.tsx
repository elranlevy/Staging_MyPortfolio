import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyMondayContent from '@/imports/CaseStudyMondayContent';

interface MondayCaseStudyProps {
  onNextStudy: () => void;
  onBack?: () => void;
}

export function MondayCaseStudy({ onNextStudy, onBack }: MondayCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyMondayContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
