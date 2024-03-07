import { Link } from "react-router-dom"

export default function CatList() {
  let catList: any[] = [
    {
      name: "Men's Fashion",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "men",
    },
    {
      name: "Women's Fashion",
      image:
        "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "women",
    },
    {
      name: "Baby & Toys",
      image:
        "https://images.unsplash.com/photo-1604467794349-0b74285de7e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "baby",
    },
    {
      name: "Beauty & Health",
      image:
        "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "beauty",
    },
    {
      name: "Music",
      image:
        "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "music",
    },
    {
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "books",
    },
  ]
  return (
    <>
      <div className="p-6">
        <div className="flex justify-between items-center py-6">
          <h2 className="text-2xl font-bold">
            Take a tour into our categories
          </h2>
          <span className="text-main font-bold capitalize underline">
            <Link to="/categories">see more</Link>
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {catList.map((cat, index) => (
            <div className="relative" key={index}>
              <img
                className="w-full h-80 object-cover"
                src={cat.image}
                alt=""
              />
              <div className="absolute bg-black bg-opacity-75 text-white top-0 left-0 w-full h-full flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-xl font-bold">{cat.name}</h2>
                  <button className="h-12 w-36 rounded bg-main mt-4">
                    <Link to={`/products/${cat.link}`}>Explore now</Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
