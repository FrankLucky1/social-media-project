import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex w-full h-screen lg:p-16 relative">
      {/* nav */}
      <div className='lg:w-[1200px] w-full mx-auto absolute top-0 flex items-center justify-start gap-8 lg:gap-24 p-4 lg:py-8'>
        <h1 className='font-bold text-rose-600 lg:text-xl'>Wunmi Debbiz</h1>
        <div className='flex gap-3 items-center max-sm:hidden'>
          <span className='hover:mb-1 w-26 text-center cursor-pointer  duration-100 ease-in'>Join Us</span>
          <p>or</p>
          <span className='text-white hover:font-semibold w-28 text-center cursor-pointer rounded-md py-2 bg-gradient-to-br from-purple-500 via-purple-400 to-violet-400  duration-100 ease-in'>Share a post</span>
        </div>
      </div>
      {/* nav */}


      <div className='w-full flex max-md:flex-col h-full items-center justify-center lg:justify-between max-sm:px-3 max-sm:pt-16'>
        <div className='flex gap-4 lg:py-12 flex-1 flex-col items-start justify-center h-full w-full'>
          <h1 className='text-6xl max-md:text-2xl font-extrabold text-slate-800'>Like comment share <br /> and subscribe</h1>
          <p className='text-gray-400 mb-10'>Spread your love and creative beauty into our social life wherever you are.</p>
          <div className='flex'>
            <button className='px-10 py-4 rounded-full font-semibold shadow-2xl bg-gradient-to-br from-purple-500 via-purple-400 to-violet-400 hover:bg-blue-600 text-white '>Share a post</button>

          </div>
        </div>
        <div className='w-full h-full lg:flex-[1.3] flex items-center justify-center'>
            <Image src={'/social2.png'} width={720} height={820} className='w-full h-full max-md:w-[95%] max-sm:object-cover max-md:h-[70%]'/>
        </div>
      </div>
      <div>
      <svg className='animate-pulse absolute  max-md:hidden bottom-[20%] -rotate-12 left-[20%]' xmlns="http://www.w3.org/2000/svg" height="32" width="38" viewBox="0 0 576 512"><path fill="red" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5zM576 368a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-76.7-43.3c6.2 6.2 6.2 16.4 0 22.6l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0z"/></svg>

      <svg className='animate-pulse absolute top-[40%] left-[30%] lg:top-[20%] rotate-12 lg:left-[40%]' xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512"><path fill="darkblue" d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"/></svg>
      
      <svg className='animate-pulse absolute max-md:hidden top-[20%] left-[5%] lg:top-[15%] rotate-12 lg:left-[10%]' xmlns="http://www.w3.org/2000/svg" height="30" width="35" viewBox="0 0 640 512"><path fill="#99beff" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg>
      </div>

    </main>
  )
}
