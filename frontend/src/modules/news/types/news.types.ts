export type NewsCategory = 'all' | 'press' | 'announcement' | 'article';

export interface NewsItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  dateEn: string;
  category: 'press' | 'announcement' | 'article';
  author: string;
  image: string;
  summary: string;
  summaryEn: string;
  content: string;
  contentEn: string;
  isFeatured?: boolean;
}
