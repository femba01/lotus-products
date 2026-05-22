// src/hooks/use-products.ts

import { useQuery } from "@tanstack/react-query";

import { getProducts } from "../api/products";

interface UseProductsProps {
    page: number;
    pageSize?: number;
    searchValue?: string;
    category?: string;
}

export const useProducts = ({
    page,
    pageSize = 10,
    searchValue,
    category
}: UseProductsProps) => {
    return useQuery({
        queryKey: ["products", page, searchValue, category],

        queryFn: () =>
            getProducts({
                limit: pageSize,
                skip: (page - 1) * pageSize,
                search: searchValue,
                category
            }),
    });
};