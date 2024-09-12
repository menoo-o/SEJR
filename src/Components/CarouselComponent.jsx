import {useState} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import QuantitySelector from './QuantitySelector';
import '../App.css'; // Make sure to include your custom styles

const CarouselComponent = ({ items }) => {

    const [selectedWeights, setSelectedWeights] = useState({});

    const handleWeightClick = (index, weight) => {
        setSelectedWeights((prevWeights) => ({ ...prevWeights, [index]: weight }));
    };
        

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    return (
        <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[]}   // Show arrows on all devices
            itemClass="carousel-item"
            centerMode={false}
        >
            {items.map((item, index) => (
                <div key={index} className="new-arrival-item">
                    <img src={item.imgSrc} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
           

                    <button className="add-to-cart-btn">Explore</button>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
