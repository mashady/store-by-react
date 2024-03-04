import Rating from "react-rating"
import { FaStar } from "react-icons/fa"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import { publicRequest } from "../requestMethod"
import { useAppDispatch } from "../app/hooks"
import { addProduct } from "../features/cart/cartSlice"

let prod_placeholder =
  "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export default function Product() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [product, setProduct] = useState([])
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState("")
  const [size, setSize] = useState("")
  const quantityValue = Number(quantity) || 0

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
  const handleQuantity = type => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }
  const handleAddProduct = () => {
    console.log("added")
    dispatch(
      addProduct({
        products: product,
        quantity: quantity,
      }),
    )
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
            <h1 className="text-3xl text-main mb-4">{product.title}</h1>
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
            <button className="bg-main w-full h-12 text-white rounded text-lg">
              Checkout
            </button>
            <button
              onClick={handleAddProduct}
              className="bg-white mb-6 w-full h-12 text-main border-[1px] border-[#252525] border-opacity-50 rounded text-lg mt-2"
            >
              Add to cart
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
