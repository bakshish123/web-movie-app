import React from 'react'
import search from '../assets/svg/search.svg'
import bell from '../assets/svg/bell.svg'

const TopNavbar = () => {
  return (
    <div className='border-2 border-black h-[5rem] w-[72rem] ml-[15rem] absolute flex flex-row text-white'>
        <div >
            <ul className='flex flex-row'>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4">Movies</li>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4">Series</li>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4">Documentaries</li>
            </ul>
        </div>
        <div>
        <ul className='flex flex-row ml-[40rem]'>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4"><img src={search} alt="" /></li>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4"><img src={bell} alt="" /></li>
                <li className="text-white text-base font-medium font-['Poppins'] leading-[18px] m-4">Tetiana</li>
            </ul>
        </div>
    </div>
  )
}

export default TopNavbar