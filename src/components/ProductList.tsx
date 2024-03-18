import { useState } from "react"
import { useLocation } from "react-router-dom"
import Paginate from "./Pagination"
import ProductItem from "./ProductItem"

export default function ProductList({
  products,
  currentPage,
  setCurrentPage,
}: any) {
  const location = useLocation()

  const [postsPerPage] = useState(8)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {location.pathname.split("/")[1] === "products"
          ? currentPosts.map((item: any, i: any) => (
              <ProductItem item={item} key={i} />
            ))
          : products
              .slice(0, 8)
              .map((item: any, i: any) => <ProductItem item={item} key={i} />)}
      </div>
      {location.pathname.split("/")[1] === "products" ? (
        <Paginate
          postsPerPage={postsPerPage}
          totalPosts={products.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      ) : null}
    </>
  )
}
