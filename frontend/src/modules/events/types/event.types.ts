export type EventCategory = 'all' | 'upcoming' | 'past' | 'seminar' | 'workshop' | 'legal_camp';
export type EventStatus = 'upcoming' | 'ongoing' | 'past';

export interface EventItem {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  dateEn: string;
  time: string;
  location: string;
  venue: string;
  category: 'seminar' | 'workshop' | 'legal_camp' | 'conference';
  status: EventStatus;
  image: string;
  description: string;
  descriptionEn: string;
  highlights: string[];
  speaker: string;
  organizer: string;
  registrationUrl?: string;
  isFeatured?: boolean;
}
