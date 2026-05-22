// hooks/use-single-product.ts

import { useQuery } from "@tanstack/react-query";

import { getSingleProduct } from "../api/products";

export const useSingleProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],

    queryFn: () => getSingleProduct(id),

    enabled: !!id,
  });
};