import type { Product, ProductApiResponse } from '../model/types';

const BASE_URL = 'https://api.dev.cwe.su/api';

export const productApi = {
  getById: async (documentId: string): Promise<Product> => {
    const response = await fetch(`${BASE_URL}/products/${documentId}`);
    const result: ProductApiResponse = await response.json();
    return result.data;
  },

  getSimilar: async (limit: number = 3): Promise<Product[]> => {
    const response = await fetch(`${BASE_URL}/products/?pagination[pageSize]=${limit}`);
    const result: { data: Product[] } = await response.json();
    return result.data;
  }
};
