import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyXreamioContent from '@/imports/CaseStudyXreamioContent';

interface XtreamIOCaseStudyProps {
  onNextStudy: () => void;
  onBack?: () => void;
}

export function XtreamIOCaseStudy({ onNextStudy, onBack }: XtreamIOCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyXreamioContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
