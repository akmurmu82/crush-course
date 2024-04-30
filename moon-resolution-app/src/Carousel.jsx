import React, { useState, useEffect } from "react";
import "./Carousel.css"; // Import your CSS file

const Carousel = () => {
  const crushImages = [
    "https://i.postimg.cc/DWkmxQGs/Whats-App-Image-2024-04-16-at-19-49-40-460487ba.jpg",
    "https://i.postimg.cc/9Rc0hWJQ/Whats-App-Image-2024-04-16-at-19-50-06-ed9382d2.jpg",
    "https://i.postimg.cc/7C3hdC1R/Whats-App-Image-2024-04-16-at-19-50-20-9ec4f258.jpg",
    "https://i.postimg.cc/8Jw5kq0B/Whats-App-Image-2024-04-16-at-19-50-46-718499f6.jpg",
    "https://i.postimg.cc/2Vt1ZN80/Whats-App-Image-2024-04-16-at-19-52-48-77bd7e6d.jpg",
  ];
  const images = [
    {
      quality: "144p",
      image:
        "https://cdnb.artstation.com/p/assets/images/images/043/011/785/large/john-wagner-bloodmoon.jpg?1636044195",
    },
    {
      quality: "360p",
      image:
        "https://th.bing.com/th/id/OIP._D6J1J0PYq-8yJKP2UZGzQHaHa?w=1216&h=1216&rs=1&pid=ImgDetMain",
    },
    {
      quality: "480p",
      image:
        "https://th.bing.com/th/id/OIP.stQtgS-7iAC9u7ptPB2RzgAAAA?w=320&h=320&rs=1&pid=ImgDetMain",
    },
    {
      quality: "720p",
      image:
        "https://th.bing.com/th/id/R.f0a226871a4263eabee2e578a03d7742?rik=yiRkh5%2fP%2fHAePg&riu=http%3a%2f%2fwww.nasa.gov%2fsites%2fdefault%2ffiles%2fthumbnails%2fimage%2fopo9914d.jpg&ehk=Y%2frG%2fqs%2fzTPS0Kxc5YBj9Ybnc7LVlc34ohtbtMdkElI%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quality: "1080p",
      image:
        "https://i.postimg.cc/G9htgm4M/Whats-App-Image-2024-04-16-at-19-50-59-ede98857.jpg",
    },
    {
      quality: "1080p",
      image:
        "https://i.postimg.cc/xNCdX6rr/Whats-App-Image-2024-04-16-at-19-52-39-97ea9bc3.jpg",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedQuality, setSelectedQuality] = useState("1080p");

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const handleChange = (event) => {
    setSelectedQuality(event.target.value);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        <img
          src={
            selectedQuality === "1080p"
              ? crushImages[currentSlide]
              : images[currentSlide].image
          }
          alt={`Slide ${currentSlide + 1}`}
        />
      </div>
      <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
      <select value={selectedQuality} onChange={handleChange}>
        <option value="144p">144p</option>
        <option value="360p">360p</option>
        <option value="480p">480p</option>
        <option value="720p">720p</option>
        <option value="1080p">1080p</option>
      </select>
    </div>
  );
};

export default Carousel
