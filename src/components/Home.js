import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="container">
        <div className="justify-center mx-12">
          <img
            class="md:w-full"
            src={require('../watercolor/horse.jpg')}
            alt=""
          />
        </div>
        <div class="w-full text-gray-700 text-2xl mb-12">
          <div class="flex items-center justify-center">
            <p className="text-white text-6xl rounded-full bg-red-600 h-32 w-32 underline">Hello</p>
          </div>
          </div>
          < div className = "card shadow-sm w-full text-gray-700 text-2xl p-3" >
          My name is Elena Kathryn LaVallie, I am a blessed and spoiled wife and
          mother of three littles that bring even greater abundance to my life!
          I've had a passion for art since I was a child but I lost touch with
          it for about 15 years. In 2019 I was reaquainted with my love for
          painting and drawing. I have no formal training, but have been having
          a blast with it all over again and I'm looking forward to maturing in
          this skill.{' '}
        </div>
      </div>

      <div
        class="bg-blue-100 mt-12 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
        role="alert"
      >
        <p class="font-bold">ATTENTION!</p>
        <p class="text-sm">
          This site is under construction. In the meantime enjoy skethches and
          watercolor created by Elena Kathryn!
        </p>
        <Link to="/gallery">
          <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mr-3">
            Sketches
          </button>
        </Link>
        <Link to="/watercolor">
          <button class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Watercolor
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
