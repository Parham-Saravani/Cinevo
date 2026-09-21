import { useEffect, useState } from "react";
import { generatePages } from "../../Utilities/generatePages";

function Pagination({ data, setData, itemPerPage }) {  
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemPerPage);

  useEffect(() => {
    const start = (currentPage - 1) * itemPerPage;
    const end = start + itemPerPage;

    const newData = data.slice(start, end);
    setData(newData);
  }, [currentPage]);
  
  const changePageNumber = (number) => setCurrentPage(number);
  if (totalPages > 1) {
    return (
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center gap-2 py-5 mt-4 text-sm text-text-secondary *:disabled:hover:bg-input-border/10 *:disabled:text-text-secondary/20 *:disabled:cursor-no-drop">
          <button
            onClick={() => changePageNumber(currentPage - 1)}
            className="px-2 py-2 cursor-pointer  border border-input-border rounded-md hover:text-text-primary hover:bg-cta-primary/40 transition-colors duration-300"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="border-none flex items-center gap-2 hover:bg-transparent! *:transition-colors *:duration-300">
            {generatePages(currentPage, totalPages).map((item) => {
              return (
                <button
                  onClick={() => changePageNumber(item)}
                  key={item}
                  className={`${currentPage === item ? "border-cta-primary bg-cta-primary text-white" : ""} w-10 h-10 cursor-pointer  border border-input-border rounded-md hover:text-text-primary hover:bg-cta-primary/40`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => changePageNumber(currentPage + 1)}
            className="px-2 py-2 cursor-pointer hover:text-text-primary hover:bg-cta-primary/40  border border-input-border rounded-md transition-colors duration-300"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default Pagination;
