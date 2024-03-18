import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  addWish,
  clearWish,
  selectWishes,
  selectQuantity,
  removeWish,
} from "../features/wishlist/wishlistSlice"
import { addProduct } from "../features/cart/cartSlice"
let prod_placeholder =
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Wishlist() {
  const dispatch = useAppDispatch()
  const wishlist = useAppSelector(selectWishes)
  console.log(wishlist)

  return (
    <>
      <div className="max-w-[900px] min-h-[70vh] mx-auto p-6">
        {wishlist.length === 0 && <div>Your wishlist is empty</div>}

        {wishlist.map((wish: any, index: any) => (
          <div className="col-span-2 p-4 rounded-lg border-[1px] border-[#252525] border-opacity-50 mb-2">
            <div className="flex items-center justify-between  pb-4">
              <div className="flex ">
                <img
                  src={wish.imageCover}
                  alt=""
                  className="w-16 rounded mr-4"
                />
                <div>
                  <h3 className="text-2xl text-main">{wish.title}</h3>
                  <div className="text-sec text-[0.9rem] mt-[4px]">
                    <span
                      className="cursor-pointer"
                      onClick={() =>
                        dispatch(
                          removeWish({
                            products: wish,
                          }),
                        )
                      }
                    >
                      Remove
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-main  mb-6 text-[1.3rem]">
                  LE {wish.price}
                </div>
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => {
                      dispatch(
                        addProduct({
                          products: wish,
                          quantity: 1,
                        }),
                      )
                      dispatch(
                        removeWish({
                          products: wish,
                        }),
                      )
                    }}
                    className="bg-main w-full h-12 text-white rounded text p-2"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
