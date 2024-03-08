import { useEffect, useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io"
import { userRequest } from "../requestMethod"
import { useNavigate } from "react-router-dom"
import { increaseQuantity, selectQuantity } from "../features/cart/cartSlice"
import { selectProducts } from "../features/cart/cartSlice"
import { selectTotal } from "../features/cart/cartSlice"
import { addWish } from "../features/wishlist/wishlistSlice"

import {
  addProduct,
  clearCart,
  decreaseQuantity,
} from "../features/cart/cartSlice"
import { useAppSelector, useAppDispatch } from "../app/hooks"

const KEY = import.meta.env.VITE_REACT_APP_STRIPE

export default function Cart() {
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()
  const cartCount = useAppSelector(selectQuantity)
  const cart = useAppSelector(selectProducts)
  const cartTotal = useAppSelector(selectTotal)

  const dispatch = useAppDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }

  return (
    <>
      <div className="max-w-[1140px] min-h-[70vh] mx-auto p-6">
        <h1 className="text-2xl text-main">Cart</h1>
        <div className=" rounded-lg p-2 ">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 p-4 rounded-lg border-[1px] border-[#252525] border-opacity-50">
              {cart.length === 0 ? <div>your cart is empty</div> : null}

              {cart.length > 0 && (
                <div>
                  {cart.map((item: any, i: any) => (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b-[1px] border-[#252525] border-opacity-25 pb-4"
                    >
                      <div className="flex ">
                        <img
                          src={item.img}
                          alt=""
                          className="w-16 rounded mr-4"
                        />
                        <div>
                          <h3 className="text-2xl text-main">{item.title}</h3>
                          <div className="text-sec text-[0.9rem] mt-[4px]">
                            <span className="cursor-pointer">Remove</span> |{" "}
                            <span
                              onClick={() =>
                                dispatch(addWish({ products: item }))
                              }
                              className="cursor-pointer"
                            >
                              Save to wishlist
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="">
                        <div className="text-main  mb-6 text-[1.3rem]">
                          LE {item.price * item.cartQuantity}
                        </div>
                        <div className="flex justify-center items-center">
                          <span
                            onClick={() =>
                              dispatch(increaseQuantity({ products: item }))
                            }
                            className=" text-main cursor-pointer text-xl bg-sec p-[2px] rounded mr-2"
                          >
                            <IoMdAdd className="text-white" />
                          </span>
                          <span className="text-lg">{item.cartQuantity}</span>
                          <span
                            onClick={() =>
                              dispatch(decreaseQuantity({ products: item }))
                            }
                            className=" text-main cursor-pointer text-xl bg-sec p-[2px] rounded ml-2"
                          >
                            <IoMdRemove className="text-white" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className=" p-4 rounded-lg border-[1px] border-[#252525] border-opacity-50">
              <h2 className="text-2xl mb-2">order summury</h2>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sec">Subtotal</span>
                <span className="text-sec">100 LE</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sec">Estimated shipping</span>
                <span className="text-sec">100 LE</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-sec">Shipping discount</span>
                <span className="text-sec">100 LE</span>
              </div>
              <div className="flex justify-between items-center mb-6  text-2xl ">
                <span className="text-main">Total</span>
                <span className="text-main">100 LE</span>
              </div>

              <button className="bg-main w-full h-12 text-white rounded text-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={handleClearCart}
          className="bg-main w-48 h-12 text-white rounded text-lg ml-2"
        >
          clear cart
        </button>
      </div>
    </>
  )
}
