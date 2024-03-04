export default function News() {
  return (
    <div className="flex flex-col justify-center items-center h-[300px]">
      <h2 className="text-xl md:text-3xl font-bold capitalize mb-4">
        subscribe to get news
      </h2>
      <p className="capitalize mb-8 text-center">
        Be the first to know about new collections and exclusive offers.
      </p>
      <div>
        <input
          type="text"
          placeholder="Email"
          className="border-[1px] border-[#252525] text-xl px-4 w-[350px] h-12 rounded-3xl text-main placeholder:text-[#252525]"
        />
      </div>
    </div>
  )
}
