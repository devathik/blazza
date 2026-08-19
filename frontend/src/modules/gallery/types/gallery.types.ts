export type GalleryCategory = 'all' | 'seminars' | 'conferences' | 'camps' | 'videos';

export interface GalleryItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  dateEn: string;
  category: 'seminars' | 'conferences' | 'camps' | 'videos';
  location: string;
  locationEn: string;
  image: string;
  isVideo?: boolean;
  videoUrl?: string;
  caption: string;
  captionEn: string;
}
