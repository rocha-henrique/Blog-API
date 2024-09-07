import React from 'react';
import '../Css/Pagination.css';

const MAX_ITEMS = 3;
const MAX_LEFT =  Math.max(MAX_ITEMS - 1, 0);

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const startPage = Math.max(current - MAX_LEFT, 1);
  const endPage = Math.min(startPage + MAX_LEFT, pages);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className='pagination justify-content-center'>
        <li class="page-item">
          <button
            class="page-link"
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + startPage)
        .filter((page) => page <= endPage)
        .map((page) => (
          <li key={page} class="page-link" href="#">
            <button 
            class="page-link" href="#"
              onClick={() => onPageChange(page)}
              className={
                page === current
                  ? 'pagination__item--active'
                  : null
              }
            >
              {page}
            </button>
          </li>
        ))}
        <li>
        <button
          class="page-link" href="#"
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
      </ul>
    </nav>
  )
}

export default Pagination;
