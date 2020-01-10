import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      < nav class = "text-white text-center p-1" >

  <div class="text-black text-center">
    <Link to="/" className="hover:no-underline"><span class="font-semibold text-3xl tracking-tight text-black">Elena Kathryn</span></Link> 
  </div>
 

  <div class="w-full inline block ">
    <div class="text-sm p-1 ">
      < Link to = "/"
      class = "block inline-block mt-0 text-gray-600 hover:text-red-600  hover:no-underline" >
        Home
      </Link>
      < Link to = "/gallery"
      class = "block ml-4 mt-1 inline-block mt-0 text-gray-600 hover:text-red-600  hover:no-underline" >
        Sketches
      </Link>
      <Link to="/watercolor" class="block ml-4 mt-1 inline-block mt-0 text-gray-600  hover:text-red-600  hover:no-underline">
        Watercolor
      </Link>
    </div>
  </div>
  <div class="flex mb-1">
  <div class="w-full bg-red-100 h-1"></div>
</div>
  <div class="flex mb-1">
  <div class="w-full bg-red-100 h-1"></div>
</div>
  <div class="flex mb-4">
  <div class="w-full bg-red-100 h-1"></div>
</div>
</nav>
    </div>
  )
}

export default Navbar
