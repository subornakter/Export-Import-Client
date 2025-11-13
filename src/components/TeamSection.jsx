import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules"; // ✅ Autoplay added
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Jocelyn Schieffer",
    role: "Software Engineer",
    description:
      "Specializes in building scalable web applications and improving UX design.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "John Doe",
    role: "Project Manager",
    description:
      "Ensures projects are delivered on time and coordinates between teams.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    description:
      "Focuses on creating intuitive interfaces that delight users.Best UI/UX designer award 2023.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Michael Brown",
    role: "Frontend Developer",
    description:
      "Expert in React and building responsive front-end applications.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Emily Davis",
    role: "Backend Developer",
    description:
      "Builds robust APIs and ensures database performance is top-notch.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
];

const TeamSection = () => {
  return (
    <section className="py-14 px-6 max-w-7xl mx-auto   text-center">
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Meet the Company <span className="text-pink-600">Team Members</span>
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        Our talented professionals bring their expertise and passion to every project.
      </p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // ✅ Autoplay included
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500, // 2.5 seconds per slide
          disableOnInteraction: false, // keeps autoplay after user interaction
        }}
        speed={1000} // smooth transition speed (1s)
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition duration-300">
              <img
                src={member.img}
                alt={member.name}
                className="w-30 h-30 object-cover rounded-full border-2 border-pink-500 mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-red-600 font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm mb-4">{member.description}</p>

              {/* Social Icons */}
              <div className="flex justify-center gap-4 text-lg">
                <a
                  href={member.social.facebook}
                  className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebookF />
                </a>
                <a
                  href={member.social.twitter}
                  className=" transition"
                >
                  <FaXTwitter />
                </a>
                <a
                  href={member.social.instagram}
                  className="text-pink-500 hover:text-pink-700 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;

