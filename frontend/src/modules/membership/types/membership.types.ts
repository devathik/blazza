export interface MembershipCategory {
  id: string;
  title: string;
  titleEn: string;
  fee: string;
  feeEn: string;
  target: string;
  targetEn: string;
  features: string[];
  featuresEn: string[];
  badge: string;
  isPopular?: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  questionEn: string;
  answer: string;
  answerEn: string;
}
