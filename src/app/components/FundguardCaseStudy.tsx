import { CaseStudyLayout } from '@/app/components/CaseStudyLayout';
import CaseStudyFundguardContent from '@/imports/CaseStudyFundguardContent';

interface FundguardCaseStudyProps {
  onNextStudy: () => void;
  onLearnMore?: () => void;
  onLearnMoreV2?: () => void;
  onLearnMoreV3?: () => void;
  onLearnMoreV4?: () => void;
  onBack?: () => void;
}

export function FundguardCaseStudy({ onNextStudy, onLearnMore, onLearnMoreV2, onLearnMoreV3, onLearnMoreV4, onBack }: FundguardCaseStudyProps) {
  return (
    <CaseStudyLayout onBack={onBack}>
      <CaseStudyFundguardContent onNextStudy={onNextStudy} onLearnMore={onLearnMore} onLearnMoreV2={onLearnMoreV2} onLearnMoreV3={onLearnMoreV3} onLearnMoreV4={onLearnMoreV4} />
    </CaseStudyLayout>
  );
}
