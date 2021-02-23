import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Privacy() {
  return (
    <div className="">
      <Head>
        <title>Live Rail for HSR</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="mx-auto my-auto bg-yellow-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 h-screen lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className="space-y-5">
            <h2 className=" tracking-tight text-gray-900">
              <span className="font-semibold block text-6xl text-yellow-500">
                Live Rail for HSR
              </span>
              <span className="font-extralight block text-4xl text-yellow-900 italic">
                Timetable and Departure Board
              </span>
            </h2>
            <span className="inline-block">
              <a
                href="https://apps.apple.com/app/live-rail-for-hsr/id1550589269"
                className="block"
              >
                <img
                  src="/appstore.svg"
                  className="block"
                  alt="download on appstore"
                />
              </a>
            </span>
          </div>

          {/* Image can go here */}
          <img
            src="/dualscreen.png"
            alt="screenshot of liverail hsr on iphone"
            width="500px"
          />
        </div>
      </div>

      {/* 2 */}
      <div className="my-auto bg-yellow-500">
        <div className="max-w-7xl py-12  h-screen lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div className=" px-4 sm:px-6">
            <div className=" tracking-tight text-gray-900 space-y-6">
              <h2 className="font-semibold text-5xl block">Features</h2>
              <h2 className=" space-x-4">
                <span className="font-bold text-3xl">Departure board</span>
                <span className="font-normal text-3xl">Station dots</span>
                <span className="font-light text-3xl">Ticket pricing</span>
                <span className="font-medium text-3xl">Availability</span>
                <span className="font-normal text-3xl">
                  More features to come
                </span>
                <span className="font-bold text-3xl">Search for trains</span>
                <span className="font-light text-3xl">Haptics</span>
                <span className="font-medium text-3xl">
                  Nearest&nbsp;station
                </span>
                <span className="font-normal text-3xl">User friendly</span>
                <span className="font-semibold text-3xl">
                  English & Chinese
                </span>
                <span className="font-normal text-3xl">SwiftUI</span>
                <span className="font-light text-3xl">Easy to use</span>
                <span className="font-medium text-3xl">Frequent updates</span>
                <span className="font-bold text-3xl">Free</span>
                <span className="font-medium text-3xl">Ad-free</span>
              </h2>
              <div className="space-y-1">
                <a href="/privacy">
                  <h4 className="font-light text-base block">Privacy Policy</h4>
                </a>
                <a href="/support">
                  <h4 className="font-light text-base block">Support</h4>
                </a>
              </div>
            </div>
          </div>

          {/* Image can go here */}
          <img
            src="/manyscreens.png"
            alt="many more screenshots"
            className="hidden lg:block h-screen"
          />

          <img
            className="invisible sm:visible"
            src="/multihorizontal.png"
            alt="many more screenshots"
            className="block lg:hidden w-screen"
          />
        </div>
      </div>
    </div>
  );
}
