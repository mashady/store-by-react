import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <>
      <div className="min-h-[80vh] p-10 bg-main flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-3 capitalize">
          <div className="text-white mb-4">
            <h3 className="text-2xl font-bold mb-6">explore</h3>
            <ul className="text-[15px]">
              <li>
                <Link to="">Men's Fashion</Link>
              </li>
              <li>
                <Link to="">Women's Fashion</Link>
              </li>

              <li>
                <Link to="">Baby & Toys</Link>
              </li>
              <li>
                <Link to="">SuperMarket</Link>
              </li>
              <li>
                <Link to="">Beauty & Health</Link>
              </li>
              <li>
                <Link to="">Books</Link>
              </li>
            </ul>
          </div>
          <div className="text-white mb-4">
            <h3 className="text-2xl font-bold mb-6">links</h3>
            <ul className="text-[15px]">
              <li>
                <Link to=""> home </Link>
              </li>
              <li>
                <Link to=""> products </Link>
              </li>
              <li>
                <Link to=""> categories </Link>
              </li>
              <li>
                <Link to=""> brands </Link>
              </li>
            </ul>
          </div>
          <div className="text-white mb-4">
            <h3 className="text-2xl font-bold mb-6">about us</h3>
            <p className="font-[15px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sunt
              necessitatibus in. Expedita ducimus mollitia iste esse et beatae
              suscipit inventore? Atque, aliquam assumenda. Sunt nisi aut
              corrupti numquam animi?
            </p>
          </div>
        </div>
        <div className="text-white">
          <div className="mb-2">
            <i className="fa-brands fa-facebook mr-4 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-twitter mr-4 text-xl cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-xl cursor-pointer"></i>
          </div>
          <div>
            © 2024 <strong>Samir Mashady</strong>. All rights reserved.
          </div>
        </div>
      </div>
    </>
  )
}
