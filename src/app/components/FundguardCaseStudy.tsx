import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardContent from '@/imports/CaseStudyFundguardContent';

interface FundguardCaseStudyProps {
  onNextStudy: () => void;
  onBack?: () => void;
}

export function FundguardCaseStudy({ onNextStudy, onBack }: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardContent onNextStudy={onNextStudy} />
    </CaseStudyLayout>
  );
}
