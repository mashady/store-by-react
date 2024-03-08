import Rating from "react-rating"
import { FaStar } from "react-icons/fa"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest, userRequest } from "../requestMethod"
import { useAppDispatch, useAppSelector } from "../app/hooks"

import {
  addProduct,
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  selectProducts,
  selectQuantity,
} from "../features/cart/cartSlice"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import { addWish } from "../features/wishlist/wishlistSlice"
let prod_placeholder =
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Product() {
  const cartProd = useAppSelector(selectProducts)
  let cartQuant = useAppSelector(selectQuantity)
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const [existInCart, setExistInCart] = useState(false)
  const quantityValue = Number(quantity) || 0
  const Index = cartProd.findIndex((i: any) => i._id === product._id)

  const dispatch = useAppDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id)
        console.log(res)

        setProduct(res.data)
      } catch {
        console.log("err")
      }
    }
    getProduct()
  }, [id])

  const handleDecsrese = () => {
    dispatch(
      decreaseQuantity({
        products: product,
      }),
    )
  }
  const handleClear = () => {
    dispatch(clearCart())
  }
  const handleAddProduct = async () => {
    const Index = cartProd.findIndex((i: any) => i._id === product._id)
    console.log(Index)
    if (Index >= 0) {
      console.log("exist")
      setExistInCart(true)
      let x = cartProd[Index].cartQuantity
      setQuantity(x)
    } else {
      dispatch(
        addProduct({
          products: product,
          quantity: quantity,
        }),
      )
      //let x = cartProd[Index].cartQuantity
      //setQuantity(x)
      setExistInCart(true)
    }
  }
  const handleTestAddProduct = async () => {
    let x = cartProd[Index].cartQuantity
    setQuantity(x)
    console.log(x)
    if (Index >= 0) {
      console.log("exist")
      setExistInCart(true)
    }
    if (Index === -1) {
      console.log("not exist")
    }
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-6  p-6 max-w-[1140px] mx-auto my-14">
        <div className="">
          <img
            src={product.img}
            className="h-[70vh] w-full rounded-xl object-contain"
            alt=""
          />
        </div>
        <div>
          <div className="border-b-[1px] border-opacity-50 border-[#252525] mb-2">
            <div className="text-sec">{product.categories}</div>
            <h1
              className="text-3xl text-main mb-4"
              onClick={handleTestAddProduct}
            >
              {product.title}
            </h1>
            <div className="flex items-center">
              <Rating
                className="flex mt-[4px] mr-2 justify-center items-center"
                initialRating={4}
                emptySymbol={<FaStar color="rgb(122 112 104 / 60%)" />}
                fullSymbol={<FaStar color="#febb02" />}
                readonly
              />{" "}
              <span className="text-sec">(111 reviews)</span>
            </div>

            <div className="text-xl text-main mb-12">
              LE {product.price} EGP
            </div>
            <div>
              <div className="text-sec">size</div>
              <div className="mt-[2px] text-sm mb-4 w-[35px] h-[35px] flex justify-center items-center rounded border-opacity-90 border-2 border-[#252525]">
                {product.size}
              </div>
            </div>
            <span
              onClick={() => dispatch(addWish({ products: product }))}
              className="cursor-pointer"
            >
              Save to wishlist
            </span>
            {Index < 0 ? (
              <button
                onClick={handleAddProduct}
                className="bg-white mb-6 w-full h-12 text-main border-[1px] border-[#252525] border-opacity-50 rounded text-lg mt-2"
              >
                Add to cart
              </button>
            ) : (
              <div className=" w-[100px] h-[70px] flex justify-center items-center border-[1px] rounded mb-2">
                <div className="">
                  <div className="flex justify-center items-center">
                    <span
                      onClick={() =>
                        dispatch(
                          increaseQuantity({
                            products: product,
                          }),
                        )
                      }
                      className=" text-main cursor-pointer text-xl bg-main p-[2px] rounded mr-2"
                    >
                      <IoMdAdd className="text-white" />
                    </span>
                    <span className="text-lg">
                      {cartProd[Index].cartQuantity}
                    </span>
                    <span
                      onClick={() =>
                        dispatch(decreaseQuantity({ products: product }))
                      }
                      className=" text-main cursor-pointer text-xl bg-main p-[2px] rounded ml-2"
                    >
                      <IoMdRemove className="text-white" />
                    </span>
                  </div>
                </div>
              </div>
            )}
            <button
              onClick={handleClear}
              className="bg-main w-full h-12 text-white rounded text-lg mb-6"
            >
              Checkout
            </button>
          </div>
          <div>
            <span className="text font-bold text-main">Details</span>
            <p className="text-sec">{product.desc}</p>
          </div>
        </div>
      </div>
    </>
  )
}
