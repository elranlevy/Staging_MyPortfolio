import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyBluevineContent from '@/imports/CaseStudyBluevineContent';

interface BluevineCaseStudyProps {
  onNextStudy: () => void;
  onBack?: () => void;
}

export function BluevineCaseStudy({ onNextStudy, onBack }: BluevineCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyBluevineContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
