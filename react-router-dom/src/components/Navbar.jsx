import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (<>
    <div className='bg-blue-300 text-2xl flex justify-between p-3'>
      logo
    <div className='flex gap-20 '>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/About">About</Link>
    </div>
    </div>

    </>
  )
}

export default Navbar
