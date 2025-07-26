import React from 'react'
import staticimage from './../assets/videoimg.png'
import thumbnail1 from './../assets/thumbnailsample1.png'
import thumbnail2 from './../assets/thumbnailsample2.png'

function VideoPlayer() {
  return (
    <div className='flex flex-wrap w-full h-80 md:h-112  md:w-1/2 rounded-lg bg-[#ffffff3f]'>
        <div className='relative w-full h-full rounded-lg overflow-hidden'>
        <img className='rounded-lg w-full h-full object-cover' src={staticimage} alt="" />
        <span className='absolute  left-2 top-2  md:top-auto md:bottom-2 md:left-1  z-10 bg-[#0b0b0b] text-[#be123c] text-xs px-6 py-1'>Camera - 01</span>
        <div className='absolute bottom-2 right-2 flex gap-2'>
            <div className='flex w-32 flex-col '>
                <span className='flex justify-center bg-[#0b0b0b] text-[#be123c] text-xs'>Camera - 02</span>
                <img src={thumbnail1} alt="" />
            </div>
            <div className='flex w-32 flex-col'>
                <span className='flex justify-center bg-[#0b0b0b] text-[#be123c] text-xs'>Camera - 03</span>
                <img src={thumbnail2} alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default VideoPlayer