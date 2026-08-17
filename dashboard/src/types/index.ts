export interface Blog {
  key: string;
  _id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: 'Blogs' | 'News';
  image: string;
  content?: string;
  status: 'published' | 'draft';
  metaTitle?: string;
  metaDescription?: string;
  keywords?: { id: string; text: string }[];
}
