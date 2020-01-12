import React, { useState } from 'react';

function Watercolor() {
  const [Images] = useState([
    {
      id: 1,
      pic: require('../watercolor/cactus.jpg')
    },
    {
      id: 2,
      pic: require('../watercolor/dream-catcher.jpg')
    },
    {
      id: 3,
      pic: require('../watercolor/elephant.jpg')
    },
    {
      id: 4,
      pic: require('../watercolor/Giraffe-1.jpg')
    },
    {
      id: 5,
      pic: require('../watercolor/horse.jpg')
    },
    {
      id: 6,
      pic: require('../watercolor/lake.jpg')
    },
    {
      id: 7,
      pic: require('../watercolor/new-horse.jpg')
    },
    {
      id: 8,
      pic: require('../watercolor/plane-2.jpg')
    },
    {
      id: 9,
      pic: require('../watercolor/plane-3.jpg')
    },
    {
      id: 10,
      pic: require('../watercolor/queen-bee.jpg')
    },
    {
      id: 11,
      pic: require('../watercolor/rhino-1.jpg')
    },
    {
      id: 12,
      pic: require('../watercolor/zebra.jpg')
    }
  ]);
  return (
    <div className="container">
      <div className=" justify-center flex flex-wrap">
        {Images.map(Image => (
          <div key={Image.id}>
            <img className="w-auto h-64 m-3" src={Image.pic} alt="sketch" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Watercolor;
