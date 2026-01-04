import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';
import { Star, CheckCircle2 } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform duration-500 cursor-pointer border border-pink-100">
    {/* Avatar with Verified Badge */}
    <div className="relative mb-6">
      <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-pink-200 shadow-xl">
        <img 
          src={review.avatar} 
          alt={review.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white">
        <CheckCircle2 className="text-white w-6 h-6" />
      </div>
    </div>

    {/* Name & Info */}
    <h3 className="text-2xl font-bold text-pink-800 mb-1">{review.name}</h3>
    <p className="text-pink-600 font-semibold mb-4">{review.role} • {review.location}</p>

    {/* Stars */}
    <div className="flex gap-1 mb-6">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-6 h-6 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>

    {/* Quote */}
    <blockquote className="text-lg italic text-gray-700 leading-relaxed">
      "{review.quote}"
    </blockquote>
  </div>
);

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const staticTestimonials = [
      {
        id: 1,
        name: "Rahim Ahmed",
        role: "Import Business Owner",
        location: "Dhaka, Bangladesh",
        rating: 5,
        quote: "Alpha Global Trade's one-click import has saved me hours every week. Sourcing luxury watches from Switzerland is now seamless and fully secure — best decision for my business!",
        avatar: "https://media.istockphoto.com/id/185238296/photo/male-business-professional.jpg?s=612x612&w=0&k=20&c=jvHNYcZGwJN7n3e2V7cAXrKvz_lcKikQChfoP6GfhRM=",
      },
      {
        id: 2,
        name: "Fatema Khatun",
        role: "E-commerce Entrepreneur",
        location: "Chattogram, Bangladesh",
        rating: 5,
        quote: "The real-time dashboard and quantity updates are game-changers. I've expanded my perfume imports from France dramatically — highly recommend this platform to all traders!",
        avatar: "https://static.vecteezy.com/system/resources/previews/048/002/580/large_2x/confident-bangladeshi-businesswoman-portrait-in-formal-brown-suit-for-professional-use-and-diversity-representation-photo.jpg",
      },
      {
        id: 3,
        name: "Karim Uddin",
        role: "Wholesale Importer",
        location: "Sylhet, Bangladesh",
        rating: 5,
        quote: "Secure Firebase authentication gave me full trust from day one. Importing Italian leather goods has never been easier — transparent, fast, and reliable!",
        avatar: "https://media.gettyimages.com/id/171237962/photo/male-business-professional.jpg?s=612x612&w=gi&k=20&c=piJI3IXNgcoDgItm3LaRGhQ-wCaTkMc31EQ1pkhewAY=",
      },
      {
        id: 4,
        name: "Sumi Akter",
        role: "Retail Store Owner",
        location: "Khulna, Bangladesh",
        rating: 5,
        quote: "Browsing thousands of verified global products and adding to 'My Imports' with one click is incredibly simple. This platform has grown my jewelry business exponentially!",
        avatar: "https://static.vecteezy.com/system/resources/previews/048/002/584/large_2x/confident-elderly-bangladeshi-businesswoman-posing-with-arms-crossed-in-formal-attire-for-professional-portrait-photo.jpg",
      },
      {
        id: 5,
        name: "Abdul Rahman",
        role: "Export-Import Consultant",
        location: "Rajshahi, Bangladesh",
        rating: 5,
        quote: "Connected with trusted suppliers from Germany and Australia instantly. The detailed product views and ratings make informed decisions easy — outstanding platform!",
        avatar: "https://img.freepik.com/premium-photo/office-portrait-agent-happy-business-man-manager-leader-smile-startup-company-success-management-corporate-employee-face-bangladesh-worker-businessman-professional-designer_590464-167274.jpg",
      },
      {
        id: 6,
        name: "Nasrin Begum",
        role: "Online Marketplace Seller",
        location: "Barisal, Bangladesh",
        rating: 5,
        quote: "As a new importer, the origin info and secure checkout gave me confidence. Successfully scaled my cosmetics imports — Alpha Global Trade is truly revolutionary!",
        avatar: "https://static.vecteezy.com/system/resources/previews/048/002/356/large_2x/confident-bangladeshi-businesswoman-in-professional-attire-suitable-for-corporate-use-marketing-and-diverse-workplace-representation-photo.jpg",
      },
    ];

    setTestimonials(staticTestimonials);
  }, []);

  if (testimonials.length === 0) {
    return <p className="text-center py-20 text-gray-500">Loading testimonials...</p>;
  }

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600 mb-4">
            What Our Traders Say 
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Real experiences from importers and exporters across Bangladesh
          </p>
        </div>

      
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 15,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <ReviewCard review={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;