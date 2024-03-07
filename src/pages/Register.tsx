export default function Register() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[4rem] min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-10">Register</h1>
        <form>
          <div className="flex flex-col">
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mb-6 transition-all">
              Error from server
            </div>
            <input
              type="text"
              placeholder="name"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525]"
            />
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center transition-all mt-2">
              <p className="">name is required</p>
              <p className="">min length is 5 characters</p>
              <p className="">max length is 50 characters</p>
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
            <input
              type="password"
              placeholder="re password"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mt-2 transition-all">
              <p className="">rePassword is required</p>
              <p className="">min length is 5 characters</p>
              <p className="">max length is 50 characters</p>
            </div>
            <input
              type="phone"
              placeholder="phone"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />
            <div className="bg-[#f8d7da] border-[1px] text-lg border-[#f5c6cb] hover:border-[#721c24] text-[#721c24] w-full h-12 rounded-3xl px-4 flex justify-center items-center mt-2 transition-all">
              <p className="">phone is required</p>
              <p className="">min length is 5 characters</p>
              <p className="">max length is 50 characters</p>
            </div>
          </div>
        </form>

        <button className="border-2 bg-main text-white rounded-3xl px-6 py-2 text-lg capitalize mt-6 w-[450px] min-h-12">
          <span>Register</span>
          <div className="loading-icon">
            <i className="fa fa-spinner fa-spin"></i>
          </div>
        </button>
      </div>
    </>
  )
}
