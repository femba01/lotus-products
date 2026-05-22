export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  meta: Metadata;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Metadata extends Product {
    createdAt: Date | string;
    updatedAt: Date | string;
    barcode: string;
    qrCode: string;
}