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

  let startPage = Math.max(0, page - 1);
  let endPage = startPage + maxButtons;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(0, endPage - maxButtons);
  }

  const visiblePages = Array.from(
    { length: endPage - startPage },
    (_, i) => startPage + i,
  );

  const handlePageChange = (i) => {
    setPage(i);
    window.scrollTo({ top: 0, behavior: "smooth" }); // optional scroll to top
  };

  return (
    <div className="flex justify-center mt-8 gap-2 flex-wrap">
      {page !== 0 && (
        <button
          onClick={() => handlePageChange(0)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900"
        >
          <ChevronDoubleLeftIcon className="w-4 h-4" />
        </button>
      )}
      {page > 0 && (
        <button
          onClick={() => handlePageChange(page - 1)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900"
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
      )}
      {visiblePages.map((i) => (
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-1 rounded ${page === i ? "bg-slate-900 text-white font-semibold" : "bg-slate-100 hover:bg-slate-300 text-slate-900 font-semibold"}`}
        >
          {i + 1}
        </button>
      ))}
      {page < totalPages - 1 && (
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-3 py-1 bg-slate-100 hover:bg-slate-300 rounded text-slate-900"
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
      )}
      {page !== totalPages - 1 && (
        <button
          onClick={() => handlePageChange(totalPages - 1)}
          className="px-3 py-1 rounded bg-slate-100 hover:bg-slate-300 text-slate-900"
        >
          <ChevronDoubleRightIcon className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
