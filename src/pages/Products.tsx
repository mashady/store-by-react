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
  const cat = location.pathname.split("/")[2] || "all"

  // State
  const [filterProds, setFilterProds] = useState(cat)
  const [sortProds, setSortProds] = useState("default")
  const [searchProds, setSearchProds] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState<any[]>([]) // 🆕 for fetched categories

  const dispatch = useAppDispatch()
  const products = useAppSelector(selectProducts)

  // 🆕 Fetch categories dynamically
  useEffect(() => {
    fetch("http://localhost:8000/api/categories/")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Failed to fetch categories:", err))
  }, [])

  // 🆕 Sync URL category to filter
  useEffect(() => {
    setFilterProds(cat)
  }, [cat])

  // ✅ Fetch products if not in store
  useEffect(() => {
    if (products.length === 0) {
      fetch("http://localhost:8000/api/products/")
        .then(res => res.json())
        .then(data => {
          dispatch(
            fetchedPorducts({
              products: data,
            }),
          )
        })
        .catch(err => console.error("Failed to fetch products:", err))
    }
  }, [dispatch, products])

  // Handlers
  const handleFilterByCat = (e: any) => {
    setFilterProds(e.target.value)
    setCurrentPage(1)
  }

  const handleSortProducts = (e: any) => {
    setSortProds(e.target.value)
    setCurrentPage(1)
  }

  const handleSearch = (e: any) => {
    setSearchProds(e.target.value.toLowerCase())
    setSortProds("search")
    setCurrentPage(1)
  }

  // Step 1: Filter by category
  const filtered = [...products].filter((value: any) => {
    return filterProds === "all" || value.category.slug === filterProds
  })

  // Step 2: Filter by search
  const searched = filtered.filter((value: any) =>
    value.name.toLowerCase().includes(searchProds),
  )

  // Step 3: Sort
  const sorted = [...searched].sort((a: any, b: any) => {
    if (sortProds === "low") return Number(a.price) - Number(b.price)
    if (sortProds === "high") return Number(b.price) - Number(a.price)
    if (sortProds === "a-z") return a.name.localeCompare(b.name)
    if (sortProds === "z-a") return b.name.localeCompare(a.name)
    // if (sortProds === "oldest" && a.createdAt && b.createdAt)
    // return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    // if (sortProds === "new" && a.createdAt && b.createdAt)
    // return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    return 0
  })

  const sortedProducts = sorted

  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-6">
        <h2 className="text-2xl font-bold text-main">
          Awesome variety of products
        </h2>

        <div className="flex w-auto mr-2">
          {/* 🆕 Category Filter - dynamic from API */}
          <select
            value={filterProds}
            onChange={handleFilterByCat}
            className="bg-gray-50 border mr-2 border-[#79747b] border-opacity-25 main-bg text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5"
          >
            <option value="all">All categories</option>
            {categories.map((c, i) => (
              <option key={i} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            value={sortProds}
            onChange={handleSortProducts}
            className="bg-gray-50 border border-[#79747b] border-opacity-25 main-bg text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5"
          >
            <option value="default">Default</option>
            {/* <option value="new">Newest</option> */}
            {/* <option value="oldest">Oldest</option> */}
            <option value="high">Price (High to Low)</option>
            <option value="low">Price (Low to High)</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
          </select>
        </div>
      </div>

      {/* Search */}
      <div className="p-2 rounded border-[1px] border-black w-full mx-auto">
        <input
          autoFocus
          type="text"
          placeholder="Search"
          className="w-full h-[50px] p-4 rounded text-xl outline-none"
          onChange={handleSearch}
        />
      </div>

      {/* Product List */}
      <ProductList
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        products={sortedProducts}
        cat={cat}
      />
    </div>
  )
}
