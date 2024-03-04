import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function ProductItem({ item }: any) {
  return (
    <div className="relative">
      <Link to={`/product/${item._id}`}>
        <img
          className="w-full h-80 object-contain rounded"
          src={item.img}
          alt=""
        />
      </Link>
      <div className="group flex justify-between items-center">
        <div className="flex flex-col text-main">
          <span className="text-[20px] font-bold">{item.title}</span>
          <span>LE {item.price} EGP</span>
        </div>
        <FaHeart className=" opacity-0 text-main cursor-pointer text-[19px] hover:text-[#dc3545] transition-all" />
      </div>
    </div>
  )
}
