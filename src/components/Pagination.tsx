// Navigate.js

const Paginate = ({ postsPerPage, totalPosts, paginate, currentPage }: any) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="flex justify-center items-center">
      <ul className={`${pageNumbers.length === 1 ? "hidden" : "inline-flex"}`}>
        <li>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="h-10 px-5 text-main transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
          >
            prev
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} onClick={() => paginate(number)}>
            <button
              className={`${number === currentPage ? "bg-main text-white" : "bg-white text-main"} h-10 px-5  transition-colors duration-150  focus:shadow-outline`}
              h-10
              px-5
              text-white
              transition-colors
              duration-150
              focus:shadow-outline
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === pageNumbers.length}
            className="h-10 px-5 text-main transition-colors duration-150 bg-white rounded-r-lg focus:shadow-outline hover:bg-indigo-100"
          >
            next
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Paginate
