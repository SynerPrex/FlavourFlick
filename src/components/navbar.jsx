import React from 'react'

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img width={70} src="./logo.png" alt="" />
      <span className="ml-3 text-xl">FlavourFlick</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a href='' className="mr-5 hover:text-gray-900">About</a>
      <a href='https://synerprex.freewebhostmost.com/#contact' className="mr-5 hover:text-gray-900">Contact</a>
      <a href='https://synerprex.freewebhostmost.com/#contact' className="mr-5 hover:text-gray-900">Rate US</a>
    </nav>
    <button onClick={()=>{location.href = "https://synerprex.freewebhostmost.com"}} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Visit SynerPrex
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
  )
}

export default Navbar