import React from 'react'

function Cards() {
  return (
    <>
  {/* <!-- Cards Starts --> */}
  <div className="cards">
    <div className="top-four-card xsm:flex xsm:justify-center  xsm:flex-wrap">
      <div className="card1 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Laptop-5-Platinum-Alcantara-FY23HOL?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description mx-4">
          <div
            className="text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-10 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
              New
            </div>
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 text-red-800 text-base font-medium py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="card2 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Microsoft-365-FY23HOL?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-2xl font-normal my-1">Microsoft 365</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <div className="links">
              <button className="my-2 text-red-800 text-sm font-medium py-2">
                For one person
              </button>
              <button className="my-2 text-red-800 text-sm font-medium px-4 py-2">
                For up to six people
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card3 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-PC-SMB-OneNote?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description mt-10">
          <div
            className="text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-2xl font-normal my-1">One Note</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 text-red-800 text-sm font-medium py-2">
              For one person
            </button>
          </div>
        </div>
      </div>
      <div className="card4 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Windows11-GlobalLaunch?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-2xl font-normal my-1">
              Designed for life today - and tomorrow
            </div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 text-red-800 text-sm font-medium py-2">
              See if your PC is ready
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="full-card-on-lg-devices ">
      <div className="card5 my-4 flex flex-col">
        <img className=" h-[60%] object-cover mx-4"
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-MSFT-hero-Edge:VP1-539x440" alt="" />
        <div className="description mt-10 mx-4">
          <div
            className="left text-start bg-white px-4 py-4 mx-auto w-[96%] md:flex-row   mdx:-mt-[8rem] mdx:shadow-md mdx:shadow-white  lgx:-mt-[21rem] lgx:w-[40%] lgx:mx-4 ">
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 bg-black text-white text-sm font-medium px-4 py-2">
              Downlode now
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="text-2xl font-medium my-4 mx-4 md:text-center md:mt-14">For business</div>
    <div className="bottom-four-card xsm:flex xsm:justify-center  xsm:flex-wrap">
      <div className="card1 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Surface-Family-2022-M2-1?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
              New
            </div>
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="card2 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Content-Card-Windows-11-Business?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
              New
            </div>
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="card3 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-M365-CP-Microsoft365-Commercial?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
              New
            </div>
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="card4 mx-4 my-4 xsm:w-[40%] lgx:w-[20%]">
        <img
          src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/gldn-CP-Microsoft-Teams-Commercial?wid=515&hei=293&fit=crop"
          alt="" />
        <div className="description">
          <div
            className="left text-start mt-4 md:flex-row mdx:w-[96%] mdx:mx-3 mdx:-my-10 mdx:pt-10 mdx:pb-7 lgx:mx-auto lgx:my-auto lgx:items-center  ">
            <div className="text-sm font-medium my-1 py-1 px-3 mt-2 bg-red-800 text-white w-fit">
              New
            </div>
            <div className="text-2xl font-normal my-1">Surface Pro 9</div>
            <p className="my-2 text-sm">
              Tablet versatility and laptop power — all in one ultra-portable
              device Tablet versatility and laptop power — all in one
              ultra-portable device
            </p>
            <button className="my-2 bg-[#0067b8] text-white text-sm font-medium px-4 py-2">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Cards Ends --> */}
    </>
  )
}

export default Cards