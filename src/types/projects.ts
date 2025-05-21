export interface Project {
  id: string;
  title: string;
  description: string;
  categories: string[];
  year: string;
  location: string;
  isFeatured?: boolean;
  specs?: {
    [key: string]: string;
  };
} 