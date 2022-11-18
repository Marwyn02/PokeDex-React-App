import React from 'react'

const ArrowLeft = () => {
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center py-0.5 md:py-1.5">
            <div className="group-active:-translate-x-1 group-active:md:-translate-x-4 duration-100 flex items-center mx-3.5 my-2 sm:my-0 sm:mx-auto text-center h-5 w-5 md:h-8 md:w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                </svg>
            </div>
            <p className="pr-3 md:pr-7 text-sm text-white/80 group-hover:text-white/95 duration-300 hidden sm:block">Prev page</p>
        </div>
    </>
  )
}

export default ArrowLeft