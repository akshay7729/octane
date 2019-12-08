import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, Button} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons'

const items = [
    {
        src: '/Assets/Carousel/ipad.jpg',
        altText: 'Introducing iPad Pro',
        caption: 'Introducing iPad Pro',
        price: '59,999',
        desc: "The all-screen design means iPad Pro is a magical piece of glass that does everything you need, any way you hold it."
    },
    {
        src: '/Assets/Carousel/mac.jpg',
        altText: 'New Mac Book Pro',
        caption: 'New Mac Book Pro',
        price: '79,999',
        desc: "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made. With an immersive 16-inch Retina display, super-fast processors, next-generation graphics, the largest battery capacity ever in a MacBook Pro"
    },
    {
        src: '/Assets/Carousel/watch.jpg',
        altText: 'All new Apple watch',
        caption: 'All new Apple watch',
        price: '39,999',
        desc: "Stand, Move and Exercise rings visualise the ways you move each day. See if you’re sitting too much. Measure calories burnt. And track how many minutes of exercise you’ve done. You can even share your rings with friends. Try new Activity competitions and let smart coaching give you a nudge when you need it."
    }
];

const Slider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-img" />
        <div className="carousel-caption d-none d-md-block">
            <h3>{item.caption}</h3>
            <p>{item.desc}</p>
            <h4 className="price">*starting at <span><FontAwesomeIcon icon={faRupeeSign} /> {item.price}</span> /-</h4>
            <Button>Buy Now</Button>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="pt-3"
    >
      <CarouselIndicators className="o-indicators" items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
    </Carousel>
  );
}

export default Slider;