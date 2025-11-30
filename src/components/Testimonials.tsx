import React from 'react';
import Slider from 'react-slick';

const testimonials = [
  { name: 'Alice', review: 'This product changed my life!', },
  { name: 'Bob', review: 'Excellent service and support.', },
  { name: 'Charlie', review: 'Highly recommend to everyone!', },
  { name: 'Diana', review: 'An amazing experience!', },
  { name: 'Edward', review: 'Great value for money.', },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="py-16 bg-gray-200">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 text-center">
            <p className="italic">"{testimonial.review}"</p>
            <p className="font-bold mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;