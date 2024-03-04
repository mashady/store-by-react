import CatList from "../components/CatList"
import Header from "../components/Header"
import News from "../components/News"
import ProductList from "../components/ProductList"

export default function Home() {
  return (
    <>
      <Header />
      <ProductList />
      <CatList />
      <News />
    </>
  )
}
