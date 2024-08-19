import React from 'react'

const PhotoCard = ( {obj} ) => {
  return (
    <div className='w-[22vw]  bg-zinc-800 flex flex-col items-center gap-2 border p-3 '>
        <img src={obj.url} alt="img" className='w-[15vw] h-[15vw] object-cover' />
        <p className='text-white w-full text-center'>{obj.title}</p>
    </div>
  )
}

export default PhotoCard