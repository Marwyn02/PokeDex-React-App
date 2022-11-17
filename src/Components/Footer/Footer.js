import React from 'react'

const Footer = () => {
  return (
   <>
    <div className='pt-7 pb-9 bg-black/90 text-center text-sm '>
        <p className='text-white/80 mb-1.5'>Design and developed by: <span className='font-semibold'>Marwyn Sumargo</span></p>
        <div className=' gap-2 text-white/50 flex justify-center '>
            <p>@PokeAPI</p>
            <p className="mx-1.5">@ReactJS</p>
            <p>@Tailwind</p>
        </div>
    </div>
   </>
  )
}

export default Footer