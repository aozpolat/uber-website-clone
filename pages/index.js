import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [photo, setPhoto] = useState("first");
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins"
          rel="stylesheet"
        />
      </Head>

      <main>
        <nav className="bg-black text-gray-100 h-16 flex px-28 py-3 justify-between font-uber ">
          {/*Left part of the nav*/}
          <div className="flex items-center ml-2 ">
            <div className="mr-6  ">
              <a className="hover:cursor-pointer text-2xl font-normal ">Uber</a>
            </div>
            <div>
              <ul className="flex items-center text-sm font-medium  leading-4">
                <li>
                  <button className="font-medium flex py-2.5 px-3 rounded-full hover:bg-gray-800 transition duration-200">
                    Company
                    <div className="ml-2">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M18 8v3.8l-6 4.6-6-4.6V8l6 4.6L18 8z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </li>
                <li className=" rounded-full py-2.5 px-3 hover:bg-gray-800 transition duration-200 hover:cursor-pointer">
                  <a>Safety</a>
                </li>
                <li className=" rounded-full py-2.5 px-3 hover:bg-gray-800 transition duration-200 hover:cursor-pointer">
                  <a>Help</a>
                </li>
                <li className=" rounded-full py-2.5 px-3 hover:bg-gray-800 transition duration-200 hover:cursor-pointer">
                  <a>COVID-19 resources</a>
                </li>
              </ul>
            </div>
          </div>

          {/*Right part of the nav*/}
          <div className="flex  items-center text-sm  mr-3">
            <ul className="flex  space-x-1 leading-4">
              <li>
                <button className="flex items-center font-medium py-2.5 px-3 rounded-full hover:bg-gray-800 transition duration-200">
                  <div className="mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 1C5.9 1 1 5.9 1 12s4.9 11 11 11 11-4.9 11-11S18.1 1 12 1zm8 11c0 .7-.1 1.4-.3 2-.6-1.5-1.6-3.1-3-4.7l1.8-1.8c1 1.3 1.5 2.8 1.5 4.5zM6.5 6.5c1.3 0 3.6.8 6 2.9l-3.2 3.2C7.1 9.8 6.5 7.5 6.5 6.5zm8.1 5c2.3 2.7 2.9 5 2.9 6-1.3 0-3.6-.8-6-2.9l3.1-3.1zm1.9-6.1l-1.9 1.9c-1.6-1.4-3.2-2.4-4.7-3 .7-.2 1.3-.3 2-.3 1.8 0 3.3.5 4.6 1.4zM4 12c0-.7.1-1.4.3-2 .6 1.5 1.6 3.1 3 4.7l-1.8 1.8C4.5 15.2 4 13.7 4 12zm3.5 6.6l1.9-1.9c1.6 1.4 3.2 2.4 4.7 3-.7.2-1.3.3-2 .3-1.8 0-3.3-.5-4.6-1.4z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  EN
                </button>
              </li>
              <li>
                <button className="flex items-center font-medium  py-2.5 px-3 rounded-full hover:bg-gray-800 transition duration-200">
                  <div className="mr-3">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.66671 3C0.930328 3 0.333374 2.40305 0.333374 1.66667C0.333374 0.930286 0.930328 0.333333 1.66671 0.333333C2.40309 0.333333 3.00004 0.930287 3.00004 1.66667C3.00004 2.40305 2.40309 3 1.66671 3ZM7.00004 3C6.26366 3 5.66671 2.40305 5.66671 1.66667C5.66671 0.930287 6.26366 0.333333 7.00004 0.333333C7.73642 0.333333 8.33337 0.930287 8.33337 1.66667C8.33337 2.40305 7.73642 3 7.00004 3ZM12.3334 3C11.597 3 11 2.40305 11 1.66667C11 0.930287 11.597 0.333333 12.3334 0.333333C13.0698 0.333333 13.6667 0.930287 13.6667 1.66667C13.6667 2.40305 13.0698 3 12.3334 3ZM1.66671 8.33333C0.930328 8.33333 0.333374 7.73638 0.333374 7C0.333374 6.26362 0.930328 5.66667 1.66671 5.66667C2.40309 5.66667 3.00004 6.26362 3.00004 7C3.00004 7.73638 2.40309 8.33333 1.66671 8.33333ZM7.00004 8.33333C6.26366 8.33333 5.66671 7.73638 5.66671 7C5.66671 6.26362 6.26366 5.66667 7.00004 5.66667C7.73642 5.66667 8.33337 6.26362 8.33337 7C8.33337 7.73638 7.73642 8.33333 7.00004 8.33333ZM12.3334 8.33333C11.597 8.33333 11 7.73638 11 7C11 6.26362 11.597 5.66667 12.3334 5.66667C13.0698 5.66667 13.6667 6.26362 13.6667 7C13.6667 7.73638 13.0698 8.33333 12.3334 8.33333ZM0.333374 12.3333C0.333374 13.0697 0.930328 13.6667 1.66671 13.6667C2.40309 13.6667 3.00004 13.0697 3.00004 12.3333C3.00004 11.597 2.40309 11 1.66671 11C0.930328 11 0.333374 11.597 0.333374 12.3333ZM5.66671 12.3333C5.66671 13.0697 6.26366 13.6667 7.00004 13.6667C7.73642 13.6667 8.33337 13.0697 8.33337 12.3333C8.33337 11.597 7.73642 11 7.00004 11C6.26366 11 5.66671 11.597 5.66671 12.3333ZM11 12.3333C11 13.0697 11.597 13.6667 12.3334 13.6667C13.0698 13.6667 13.6667 13.0697 13.6667 12.3333C13.6667 11.597 13.0698 11 12.3334 11C11.597 11 11 11.597 11 12.3333Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  Products
                </button>
              </li>
              <li>
                <button className="flex items-center font-medium py-2.5 px-3 rounded-full hover:bg-gray-800 transition duration-200">
                  <div className="mr-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M17.5 6.5c0 3-2.5 5.5-5.5 5.5S6.5 9.5 6.5 6.5 9 1 12 1s5.5 2.5 5.5 5.5zm-3 0C14.5 5.1 13.4 4 12 4S9.5 5.1 9.5 6.5 10.6 9 12 9s2.5-1.1 2.5-2.5zM3 20c0-3.3 2.7-6 6-6h6c3.3 0 6 2.7 6 6v3h-3v-3c0-1.7-1.4-3-3-3H9c-1.6 0-3 1.3-3 3v3H3v-3z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  Log in
                </button>
              </li>
            </ul>
            <button className="rounded-full py-2.5 px-3 bg-gray-100  text-sm text-black  font-medium leading-4  ml-1 hover:bg-gray-300 transition duration-200">
              Sign up
            </button>
          </div>
        </nav>

        <section className="relative w-full h-section1">
          <div className="max-w-screen-xl absolute inset-0 mx-auto z-10">
            <div className="w-full p-16">
              <div className="  w-1/2  ">
                <header className=" relative flex justify-around text-center leading-5  bg-white  bg-opacity-95 border-b border-gray-200">
                  <div
                    onClick={() => setPhoto("first")}
                    className="px-3 pt-7 pb-5 w-28 hover:text-gray-600 hover:cursor-pointer "
                  >
                    <div className="w-6 h-6 mx-auto mb-2">
                      <img
                        src="https://www.uber-assets.com/image/upload/v1558389718/assets/8e/33c8c0-f7e9-467c-924b-c70232943a47/original/Earn-filled.svg"
                        alt="Earn"
                        role="presentation"
                      />
                    </div>
                    <div>Drive or deliver</div>
                  </div>

                  <div
                    onClick={() => setPhoto("second")}
                    className="px-3 pt-7 pb-6 w-28 hover:text-gray-600 hover:cursor-pointer"
                  >
                    <div className="w-6 h-6 mx-auto mb-2">
                      <img
                        src="https://www.uber-assets.com/image/upload/v1542256606/assets/7d/5a4852-3b2a-4466-96de-602dfb62dc1b/original/restaurant-outlined.svg"
                        alt="Restaurant location"
                        role="presentation"
                      />
                    </div>
                    <div className="flex items-center justify-center  h-10">
                      Eat
                    </div>
                  </div>

                  <div
                    onClick={() => setPhoto("third")}
                    className="px-3 pt-7 pb-6 w-28 hover:text-gray-600 hover:cursor-pointer"
                  >
                    <div className="w-6 h-6 mx-auto mb-2">
                      <img
                        src="https://www.uber-assets.com/image/upload/v1542252540/assets/6d/87af17-3970-4d01-8936-1b0ba102ea6e/original/car-front-outlined.svg"
                        alt="Car"
                        role="presentation"
                      />
                    </div>
                    <div className="flex items-center justify-center  h-10">
                      Ride
                    </div>
                  </div>

                  <div
                    className={`bg-black h-1 w-20 bottom-0 left-0 absolute transition duration-500 transform ${
                      photo === "first"
                        ? "translate-x-12"
                        : photo === "second"
                        ? "translate-x-60"
                        : "translate-x-96"
                    }`}
                  ></div>
                </header>
                {/*for the first photo*/}
                <div className={photo === "first" ? `block` : `hidden`}>
                  <div className="  bg-white   p-12 ">
                    <div>
                      <h2 className=" text-5xl font-semibold  leading-snug">
                        Get in the driver's seat and get paid
                      </h2>

                      <p className="py-5">
                        Drive on the platform with the largest network of active
                        riders.
                      </p>
                    </div>
                    <a>
                      <button className=" py-3.5 px-6 bg-black  text-base text-white  font-medium leading-4 mt-2  hover:bg-gray-900 transition duration-200">
                        Sign up to drive
                      </button>
                    </a>
                    <div className="mt-5">
                      <a>
                        <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                          Learn more about driving and delivering
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/*for the second photo*/}
                <div className={photo === "second" ? `block` : `hidden`}>
                  <div className="  bg-white   p-12 ">
                    <div>
                      <h2 className=" text-5xl font-semibold  leading-snug">
                        Discover delicious eats
                      </h2>

                      <p className="py-5">
                        Order delivery from restaurants you love.
                      </p>
                      <div className="flex flex-wrap items-center gap-6">
                        <a>
                          <button className=" py-3.5 px-6 bg-black  text-base text-white  font-medium leading-5 mt-2  hover:bg-gray-900 transition duration-200">
                            Order now
                          </button>
                        </a>

                        <div>
                          <a>
                            <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                              Own a restaurant? Partner with Uber Eats
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*for the third photo*/}
                <div className={photo === "third" ? `block` : `hidden`}>
                  <div className="  bg-white   p-12 ">
                    <div>
                      <h2 className=" text-5xl font-semibold  leading-snug">
                        Request a ride now
                      </h2>
                    </div>

                    <div className=" relative mt-8 mb-3 space-y-2 ">
                      <div className="flex relative">
                        <input
                          name="pickup"
                          type="text"
                          placeholder="Enter pickup location"
                          className="py-2  px-10 flex-1 bg-gray-100 text-black  outline-none h-14  "
                        />

                        <div className=" h-full flex items-center absolute right-4">
                          <svg
                            focusable="false"
                            width="16px"
                            height="16px"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            tabIndex="0"
                            role="button"
                          >
                            <path d="M10.5 13.5L.5 11 21 3l-8 20.5-2.5-10z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex">
                        <input
                          name="destination"
                          type="text"
                          placeholder="Enter destination"
                          className="py-2  px-10 flex-1  bg-gray-100 text-black outline-none h-14"
                        />
                      </div>

                      <div className="absolute left-4 top-5.5 bg-gray-100 border border-black w-2 h-2 rounded "></div>
                      <div className="absolute inset-y-8 left-5 w-px bg-black "></div>

                      <div className="absolute left-4 bottom-5 bg-gray-100 border border-black w-2 h-2  "></div>
                    </div>

                    <div className="flex flex-wrap items-center gap-6">
                      <a>
                        <button className=" py-3.5 px-6 mt-5 bg-black  text-base text-white  font-medium leading-5   hover:bg-gray-800 transition duration-200">
                          Request now
                        </button>
                      </a>

                      <a>
                        <button className=" py-3.5 px-6 mt-5 text-black bg-gray-200  text-base   font-medium leading-5  hover:bg-gray-300 transition duration-200">
                          Schedule for later
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" absolute inset-0 ">
            {/* the first photo }*/}
            <div
              className={`w-full  absolute inset-0 ${
                photo === "first" ? "" : "opacity-0"
              } transition duration-700 ease-in-out  `}
            >
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1613521435/assets/bc/0529b6-c37a-416b-9907-2cb44c4c2888/original/Earner_Home_bg_desktop2x.png"
                alt="Get in the driver's seat and get paid"
                role="presentation"
                className="w-full   "
              />
            </div>

            {/* the second photo*/}
            <div
              className={`w-full  absolute inset-0 ${
                photo === "second" ? "" : "opacity-0"
              } transition duration-700 ease-in-out `}
            >
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1613521576/assets/9d/2ff1e0-a207-425a-a1b8-cf40c95d6567/original/Eats_Home_bg_desktop2x.png"
                alt="Eaters opening order"
                role="presentation"
                className="w-full   "
              ></img>
            </div>

            {/* the third photo*/}
            <div
              className={`w-full   absolute inset-0 ${
                photo === "third" ? "" : "opacity-0"
              } transition duration-700 ease-in-out
             `}
            >
              <img
                src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,g_center,w_1899,h_1068/v1613521692/assets/d9/ce6c00-32b0-4b93-9f0d-6f927d93da08/original/Rider_Home_bg_desktop2x.png"
                alt="Rider getting into car"
                role="presentation"
                className="w-full   "
              />
            </div>
          </div>
        </section>

        {/* second section   */}
        <section>
          <div className=" bg-section2 bg-center bg-cover">
            <div className="max-w-screen-xl mx-auto">
              <div className="p-16">
                <div className="mb-5">
                  <h1 className="text-4xl mb-6 font-semibold">
                    Uber for Business
                  </h1>
                  <p>
                    Transform the way your company moves and feeds its people
                  </p>
                </div>

                <a>
                  <button className=" py-3.5 px-7 bg-black  text-base text-white  font-medium leading-4 mt-3  hover:bg-gray-900 transition duration-200">
                    See how
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*third section */}
        <section>
          <div className="max-w-screen-xl mx-auto">
            <div className="px-16 pb-16 ">
              <h2 className="text-4xl  font-semibold">
                Focused on safety, wherever you go
              </h2>
              <div className="flex flex-wrap justify-between mt-10">
                <div className=" w-12/15">
                  <div>
                    <img
                      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698,h_465/v1613520218/assets/3e/e98625-31e6-4536-8646-976a1ee3f210/original/Safety_Home_Img2x.png"
                      alt="Our commitment to your safety"
                      role="presentation"
                    />
                  </div>
                  <h2 className="text-xl font-semibold my-3">
                    Our commitment to your safety
                  </h2>

                  <p>
                    With every safety feature and every standard in our
                    Community Guidelines, we're committed to helping to create a
                    safe environment for our users.
                  </p>
                  <div className="mt-7 flex space-x-7">
                    <a>
                      <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                        Read about our Community Guidelines
                      </div>
                    </a>
                    <a>
                      <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                        See all safety features
                      </div>
                    </a>
                  </div>
                </div>
                <div className=" w-12/15">
                  <div>
                    <img
                      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_698/v1613520285/assets/c2/91ea9c-90d7-4c36-a740-d7844536694e/original/Cities_Home_Img2x.png"
                      alt="Our commitment to your safety"
                      role="presentation"
                    />
                    <h2 className="text-xl font-semibold my-3">
                      Setting 10,000+ cities in motion
                    </h2>

                    <p>
                      The app is available in thousands of cities worldwide, so
                      you can request a ride even when you’re far from home.
                    </p>
                    <div className="mt-7 ">
                      <a>
                        <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                          View all cities
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* forth section   */}
        <section>
          <div className="max-w-screen-xl mx-auto">
            <div className="p-16 flex flex-wrap justify-between">
              <div className="w-1/3">
                <div>
                  <img
                    src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg"
                    alt="Multiple people"
                    role="presentation"
                  />
                </div>
                <h2 className="text-lg font-medium mt-7 mb-4">About us</h2>
                <p>
                  Find out how we started, what drives us, and how we’re
                  igniting opportunity.
                </p>

                <div className="mt-7 ">
                  <a>
                    <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                      Learn more
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-1/3">
                <div>
                  <img
                    src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg"
                    alt="Multiple people"
                    role="presentation"
                  />
                </div>
                <h2 className="text-lg font-medium mt-7 mb-4">Newsroom</h2>
                <p>
                  See announcements about our latest releases, initiatives, and
                  partnerships.
                </p>

                <div className="mt-7 ">
                  <a>
                    <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                      Learn more
                    </div>
                  </a>
                </div>
              </div>

              <div className="w-1/3">
                <div>
                  <img
                    src="https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_30,h_30/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg"
                    alt="Multiple people"
                    role="presentation"
                  />
                </div>
                <h2 className="text-lg font-medium mt-7 mb-4">
                  Global citizenship
                </h2>
                <p>
                  Read about our commitment to making a positive impact in the
                  cities we serve.
                </p>

                <div className="mt-7 ">
                  <a>
                    <div className="border-b border-gray-300 w-max leading-8 hover:border-gray-600 hover:cursor-pointer transition ease-in-out duration-500">
                      Learn more
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100">
          <div className="max-w-screen-xl mx-auto">
            <div className="p-16">
              <h2 className="text-4xl mb-6 font-semibold">
                There’s more to love in the apps
              </h2>
              <div className="flex mt-10">
                <a href="#" className="flex  w-12/15 bg-white relative">
                  <div className="my-6 ml-6">
                    <img
                      src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_150,h_150/v1618459302/assets/8e/cbcd2e-e7f1-4bd1-ae4e-5343b99ff22f/original/Driver-App-logo.png"
                      alt="Driver App logo"
                      role="presentation"
                    />
                  </div>
                  <div className="p-6  pr-12 flex  items-center">
                    <h2 className="text-2xl  font-semibold">
                      Download the Driver app
                    </h2>
                  </div>

                  <div className="absolute right-6  top-20">
                    <svg
                      focusable="false"
                      width="1em"
                      height="25"
                      fill="currentColor"
                      viewBox="0 0 36 36"
                    >
                      <path
                        d="M18.2354 2H24.2711L36 18L24.2711 34H18.2354L28.1237 20.56H0V15.44H28.1237L18.2354 2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                </a>
                <div className="flex w-2/5"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
