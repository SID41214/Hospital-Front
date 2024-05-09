import React from 'react'
import  hostpital from "../../assets/svg/hostipital.svg"
import  doctor from "../../assets/svg/doctor.svg"
import  user from "../../assets/svg/user.svg"
import  admin from "../../assets/svg/admin.svg"
import wall from "../../Images/wall.jpg"
const Home = () => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      {/* <h1 className="text-red-500">sdakhkjasdjghf</h1> */}
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <header className="mb-4 flex items-center justify-between py-4 md:py-1">
        {/* <header className="mb-4 flex items-center justify-between py-4 md:py-1 fixed top-0 left-0 right-0 z-50 bg-white opacity-80 "> */}
          {/* <!-- logo - start --> */}
<img src={hostpital} alt=""  width={70}/>
<h2 className='font-bold'>Hospital Management System</h2>

          {/* <a
            href="/"
            className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
            aria-label="logo"
          > */}
            {/* <svg
              width="95"
              height="94"
              viewBox="0 0 95 94"
              className="h-auto w-6 text-indigo-500"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M96 0V47L48 94H0V47L48 0H96Z" />
            </svg>
            Flowrift
          </a> */}
          {/* <!-- logo - end -->

      <!-- nav - start --> */}
          <nav className="hidden gap-12 lg:flex">
            <a href="#" className="text-lg font-semibold text-indigo-500">
              Admin
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Doctor
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              User
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </a>
            <a
              href="#"
              className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Contact
            </a>
          </nav>
          {/* <!-- nav - end --> */}

          {/* <!-- buttons - start --> */}
          <a
            href="#"
            className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-bold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
          >
            More
          </a>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            Menu
          </button>
          {/* <!-- buttons - end --> */}
        </header>

        <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
          {/* <!-- image - start --> */}
          <img
            src={wall}
            loading="lazy"
            alt="wallpaper"
            // className="absolute inset-0 h-full w-full object-cover object-center"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
          />
          {/* <!-- image - end --> */}

          {/* <!-- overlay - start --> */}
          <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>
          {/* <!-- overlay - end --> */}

          {/* <!-- text start --> */}
          <div className="relative flex flex-col items-center p-4 sm:max-w-xl">
            <p className="mb-4 text-center text-lg text-indigo-200 sm:text-xl md:mb-8">
              Very proud to introduce
            </p>
            <h1 className="mb-8 text-center text-4xl font-bold text-white sm:text-5xl md:mb-12 md:text-6xl">
             Hopital Mangement System
            </h1>

            <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Start now
              </a>

              <a
                href="#"
                className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
              >
                Take tour
              </a>
            </div>
          </div>
          {/* <!-- text end --> */}
        </section>
      </div>
      {/* ------------------------------------------------------------- cards ----------------------------------- */}
<div className='flex justify-around mt-6'>
      <div className="card w-96 bg-base-100 shadow-xl">
  {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
  <figure><img src={admin} alt=""  width={226.75} height={384}/></figure>
  <div className="card-body">
    <div className="w-full flex justify-center">
    <h2 className="card-title ">Admin</h2></div>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    
    <div className="card-actions">
      {/* <button className="btn btn-primary w-full font-black">View</button> */}
      <button className="btn btn-primary w-full font-black hover:text-black hover:font-bold">View</button>

    </div>
  </div>
</div>
      <div className="card w-96 bg-base-100 shadow-xl">
  {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
  <figure><img src={doctor} alt=""  width={226.75} height={384}/></figure>
  <div className="card-body">
  <div className="w-full flex justify-center">
    <h2 className="card-title ">Doctor</h2></div>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions ">
      {/* <button className="btn btn-primary w-full font-black ">View</button> */}
      <button className="btn btn-primary w-full font-black hover:text-black hover:font-bold">View</button>

    </div>
  </div>
</div>
      <div className="card w-96 bg-base-100 shadow-xl">
  {/* <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
  <figure><img src={user} alt=""  width={226.75} height={384}/></figure>
  <div className="card-body">
  <div className="w-full flex justify-center">
    <h2 className="card-title">Patient</h2></div>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions ">
      {/* <button className="btn btn-primary w-full font-black">View</button> */}
      <button className="btn btn-primary w-full font-black hover:text-black hover:font-bold">View</button>

    </div>
  </div>
</div>
</div>


<footer className="footer footer-center p-4 bg-base-300 text-base-content fixed bottom-0 left-0 w-full z-50">
  <aside>
    <p>Copyright © 2024 - Developed By Aboobacker Sidheeque K</p>
  </aside>
</footer>
    </div>
  )
}

export default Home
