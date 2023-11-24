import React,{useState} from 'react'
import {FaHeart, FaRegHeart} from 'react-icons/fa'


const Movie = ({item}) => {
  const[like,setLike]=useState(false)

  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block p-2 relative cursor-pointer'>
              <img className='w-full h-full block' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item.title} />
              <div className ='absolute top-1 left-1 w-full h-full px-4 hover:bg-black/50 opacity-0 hover:opacity-100 '>
                <p className='flex items-center whitespace-normal justify-center h-full text-xs md:text-sm'>{item?.title}</p>
                <p>
                  {like ? <FaHeart className='absolute top-4 left-4 text-gray-300'/>:<FaRegHeart className='absolute top-4 left-4 text-gray-300'/>}
                </p>
              </div>
            </div>
  )
}

export default Movie
