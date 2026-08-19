export type PublicationCategory = 'all' | 'journal' | 'manual' | 'policy' | 'report';

export interface PublicationItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  dateEn: string;
  category: 'journal' | 'manual' | 'policy' | 'report';
  author: string;
  fileSize: string;
  fileUrl: string;
  image: string;
  summary: string;
  summaryEn: string;
  isFeatured?: boolean;
}
