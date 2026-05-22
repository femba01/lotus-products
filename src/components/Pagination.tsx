interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-4 py-2 border rounded-lg disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-lg border ${
              currentPage === page
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-4 py-2 border rounded-lg disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}