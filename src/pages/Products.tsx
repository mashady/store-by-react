import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  fetchedPorducts,
  selectProducts,
} from "../features/products/productSlice"
export default function Products() {
  const location = useLocation()

  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  let [filterProds, setFilterProds] = useState("all")
  let [sortProds, setSortProds] = useState("default")
  let [searchProds, setSearchProds] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)

  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)
  useEffect(() => {
    console.log(products)
    if (products.length <= 0) {
      console.log("its empty")
      fetch("https://ecommerce.routemisr.com/api/v1/products")
        .then(response => response.json())
        .then(data => {
          console.log(data.data)
          dispatch(
            fetchedPorducts({
              products: data.data,
            }),
          )
        })
    }
  }, [])
  const handleFilterByCat = (e: any) => {
    setFilterProds(e.target.value)
    console.log(e.target.value)
    setCurrentPage(1)
  }
  const handleSortProducts = (e: any) => {
    setSortProds(e.target.value)
    console.log(e.target.value)
    setCurrentPage(1)
  }
  const handleSearch = (e: any) => {
    setSearchProds(e.target.value.toLowerCase())
    setSortProds("search")
  }
  // filter by cat
  const filterProducts = products?.filter((value: any) => {
    if (filterProds === "all") {
      return true
    } else {
      return value.category.slug === filterProds
    }
  })
  // sort prods
  const sortedProducts =
    sortProds === "low"
      ? filterProducts.sort((a: any, b: any) => a.price - b.price)
      : sortProds === "high"
        ? filterProducts?.sort((a: any, b: any) => b.price - a.price)
        : sortProds === "default"
          ? filterProducts
          : sortProds === "a-z"
            ? filterProducts?.sort((a: any, b: any) =>
                a.title > b.title ? 1 : -1,
              )
            : sortProds === "z-a"
              ? filterProducts?.sort((a: any, b: any) =>
                  a.title > b.title ? -1 : 1,
                )
              : sortProds === "oldest"
                ? filterProducts.sort((a: any, b: any) =>
                    a.createdAt
                      .split("/")
                      .reverse()
                      .join()
                      .localeCompare(b.createdAt.split("/").reverse().join()),
                  )
                : sortProds === "new"
                  ? filterProducts.sort((b: any, a: any) =>
                      a.createdAt
                        .split("/")
                        .reverse()
                        .join()
                        .localeCompare(b.createdAt.split("/").reverse().join()),
                    )
                  : sortProds === "search"
                    ? filterProducts.filter((value: any) =>
                        value.title.toLowerCase().includes(searchProds),
                      )
                    : null

  let sortedCat: any[] = [
    {
      name: "Men's Fashion",
      slug: "men's-fashion",
    },
    {
      name: "Women's Fashion",
      slug: "women's-fashion",
    },
    {
      name: "Electronics",
      slug: "electronics",
    },
  ]

  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-2xl font-bold text-main">
            Awesome varity of products{" "}
          </h2>

          <div className="flex w-auto mr-2 ">
            <select
              onChange={handleFilterByCat}
              name="size"
              className="bg-gray-50 border mr-2 border-[#79747b] border-opacity-25 main-bg  text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5 "
            >
              <option selected value="all">
                All categories
              </option>
              {sortedCat &&
                sortedCat.map((c, i) => (
                  <option value={c.slug} id={c.slug} key={i}>
                    {c.name}
                  </option>
                ))}
            </select>
            <select
              onChange={handleSortProducts}
              className="bg-gray-50 border border-[#79747b] border-opacity-25 main-bg  text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5 "
            >
              <option value="default">default</option>
              <option value="new">newest</option>
              <option value="oldest">oldest</option>
              <option value="high">price (asc)</option>
              <option value="low">price (desc)</option>
              <option value="a-z">A-Z</option>
              <option value="z-a">Z-A</option>
            </select>
          </div>
        </div>
        <div className="p-2 rounded border-[1px] border-black w-full mx-auto">
          <input
            autoFocus
            type="text"
            placeholder="search"
            className="w-full h-[50px] p-4 rounded text-xl outline-none"
            onChange={handleSearch}
          />
        </div>
        <ProductList
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          products={sortedProducts}
          cat={cat}
        />
      </div>
    </>
  )
}
