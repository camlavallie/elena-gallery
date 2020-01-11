import React from 'react'

function Home() {
  return (
    <div className="">
      <div class="flex md:flex-row-reverse flex-wrap md:mr-12 lg:mr-12 ">
        <div class="w-full md:w-8/12 lg:w-8/12 p-4 text-center">
          < div class = "uppercase tracking-wide text-sm text-red-600 font-bold text-lg md:w-6/12 lg:w-6/12"> Hello! </div>
          < p className = "md:w-6/12 lg:w-6/12 " >
            My name is Elena Kathryn LaVallie, I am a blessed and spoiled wife and mother of three littles that bring even greater abundance to my life! I've had a passion for art since I was a child but I lost touch with it for about 15 years. In 2019 I was reaquainted with my love for painting and drawing. I have no formal training, but have been having a blast with it all over again and I'm looking forward to maturing in this skill.  
          </p>
        </div>

        <div class = "w-full md:w-3/12 lg:w-3/12 p-4 text-left text-gray-500" >
          <img src={require('../watercolor/zebra.jpg')} alt=""/>
        </div>
      </div>
< div class = "bg-blue-100 mt-12 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
role = "alert" >
  <p class="font-bold">ATTENTION!</p>
  <p class="text-sm">This site is under construction. In the meantime enjoy skethches and watercolor created by Elena Kathryn!</p>
  <a href="/gallery"><button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-3">
  Sketches
</button></a>
  <a href="/watercolor"><button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Watercolor
</button></a>
</div>
    </div>
  )
}

export default Home;
