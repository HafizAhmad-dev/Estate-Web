import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-around items-center text-white py-4'>
      <img src="./assets/logo.svg" alt="logo" className='' />
      <ul className='flex gap-4 text-md font-semibold tracking-wider'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Testimonials</li>
      </ul>
      <button className='bg-white text-black py-2 px-6 rounded-3xl font-semibold'>Sign up</button>
    </header>
  )
}

export default Header
