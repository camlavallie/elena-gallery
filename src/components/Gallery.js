import React, {useState} from 'react'

function Gallery() {
  const [Images] = useState([
    {
      id: 1,
      pic: require('../sketches/lion.jpg')
    },
    {
      id: 2,
      pic: require('../sketches/Elk.jpg')
    },
    {
      id: 3,
      pic: require('../sketches/bull.jpg')

    },
    {
      id: 4,
      pic: require('../sketches/llama.jpg')
    },
    {
      id: 5,
      pic: require('../sketches/Rabbit.jpg')
    },
    {
      id: 6,
      pic: require('../sketches/kuala.jpg')
    },
    {
      id: 7,
      pic: require('../sketches/Deer.JPG')
    },
    {
      id: 8,
      pic: require('../sketches/Owl.JPG')
    },
    {
      id: 9,
      pic: require('../sketches/Raccoon.JPG')
    },
    {
      id: 10,
      pic: require('../sketches/Tiger.jpg')
    },
    {
      id: 11,
      pic: require('../sketches/Wolf.JPG')
    },
    {
      id: 12,
      pic: require('../sketches/Bear.JPG')

    },
  ])
  return (
    <div className="container">
      <div className=" justify-center flex flex-wrap">
      {Images.map(Image => (
        <div key={Image.id}>
            <img className="w-64 h-auto m-3" src={Image.pic} alt="sketch"/>
        </div>
      ))}
      </div>
      </div>

  )
}

export default Gallery
