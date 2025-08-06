import React, { useEffect, useRef, useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    title: 'Marketing Director, TechCorp',
    quote:
      'The service was exceptional from start to finish. The team went above and beyond to deliver exactly what we needed.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    title: 'CTO, InnovateSoft',
    quote:
      "We've seen a 40% increase in productivity since implementing their solution. The onboarding process was seamless.",
    image:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4.5,
  },
  {
    name: 'Emma Rodriguez',
    title: 'CEO, DesignHub',
    quote:
      "Their attention to detail and customer support is unmatched. We've partnered with them for all our digital needs.",
    image:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 4,
  },
  {
    name: 'David Wilson',
    title: 'Operations Manager, GlobalLogix',
    quote:
      'The ROI was evident within the first quarter. Their platform has become indispensable to our operations.',
    image:
      'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&h=200&q=80',
    rating: 5,
  },
];

const getStars = (rating) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return [
    ...Array(full).fill(<FaStar />),
    ...(half ? [<FaStarHalfAlt />] : []),
    ...Array(5 - full - (half ? 1 : 0)).fill(<FaRegStar />),
  ];
};

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const intervalRef = useRef();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3);
      else if (window.innerWidth >= 768) setVisibleCards(2);
      else setVisibleCards(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % (testimonials.length - visibleCards + 1));
  };

  const prevSlide = () => {
    setCurrent(
      (prev) =>
        (prev - 1 + (testimonials.length - visibleCards + 1)) %
        (testimonials.length - visibleCards + 1)
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 6000);
    return () => clearInterval(intervalRef.current);
  }, [visibleCards]);

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="mx-auto w-24 h-1 bg-[#a17d29] rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from professionals who’ve experienced our solutions first-hand.
          </p>
        </div>

        <div className="relative">
          <button
  className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 
             rounded-full bg-white shadow-lg text-gray-600 
             hover:bg-[#a17d29] hover:text-white 
             transition-colors duration-300
+            flex items-center justify-center"
  onClick={prevSlide}
>
  <FaChevronLeft />
</button>

<button
  className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 
             rounded-full bg-white shadow-lg text-gray-600 
             hover:bg-[#a17d29] hover:text-white 
             transition-colors duration-300
+            flex items-center justify-center"
  onClick={nextSlide}
>
  <FaChevronRight />
</button>


          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                width: `${(100 * testimonials.length) / visibleCards}%`,
                transform: `translateX(-${current * (100 / testimonials.length)}%)`,
              }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="p-4 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 h-full hover:shadow-2xl transition-all duration-300">
                    <div className="flex text-yellow-400 gap-1 mb-3 text-lg">
                      {getStars(t.rating).map((star, j) => (
                        <span key={j}>{star}</span>
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.quote}"</p>
                    <div className="flex items-center">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#a17d29] mr-4"
                      />
                      <div>
                        <h4 className="text-gray-800 font-semibold">{t.name}</h4>
                        <p className="text-sm text-gray-500">{t.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {Array.from({ length: testimonials.length - visibleCards + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-transform duration-300 ${
                  i === current
                    ? 'bg-[#a17d29] scale-125 shadow-sm'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
