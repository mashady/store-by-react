import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import ProductItem from "./ProductItem"

export default function ProductList({ cat, filters, sort }: any) {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  useEffect(() => {
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
          : products
              .slice(0, 8)
              .map((item, i) => <ProductItem item={item} key={i} />)}
      </div>
    </>
  )
}