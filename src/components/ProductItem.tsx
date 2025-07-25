import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import Paginate from "./Pagination"
import { useState } from "react"

export default function ProductItem({ item }: any) {
  const [blogPosts, setBlogPosts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(3)

  // ...

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost)

  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div className="relative">
      <Link to={`/product/${item.id}`}>
        <img
          className="w-full h-80 object-contain rounded"
          src={item.cover}
          alt=""
        />
      </Link>
      <div className="group flex justify-center items-center">
        <div className="flex flex-col text-main text-center">
          <span className="text-[20px] font-bold">{item.name}</span>
          <span>LE {item.price} EGP</span>
        </div>
        {/* <FaHeart className=" opacity-1 text-main cursor-pointer text-[19px] hover:text-[#dc3545] transition-all" /> */}
      </div>
    </div>
  )
}
