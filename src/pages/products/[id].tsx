import { ArrowLeft } from "lucide-react";

import { useNavigate, useParams } from "react-router-dom";
import { useSingleProduct } from "../../hooks/useSingleProduct";

export default function ProductDetails() {
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useSingleProduct(id || "");

  // Loading State
  if (isLoading) {
    return (
      <div className="space-y-4 animate-pulse">
        <div className="h-10 bg-gray-200 rounded w-40" />

        <div className="bg-white rounded-2xl p-6">
          <div className="h-72 bg-gray-200 rounded-xl mb-6" />

          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-1/2" />

            <div className="h-4 bg-gray-200 rounded w-full" />

            <div className="h-4 bg-gray-200 rounded w-2/3" />
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !product) {
    return (
      <div className="bg-white rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Failed to load product
        </h2>

        <button
          onClick={() => refetch()}
          className="bg-black text-white px-6 py-3 rounded-xl"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm font-medium"
      >
        <ArrowLeft size={18} />

        Back
      </button>

      {/* Content */}
      <div className="bg-white rounded-2xl shadow-sm p-6 grid md:grid-cols-2 gap-10">
        
        {/* Image */}
        <div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-[350px] object-cover rounded-2xl"
          />
        </div>

        {/* Details */}
        <div className="space-y-6">
          
          <div>
            <p className="text-sm text-gray-500 uppercase">
              {product.category}
            </p>

            <h1 className="text-4xl font-bold mt-2">
              {product.title}
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4">
            
            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Price
              </p>

              <h3 className="text-2xl font-bold">
                ${product.price}
              </h3>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Rating
              </p>

              <h3 className="text-2xl font-bold">
                ⭐ {product.rating}
              </h3>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Stock
              </p>

              <h3 className="text-2xl font-bold">
                {product.stock}
              </h3>
            </div>

            <div className="border rounded-xl p-4">
              <p className="text-sm text-gray-500">
                Brand
              </p>

              <h3 className="text-lg font-semibold">
                {product.brand}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}