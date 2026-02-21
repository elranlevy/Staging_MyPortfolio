import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardDeepDiveV3Content from '@/imports/CaseStudyFundguardDeepDiveV3Content';

interface FundguardDeepDiveV3CaseStudyProps {
  onBackToFundguard: () => void;
  onBack?: () => void;
}

export function FundguardDeepDiveV3CaseStudy({ onBackToFundguard, onBack }: FundguardDeepDiveV3CaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardDeepDiveV3Content onBackToFundguard={onBackToFundguard} />
    </CaseStudyLayout>
  );
}
