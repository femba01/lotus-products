import { useState } from 'react'
import { useProducts } from '../../hooks/useProducts';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom';
import SearchFilter from '../../components/SearchFilter';
import DropdownMenu from '../../components/DropdownMenu';
import useDebounce from '../../hooks/useDebounce';


export default function ProductList() {

    const navigate = useNavigate();
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const debouncedSearch = useDebounce(searchValue, 500);

    const {
        data,
        isLoading,
        error,
        isFetching,
    } = useProducts({ page, pageSize: 10, searchValue: debouncedSearch, category });

    if (isLoading) {
        return <div className='p-6'>
            <Skeleton count={6} />
        </div>;
    }

    if (error) {
        return <div className='border p-4 m-6'>Something went wrong.</div>;
    }

    return (
        <div className="py-6 space-y-6">
            <h1 className="text-3xl font-bold px-4">
                Products
            </h1>

            <div className='flex gap-6 px-6'>
                <DropdownMenu items={["Essence", "Glamour Beauty", "Nail Couture"]} onCategoryChange={(value)=> setCategory(value)} />
                <SearchFilter searchValue={searchValue} onSearchChange={setSearchValue} />
            </div>

            <div className="grid gap-4 overflow-auto max-h-[600px] px-6">
                {data?.products.map((product) => (
                    <div
                        key={product.id}
                        onClick={() => navigate(`/products/${product.id}`)}
                        className="flex justify-between items-center cursor-pointer bg-white border shadow hover:bg-blue-50 hover:shadow-lg transition rounded-xl p-4"
                    >
                        <div className='space-y-1'>
                            <h2 className="font-semibold">
                                {product.title}
                            </h2>
                            <p className='text-neutral-500 text-sm '>{product.description}</p>
                            <p className="flex gap-6 text-sm text-gray-500">
                                <span>Category: <b>{product.category}</b></span>
                                <span>Brand: <b>{product.brand}</b></span>
                                <span>Created date: <b>{new Date(product.meta.createdAt).toLocaleDateString()}</b></span>
                            </p>
                        </div>

                        <h3 className="text-lg font-bold text-gray-500">
                            ${product.price}
                        </h3>
                    </div>
                ))}
            </div>

            <div className="flex gap-4 my-auto">
                <button
                    disabled={page === 1}
                    onClick={() =>
                        setPage((prev) => prev - 1)
                    }
                    className={"border px-4 py-2 rounded" + (page === 1 ? " opacity-50 cursor-not-allowed" : "")}
                >
                    Prev
                </button>

                <button
                    onClick={() =>
                        setPage((prev) => prev + 1)
                    }
                    className={"border px-4 py-2 rounded" + (page === Math.ceil((data?.total || 0) / 10) ? " opacity-50 cursor-not-allowed" : "")}
                >
                    Next
                </button>
            </div>

            {isFetching && (
                <p className="text-sm text-gray-500">
                    Updating...
                </p>
            )}
        </div>
    )
}