import CatList from "../components/CatList"
import Header from "../components/Header"
import News from "../components/News"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import {
  fetchedPorducts,
  selectProducts,
} from "../features/products/productSlice"
import { useEffect, useState } from "react"
import ProductList from "../components/ProductList"

export default function Home() {
  const [products, setProducts] = useState([])
  const productSelector = useAppSelector(selectProducts)

  const dispatch = useAppDispatch()
  useEffect(() => {
    console.log(productSelector)
    if (productSelector.length <= 0) {
      fetch("https://ecommerce.routemisr.com/api/v1/products")
        .then(response => response.json())
        .then(data => {
          setProducts(data.data)
          console.log(data.data)
          dispatch(
            fetchedPorducts({
              products: data.data,
            }),
          )
        })
    } else {
      setProducts(productSelector)
    }
  }, [])
  return (
    <>
      <Header />
      <ProductList products={products} />
      <CatList />
      <News />
    </>
  )
}
