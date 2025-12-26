import React from 'react'

const Navbar = () => {
  const scrollview = (id)=>{
    //alert(id)

    document.getElementById(id).scrollIntoView({
      behavior:"smooth",
      block:"start"
    })
  }
  return (
   <>
   <div className='bg-amber-400  flex justify-between '>
    <div className='text-4xl'>
    Logo
   </div>
   <div className='flex gap-7 text-2xl'>
    <button onClick={()=>scrollview("home")}>Home</button>
    <button onClick={()=>scrollview("about")}>About</button>
    <button onClick={()=>scrollview("contact")}>Contact</button>
   </div>
   </div>
   

   
   </>
  )
}

export default Navbar
