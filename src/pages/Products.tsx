import { Link, useLocation } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"
import ProductList from "../components/ProductList"

export default function Products() {
  const location = useLocation()
  const cat = location.pathname.split("/")[2]
  const [filters, setFilters] = useState({})
  const [sort, setSort] = useState("newest")
  const handleFilters = e => {
    const value = e.target.value
    setFilters({
      ...filters,
      [e.target.name]: value,
    })
  }
  let catList: any[] = [
    {
      name: "Men's Fashion",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "men's-fashion",
    },
    {
      name: "Women's Fashion",
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "women's-fashion",
    },
    {
      name: "Baby & Toys",
      image:
        "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "baby-and-toys",
    },
    {
      name: "Beauty & Health",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "beauty-and-health",
    },
    {
      name: "Music",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "music",
    },
    {
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "books",
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
              onChange={handleFilters}
              name="color"
              className="bg-gray-50 border mr-2 border-[#79747b] border-opacity-25 main-bg  text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5 "
            >
              <option disabled selected>
                color
              </option>
              <option>white</option>
              <option>black</option>
              <option>red</option>
              <option>blue</option>
              <option>yellow</option>
              <option>green</option>
            </select>
            <select
              onChange={handleFilters}
              name="size"
              className="bg-gray-50 border mr-2 border-[#79747b] border-opacity-25 main-bg  text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5 "
            >
              <option disabled selected>
                size
              </option>

              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <select
              onChange={e => setSort(e.target.value)}
              className="bg-gray-50 border border-[#79747b] border-opacity-25 main-bg  text rounded-lg focus:ring-[#252525] focus:border-[#252525] outline-none block w-full p-2.5 "
            >
              <option value="newest">newest</option>
              <option value="asc">price (asc)</option>
              <option value="desc">price (desc)</option>
            </select>
          </div>
        </div>
        <ProductList cat={cat} sort={sort} filters={filters} />
        {/**
 * we will replace this with the product list component
 * ////////////////////////////////////////////////////
 * <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {catList.map((cat, index) => (
            <div className="relative">
              <Link to="">
                <img
                  className="w-full h-80 object-cover rounded"
                  src={cat.image}
                  alt=""
                />
              </Link>
              <div className="group flex justify-between items-center">
                <div className="flex flex-col text-main">
                  <span className="text-[20px] font-bold">title</span>
                  <span>LE 20.00 EGP</span>
                </div>
                <FaHeart className=" opacity-0 text-main cursor-pointer text-[19px] hover:text-[#dc3545] transition-all" />
              </div>
            </div>
          ))}
        </div>
 * 
 */}
      </div>
    </>
  )
}
