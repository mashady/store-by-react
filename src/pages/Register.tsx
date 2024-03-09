export default function Register() {
  return (
    <>
      <div className="flex flex-col justify-center items-center my-[4rem] min-h-[60vh]">
        <h1 className="text-4xl font-bold mb-10">Register</h1>
        <form>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="name"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525]"
            />

            <input
              type="email"
              placeholder="Email"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />

            <input
              type="password"
              placeholder="Password"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />

            <input
              type="password"
              placeholder="re password"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />

            <input
              type="phone"
              placeholder="phone"
              className="border-[1px] border-[#252525] text-xl px-4 w-[450px] h-12 rounded-3xl text-main placeholder:text-[#252525] mt-6"
            />
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
