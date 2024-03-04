import { IoMdAdd } from "react-icons/io"
import { IoMdRemove } from "react-icons/io"

let prod_placeholder =
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Wishlist() {
  return (
    <>
      <div className="max-w-[900px] min-h-[70vh] mx-auto ">
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
                  <span className="cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            <div className="">
              <div className="text-main  mb-6 text-[1.3rem]">LE 300.00</div>
              <div className="flex justify-center items-center">
                <button className="bg-main w-full h-12 text-white rounded text p-2">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
