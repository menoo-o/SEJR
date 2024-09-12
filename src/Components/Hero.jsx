import '../App.css'; // Import custom styles

const Hero = () => {
  // Use the first carousel item as the hero image
  const heroImage = {
    imgSrc: '/hero.webp',
    text: 'Elegance in every Detail',
  };

  return (
    <div className="hero-carousel">
      <div className="carousel-item">
        <img src={heroImage.imgSrc} alt="Hero Image" className='hero-img' />
        <div className="carousel-text">
          <h2>{heroImage.text}</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
