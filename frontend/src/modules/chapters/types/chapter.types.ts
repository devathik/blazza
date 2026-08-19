export type ChapterCategory = 'all' | 'district' | 'university';

export interface ChapterItem {
  id: string;
  name: string;
  nameEn: string;
  category: 'district' | 'university';
  region: string;
  regionEn: string;
  established: string;
  presidentName: string;
  gsName: string;
  totalMembers: number;
  location: string;
  email: string;
  phone: string;
  committeeMembers: string[];
}
