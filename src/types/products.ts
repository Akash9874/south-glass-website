export type Product = {
  id: string;
  name: string;
  description: string;
  image?: string;
  categoryId: string;
  categoryName?: string;
  type: string;
  featured?: boolean;
  rating?: number;
  reviewCount?: number;
  features?: string[];
  applications?: string[];
};

export type Category = {
  id: string;
  name: string;
  description?: string;
}; 