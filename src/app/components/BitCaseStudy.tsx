import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBitContent from '@/imports/CaseStudyBitContent';

interface BitCaseStudyProps {
  onNextStudy: () => void;
  onBack?: () => void;
}

export function BitCaseStudy({ onNextStudy, onBack }: BitCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyBitContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
