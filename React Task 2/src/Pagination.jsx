import React from 'react';
import "./Pagination.css";

function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handleNext = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='pagination'>
      <button onClick={handlePrevious} disabled={currentPage === 1} className='prev-btn'>
        Prev
      </button>

      {pages.map((page, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(page)}
          className={page === currentPage ? "active" : ""}
        >
          {page}
        </button>
      ))}

      <button onClick={handleNext} disabled={currentPage === pages.length} className='next-btn'>
        Next
      </button>
    </div>
  );
}

export default Pagination;
