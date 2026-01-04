export interface AdditionalImageItem {
  imageURL1?: string;
  imageURL2?: string;
  imageURL3?: string;
  imageURL4?: string;
}

export interface AdditionalImagesContainer {
  additionalImages: AdditionalImageItem[];
}

export interface Product {
  id: number;
  documentId: string;
  title: string;
  price: number;
  image: string;
  description: string;
  additionalImages: AdditionalImagesContainer;
  isFavorite: boolean;
  discountPercent: number;
  SKU: number;
  weight: number;
  dimensions: string;
  color: string;
  material: string;
  itemsInStock: number;
  size: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ProductApiResponse {
  data: Product;
  meta: Record<string, unknown>;
}
