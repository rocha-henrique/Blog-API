import React from "react";
import '../Css/Pagination.css';

const MAX_ITEMS = 9;
const MAX_LEFT =  Math.max(MAX_ITEMS - 1, 0);

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? (offset / limit) + 1 : 1;
  const pages = Math.ceil(total / limit);
  const first = Math.max(current - MAX_LEFT, 1);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }

  return (
    <div>
      <ul className='pagination'>
        <li>
          <button
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            Anterior
          </button>
        </li>
        {Array.from({ length: MAX_ITEMS })
        .map((_, index) => index + first)
        .map((page) => (
          page <= pages && (
            <li key={page}>
              <button 
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
          )
        ))}
        <li>
        <button
          onClick={() => onPageChange(current + 1)}
          disabled={current === pages}
        >
          Próxima
        </button>
      </li>
      </ul>
    </div>
  )
}

export default Pagination;
