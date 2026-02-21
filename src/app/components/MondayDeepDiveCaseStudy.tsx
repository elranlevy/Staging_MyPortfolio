import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyMondayDeepDiveContent from '@/imports/CaseStudyMondayDeepDiveContent';

interface MondayDeepDiveCaseStudyProps {
  onBackToMonday: () => void;
  onBack?: () => void;
}

export function MondayDeepDiveCaseStudy({ onBackToMonday, onBack }: MondayDeepDiveCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyMondayDeepDiveContent onBackToMonday={onBackToMonday} />
    </CaseStudyLayout>
  );
}
