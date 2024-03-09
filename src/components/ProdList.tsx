import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa"
import { useState } from "react"
import Paginate from "./Pagination"
export default function ProdList() {
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
          <h2 className="text-2xl font-bold">Awesome varity of products </h2>
          <span className="text-main font-bold capitalize underline">
            <a>see more</a>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <div className="flex flex-col">
                  <span className="text-[20px] font-bold">title</span>
                  <span>LE 20.00 EGP</span>
                </div>
                <FaHeart className=" opacity-0 text-main cursor-pointer text-[19px] hover:text-[#dc3545] transition-all" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
