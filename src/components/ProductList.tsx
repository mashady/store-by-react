import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useLocation } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import Paginate from "./Pagination"
import ProductItem from "./ProductItem"

export default function ProductList({ cat, filters, sort }: any) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const location = useLocation()

  const [blogPosts, setBlogPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(8)

  // ...

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }

  useEffect(() => {
    if (location.pathname.split("/")[2] === undefined) {
      console.log("No location")
      console.log(location.pathname)
    } else {
      console.log(location.pathname.split("/")[2])
    }
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:8000/api/products?category=${cat}`
            : "http://localhost:8000/api/products",
        )
        console.log(res.data)

        setProducts(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getProducts()
  }, [cat])

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item: any) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value),
          ),
        ),
      )
  }, [products, cat, filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => a.createdAt - b.createdAt),
      )
    } else if (sort === "asc") {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => a.price - b.price),
      )
    } else {
      setFilteredProducts(prev =>
        [...prev].sort((a: any, b: any) => b.price - a.price),
      )
    }
  }, [sort])
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {cat
          ? filteredProducts.map((item, i) => (
              <ProductItem item={item} key={i} />
            ))
          : location.pathname.split("/")[2] === undefined &&
              location.pathname.split("/")[1] === "products"
            ? currentPosts.map((item, i) => <ProductItem item={item} key={i} />)
            : products
                .slice(0, 8)
                .map((item, i) => <ProductItem item={item} key={i} />)}
      </div>
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </>
  )
}
