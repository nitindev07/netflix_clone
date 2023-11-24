import React, { useState,useEffect } from 'react'
import axios from 'axios'
import Movie from './Movie'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, id}) => {
  const [movies, setMovies]=useState([])
  useEffect(()=>{
    axios.get(fetchURL)
    .then(response => setMovies(response.data.results))
  
},[fetchURL]);

  const scrollLeft = () =>{
    const slider = document.getElementById('slider' + id)
    slider.scrollLeft= slider.scrollLeft -500;
  }
  const scrollRight = () =>{
    const slider = document.getElementById('slider' + id)
    slider.scrollLeft= slider.scrollLeft +500;
  }

  return (
    <div>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'>
      <MdChevronLeft onClick={scrollLeft} className='bg-gradient-to-r from-black h-full absolute left-0 z-20 opacity-0 cursor-pointer group-hover:opacity-100' size={40}/>
        <div id={'slider' + id} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide'>
          {movies.map((item,id) =>(
            <Movie item={item} key={id}/>
            ))}
        </div>
      <MdChevronRight onClick={scrollRight} className='bg-gradient-to-l from-black h-full absolute right-0  z-20 opacity-0 cursor-pointer group-hover:opacity-100' size={40}/>
      </div>
    </div>
  )
}

export default Row
