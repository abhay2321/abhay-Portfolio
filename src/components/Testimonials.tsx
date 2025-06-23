import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

type Testimonial = {
  name: string;
  image: string;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Ayushi Verma',
    image: '/assets/images/ayushi.jpg',
    feedback:
      '“Collaborating with Abhay Chaurasia was an absolute game-changer for our business. Their ability to design and develop a modern, responsive website perfectly aligned with our brand identity...”',
  },
  {
    name: 'Ankit Chaubey',
    image: '/assets/images/ankit.jpg',
    feedback:
      '“I had the pleasure of working alongside Abhay Chaurasia on several frontend projects. Their proficiency in React, Tailwind CSS... A true asset to any team!”',
  },
  {
    name: 'Govind Chaubey',
    image: '/assets/images/govind.jpg',
    feedback:
      '“As a frontend developer, Abhay Chaurasia showcased exceptional skills during their internship at KECHKRITI IIT Kanpur...”',
  },
  {
    name: 'Javed Malik',
    image: '/assets/images/javed.jpg',
    feedback:
      '“What sets Abhay Chaurasia apart as a frontend developer is their keen eye for detail and commitment to delivering pixel-perfect designs...”',
  },
  {
    name: 'Nishant Pandey',
    image: '/assets/images/nishant.jpg',
    feedback:
      '“The WorldAtlus project thrived thanks to Abhay Chaurasia’s frontend expertise. They not only developed a responsive and engaging user interface...”',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="max-w-screen-xl mx-auto pb-7 py-20">
      <h2 className="text-3xl mt-11 mb-10 sm:text-[40px] bg-[#111] sm:w-max relative z-10 font-bold px-4 py-2 mx-auto text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent sm:border-2 border-[rgba(0,98,255,0.47)] rounded-md">
        What my clients are saying?
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper !py-14"
        loop
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="px-4 sm:px-8 md:px-16 lg:px-60">
  <div className="flex flex-col md:flex-row w-full md:max-w-[800px] items-center rounded-lg p-6 sm:p-8 md:p-9 shadow-[0_0px_16px_rgba(96,165,250,0.9)] cursor-grab">
    
    <img
      className="shrink-0 w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[180px] md:h-[180px] rounded-full drop-shadow-[0_0px_7px_rgba(168,85,247,0.95)]"
      src={testimonial.image}
      alt={testimonial.name}
    />

    <div className="testimonial-text text-left pt-6 md:pt-16 relative md:ml-6">
      <p className="text-sm sm:text-base mb-2">{testimonial.feedback}</p>
      <h2 className="text-right bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent font-bold text-xl sm:text-2xl md:text-4xl">
        {testimonial.name}
      </h2>
      <h5 className="text-right text-[#459bd5] text-sm sm:text-base md:text-lg"></h5>
    </div>

  </div>
</SwiperSlide>

        ))}
      </Swiper>
    </section>
  );
}
