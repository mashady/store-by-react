import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

interface Category {
  id: number
  name: string
  image: string
  slug: string
}

export default function CatList() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/categories/")
      .then(res => {
        setCategories(res.data)
        setLoading(false)
      })
      .catch(err => {
        setError("Failed to fetch categories")
        setLoading(false)
      })
  }, [])

  if (loading) return <p className="p-6">Loading categories...</p>
  if (error) return <p className="p-6 text-red-500">{error}</p>

  return (
    <div className="p-6">
      <div className="flex justify-between items-center py-6">
        <h2 className="text-2xl font-bold">Take a tour into our categories</h2>
        <span className="text-main font-bold capitalize underline">
          <Link to="/categories">see more</Link>
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => (
          <div className="relative" key={cat.id}>
            <img
              className="w-full h-80 object-cover"
              src={cat.cover}
              alt={cat.name}
            />
            <div className="absolute bg-black bg-opacity-75 text-white top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-xl font-bold">{cat.name}</h2>
                <button className="h-12 w-36 rounded bg-main mt-4">
                  <Link to={`/products/${cat.slug}`}>Explore now</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
