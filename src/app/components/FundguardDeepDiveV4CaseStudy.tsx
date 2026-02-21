import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardDeepDiveV4Content from '@/imports/CaseStudyFundguardDeepDiveV4Content';

interface FundguardDeepDiveV4CaseStudyProps {
  onBackToFundguard: () => void;
  onBack?: () => void;
}

export function FundguardDeepDiveV4CaseStudy({ onBackToFundguard, onBack }: FundguardDeepDiveV4CaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardDeepDiveV4Content onBackToFundguard={onBackToFundguard} />
    </CaseStudyLayout>
  );
}
