import { useEffect, useState } from "react"
import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io"
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from "../requestMethod"
import { useNavigate } from "react-router-dom"
import { selectQuantity } from "../features/cart/cartSlice"
import { selectProducts } from "../features/cart/cartSlice"
import { selectTotal } from "../features/cart/cartSlice"

import { useAppSelector } from "../app/hooks"

let prod_placeholder =
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const KEY = import.meta.env.VITE_REACT_APP_STRIPE

export default function Cart() {
  const [stripeToken, setStripeToken] = useState(null)
  const navigate = useNavigate()
  const cartCount = useAppSelector(selectQuantity)
  const cart = useAppSelector(selectProducts)
  const cartTotal = useAppSelector(selectTotal)

  const onToken = (token: any) => {
    setStripeToken(token)
  }
  /*
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        })
        navigate("/success", {
          state: {
            stripeData: res.data,
            products: cart,
          },
        })
      } catch (err) {
        console.log(err)
      }
    }
    stripeToken && makeRequest()
  }, [stripeToken, cartCount, navigate])
  */
  return (
    <>
      <div className="max-w-[1140px] min-h-[70vh] mx-auto ">
        <h1 className="text-2xl text-main">Cart</h1>
        <div className=" rounded-lg p-2 ">
          <div className="grid grid-cols-3 gap-5">
            <div className="col-span-2 p-4 rounded-lg border-[1px] border-[#252525] border-opacity-50">
              <div className="flex items-center justify-between border-b-[1px] border-[#252525] border-opacity-25 pb-4">
                <div className="flex ">
                  <img
                    src={prod_placeholder}
                    alt=""
                    className="w-16 rounded mr-4"
                  />
                  <div>
                    <h3 className="text-2xl text-main">title</h3>
                    <div className="text-sec text-[0.9rem] mt-[4px]">
                      <span className="cursor-pointer">Remove</span> |{" "}
                      <span className="cursor-pointer">Save to wishlist</span>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="text-main  mb-6 text-[1.3rem]">LE 300.00</div>
                  <div className="flex justify-center items-center">
                    <span className=" text-main cursor-pointer text-xl bg-sec p-[2px] rounded mr-2">
                      <IoMdAdd className="text-white" />
                    </span>
                    <span className="text-lg">1</span>
                    <span className=" text-main cursor-pointer text-xl bg-sec p-[2px] rounded ml-2">
                      <IoMdRemove className="text-white" />
                    </span>
                  </div>
                </div>
              </div>
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
              {/**
               * <StripeCheckout
                name="mashady"
                image="https://avatars.githubusercontent.com/u/74117066?s=400&u=e084f97fe30325bb4348b37866e3631c9991cde9&v=4"
                billingAddress
                shippingAddress
                description={`Your total is $${cartTotal}`}
                amount={cartTotal * 100}
                token={onToken}
                stripeKey={KEY}
              >
                <button className="bg-main w-full h-12 text-white rounded text-lg">
                  Checkout
                </button>
              </StripeCheckout>
               * 
               * 
               */}
              <button className="bg-main w-full h-12 text-white rounded text-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}