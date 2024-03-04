import { BiMenuAltLeft } from "react-icons/bi"
import { FiPocket } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import { useAppSelector } from "../app/hooks"
import { IoIosSearch } from "react-icons/io"
import { selectQuantity } from "../features/cart/cartSlice"
import { Link } from "react-router-dom"

export default function Navbar() {
  const cartCount = useAppSelector(selectQuantity)
  return (
    <div className="">
      <div className="flex justify-center items-center bg-sec text-white p-[5px] font-simi-bold capitalize text-[15px]">
        New customer save 15%. Use code: ABU15
      </div>
      <div className="flex justify-between items-center p-[10px] h-[5rem]">
        <div className="flex items-center">
          <BiMenuAltLeft className="text-[23px] mr-2 cursor-pointer" />
          <span className="text-[30px] cursor-pointer">
            <Link to="/">store</Link>
          </span>
        </div>
        <div>
          <ul className="hidden md:flex text-xl capitalize">
            <li className="mr-4 cursor-pointer">
              <Link to="/"> home </Link>
            </li>
            <li className="mr-4 cursor-pointer">
              <Link to="/products">products</Link>
            </li>
            <li className="mr-4 cursor-pointer">
              <Link to="/categories">categories</Link>
            </li>
            <li className="mr-4 cursor-pointer">
              <Link to="/brands">brands</Link>
            </li>
            <li className="mr-4 cursor-pointer">
              <Link to="/wishlist">wishlist</Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center text-[23px]">
          <IoIosSearch className="text-[26px] ml-2 cursor-pointer" />
          <FiUser className="ml-2 cursor-pointer" />
          <div className="relative">
            <Link to="/cart">
              <FiPocket className="mx-2 cursor-pointer" />
              <span className="font-bold text-[13px] bg-sec rounded-full w-[20px] h-[20px] flex justify-center items-center absolute bottom-[-8px] right-[-3px]">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
