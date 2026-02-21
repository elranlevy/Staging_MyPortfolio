import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardDeepDiveV2Content from '@/imports/CaseStudyFundguardDeepDiveV2Content';

interface FundguardDeepDiveV2CaseStudyProps {
  onBackToFundguard: () => void;
  onBack?: () => void;
}

export function FundguardDeepDiveV2CaseStudy({ onBackToFundguard, onBack }: FundguardDeepDiveV2CaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardDeepDiveV2Content onBackToFundguard={onBackToFundguard} />
    </CaseStudyLayout>
  );
}
