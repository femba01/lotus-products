import { Search } from 'lucide-react'

type Props = {
    searchValue?: string;
    onSearchChange?: (value: string) => void;
}

export default function SearchFilter({ searchValue, onSearchChange }: Props) {
    return (
        <div className="relative">
            <Search size={20} className="absolute left-3 top-2 text-gray-400" />
            <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => onSearchChange?.(e.target.value)}
                className="lg:w-80 md:w-80 sm:w-auto pl-10 pr-4 py-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none w-full"
            />
            {searchValue && (
                <div className="absolute right-3 top-2 text-gray-400 cursor-pointer" onClick={() => onSearchChange?.('')}>
                    Clear
                </div>
            )}
        </div>
    )
}