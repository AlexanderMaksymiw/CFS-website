"use client";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/solid";

export default function Pagination({
  page,
  setPage,
  totalItems,
  itemsPerPage = 6,
  maxButtons = 3,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (i) => {
    setPage(i);
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const btnClass =
    "w-10 h-10 flex items-center justify-center transition-all duration-200 font-black text-xs uppercase tracking-tighter border-2";

  return (
    <div className="flex justify-center items-center gap-3 flex-wrap">
      {/* First / Prev */}
      <button
        disabled={page === 0}
        onClick={() => handlePageChange(0)}
        className={`${btnClass} ${page === 0 ? "border-slate-100 text-slate-300" : "border-slate-900 text-slate-900 hover:bg-amber-400 hover:border-amber-400"}`}
      >
        <ChevronDoubleLeftIcon className="w-4 h-4" />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`${btnClass} ${
            page === i
              ? "bg-slate-900 border-slate-900 text-white"
              : "border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900"
          }`}
        >
          {i + 1}
        </button>
      ))}

      {/* Last / Next */}
      <button
        disabled={page === totalPages - 1}
        onClick={() => handlePageChange(totalPages - 1)}
        className={`${btnClass} ${page === totalPages - 1 ? "border-slate-100 text-slate-300" : "border-slate-900 text-slate-900 hover:bg-amber-400 hover:border-amber-400"}`}
      >
        <ChevronDoubleRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
