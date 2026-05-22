// src/api/products.ts

import type { Product, ProductsResponse } from "../types/products";
import api from "./axios";

interface GetProductsParams {
    limit?: number;
    skip?: number;
    search?: string;
    category?: string;
}

export const getProducts = async ({
    limit = 10,
    skip = 0,
    search,
    category
}: GetProductsParams): Promise<ProductsResponse> => {

    const endpoint = search
        ? `/products/search?q=${search}&limit=${limit}&skip=${skip}&category=${category}`
        : `/products?limit=${limit}&skip=${skip}&category=${category}`;

    const response = await api.get(endpoint);
    return response.data;
};

export const getSingleProduct = async (
    id: string
): Promise<Product> => {
    const response = await api.get(`/products/${id}`);

    return response.data;
};