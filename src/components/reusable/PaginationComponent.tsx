import { FC, useEffect } from "react";
import { PaginationProps } from "../../types/PaginatiomProps";

const Pagination: FC<PaginationProps> = ({ page, setPage, totalPages }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="flex items-center justify-center space-x-9 mb-14">
      {pages.map((number) => (
        <button
          key={number}
          className={`w-[60px] h-[60px] rounded-[10px] ${
            page === number
              ? "bg-[#B88E2F] text-white"
              : "bg-[#F9F1E7] text-black"
          } font-normal font-Poppins text-xl flex items-center justify-center shadow-sm`}
          onClick={() => setPage(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="w-[100px] h-[60px] rounded-[10px] bg-[#F9F1E7] font-normal font-Poppins text-xl flex items-center justify-center shadow-sm"
        // onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
        onClick={() => {
          const nextPage = page < totalPages ? page + 1 : page;
          setPage(nextPage);
        }}
      >
        Next
      </button>
    </div>
  );
};
export default Pagination;
