import React, { useRef, useState } from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"

import "../styles/Header.css"

import { Pagination } from "swiper/modules"
import { Link } from "react-router-dom"

// images
let sliderImages = [
  "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1443884590026-2e4d21aee71c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1540200049848-d9813ea0e120?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
]

export default function Header() {
  return (
    <>
      <div className="flex justify-center items-center ">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="w-full h-[80vh] bg-sec flex justify-center items-center "
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image} className="w-full h-full object-cover " alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="bg-main my-4 text-white flex flex-col justify-center items-center py-12 h-[300px]">
        <h2 className="text-xl md:text-3xl font-bold capitalize mb-4">
          get a colections of products from every type
        </h2>
        <p className="capitalize mb-6">enjoy the journey</p>
        <div>
          <button className="border-2 rounded-3xl px-4 py-2 text-lg capitalize">
            <Link to="/">explore products now</Link>
          </button>
        </div>
      </div>
    </>
  )
}
