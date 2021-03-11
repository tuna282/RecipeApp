import React from 'react';

const fetchNextPage = (pageNumber, setPageNumber) => setPageNumber(pageNumber + 1);
const fetchPreviousPage = (pageNumber, setPageNumber) => setPageNumber(pageNumber - 1);
const Pagination = ({ pageNumber, setPageNumber, lastPageNumber }) => {
  if (pageNumber !== 0 || pageNumber !== lastPageNumber) {
    return (
      <div className="pagination">
        <button onClick={() => fetchNextPage(pageNumber, setPageNumber)} className="next-btn"><a href="#">Next</a></button>
        <button onClick={() => fetchPreviousPage(pageNumber, setPageNumber)} className="prev-btn"><a href="#">Previous</a></button>
      </div>
    );
  } else if (pageNumber === 0) {
    return (
      <div className="pagination">
        <button onClick={() => fetchNextPage(pageNumber, setPageNumber)} className="next-btn"><a href="#">Next</a></button>
      </div>
    );
  } else {
    return (
      <div className="pagination">
        <button onClick={() => fetchPreviousPage(pageNumber, setPageNumber)} className="prev-btn"><a href="#">Previous</a></button>
      </div>
    );
  }
};

export default Pagination;
