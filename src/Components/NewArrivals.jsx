// NewArrivals.jsx
import React from 'react';
import CarouselComponent from './CarouselComponent';
import Button from './Button';

const newArrivals = [
    { imgSrc: '/new-items/01.png', title: 'Rose Glazed Pendant' },
    { imgSrc: '/new-items/02.png', title: 'Vintage Stone Ring' },
    { imgSrc: '/new-items/03.png', title: 'Rhinestone Orm Chain' },
    { imgSrc: '/new-items/04.png', title: "Lyra's Light" },
    { imgSrc: '/new-items/05.png', title: "Polaris Pulse " },
    
    // Add more items
];

const NewArrivals = () => {
    return (
        <section>
            <div className="heading-items">
                <h1>NEW ARRIVALS</h1>
                <Button />
            </div>
            <CarouselComponent items={newArrivals} />
        </section>
    );
};

export default NewArrivals;
