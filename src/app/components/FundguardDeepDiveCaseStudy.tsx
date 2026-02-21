import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardDeepDiveContent from '@/imports/CaseStudyFundguardDeepDiveContent';

interface FundguardDeepDiveCaseStudyProps {
  onBackToFundguard: () => void;
  onBack?: () => void;
}

export function FundguardDeepDiveCaseStudy({ onBackToFundguard, onBack }: FundguardDeepDiveCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardDeepDiveContent onBackToFundguard={onBackToFundguard} />
    </CaseStudyLayout>
  );
}
