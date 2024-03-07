import { Link } from "react-router-dom"

export default function Login() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[4rem] min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-10">Login</h1>

        <form>
          <div className="flex flex-col">
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mb-6 transition-all">
              Error from server
            </div>

            <input
              type="email"
              placeholder="Email"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mt-2 transition-all">
              <p className="">email is required</p>
              <p className="">min length is 5 characters</p>
              <p className="">max length is 50 characters</p>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mt-2 transition-all">
              <p className="">password is required</p>
              <p className="">min length is 5 characters</p>
              <p className="">max length is 50 characters</p>
            </div>
          </div>
        </form>
        <div className="w-[450px] mt-2">
          <span className="underline cursor-pointer ml-2">
            forget your password
          </span>
        </div>
        <button className="border-2 bg-main text-white rounded-3xl px-6 py-2 text-lg capitalize mt-6 w-[450px] min-h-12">
          Login
        </button>
        <span className="underline cursor-pointer">
          <Link to="">create an account</Link>
        </span>
      </div>
    </>
  )
}
