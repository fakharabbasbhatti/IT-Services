import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaMapMarkedAlt, FaHeadset, FaSmile } from 'react-icons/fa';

const statsData = [
  {
    id: 1,
    title: 'Years of Experience',
    count: 10,
    suffix: '+',
    icon: <FaBriefcase className="text-white text-2xl sm:text-3xl" />,
    bg: 'bg-[#a17d29]',
  },
  {
    id: 2,
    title: 'Destinations',
    count: 500,
    suffix: 'k',
    icon: <FaMapMarkedAlt className="text-white text-2xl sm:text-3xl" />,
    bg: 'bg-[#a17d29]',
  },
  {
    id: 3,
    title: 'Customer Support',
    count: 24,
    suffix: '/7',
    icon: <FaHeadset className="text-white text-2xl sm:text-3xl" />,
    bg: 'bg-[#a17d29]',
  },
  {
    id: 4,
    title: 'Happy Clients',
    count: 98,
    suffix: '%',
    icon: <FaSmile className="text-white text-2xl sm:text-3xl" />,
    bg: 'bg-[#a17d29]',
  },
];

const StatCard = ({ title, count, suffix, icon, bg }) => {
  const ref = useRef();
  const [currentCount, setCurrentCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = count;
          const duration = 1000;
          const increment = end / (duration / 20);

          const counter = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCurrentCount(end);
              clearInterval(counter);
            } else {
              setCurrentCount(Math.ceil(start));
            }
          }, 20);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [count, hasAnimated]);

  return (
<div
  ref={ref}
  className="group flex flex-col items-center text-center md:items-start md:text-left space-y-3"
>
  <div
    className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full ${bg} transition-transform duration-500 group-hover:rotate-[360deg]`}
  >
    {icon}
  </div>
  <div className="text-white text-base sm:text-lg font-medium">{title}</div>
  <div className="text-3xl sm:text-4xl font-bold text-[#a17d29]">
    {currentCount}
    {suffix}
  </div>
</div>
  );
};

const ClientRivew = () => {
  return (
    <div className="bg-[#0c1c26] max-w-7xl mx-auto py-12 px-6 sm:px-8 lg:px-16 md:rounded-3xl mt-0 md:mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {statsData.map((stat) => (
          <StatCard
            key={stat.id}
            title={stat.title}
            count={stat.count}
            suffix={stat.suffix}
            icon={stat.icon}
            bg={stat.bg}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientRivew;
