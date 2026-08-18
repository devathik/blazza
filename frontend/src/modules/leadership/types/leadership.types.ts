export type LeaderCategory = 'all' | 'central' | 'advisory' | 'district' | 'university';

export interface LeaderMember {
  id: string;
  name: string;
  nameEn: string;
  designation: string;
  designationEn: string;
  category: 'central' | 'advisory' | 'district' | 'university';
  chapter: string;
  chapterEn: string;
  avatar: string;
  bio: string;
  bioEn: string;
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  barAffiliation?: string;
  isFeatured?: boolean;
}
