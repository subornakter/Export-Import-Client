// TeamSection.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { FaXTwitter } from "react-icons/fa6";
// React Icons
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const teamMembers = [
  {
    name: "Jocelyn Schieffer",
    role: "Software Engineer",
    description: "Specializes in building scalable web applications and improving UX design.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "John Doe",
    role: "Project Manager",
    description: "Ensures projects are delivered on time and coordinates between teams.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Jane Smith",
    role: "UX Designer",
    description: "Focuses on creating intuitive interfaces that delight users.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Michael Brown",
    role: "Frontend Developer",
    description: "Expert in React and building responsive front-end applications.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Emily Davis",
    role: "Backend Developer",
    description: "Builds robust APIs and ensures database performance is top-notch.",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "David Wilson",
    role: "QA Engineer",
    description: "Ensures high-quality products with automated and manual testing.",
    img: "https://randomuser.me/api/portraits/men/6.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Sarah Johnson",
    role: "Data Analyst",
    description: "Turns complex data into actionable insights for the team.",
    img: "https://randomuser.me/api/portraits/women/7.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Chris Lee",
    role: "DevOps Engineer",
    description: "Automates deployments and monitors infrastructure performance.",
    img: "https://randomuser.me/api/portraits/men/8.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
  {
    name: "Anna Kim",
    role: "Product Owner",
    description: "Leads product strategy and ensures alignment with business goals.",
    img: "https://randomuser.me/api/portraits/women/9.jpg",
    social: { facebook: "#", twitter: "#", instagram: "#" },
  },
];

const TeamSection = () => {
  return (
    <div className="team-section py-10 px-5 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-2">
        Meet the Company<span className="text-blue-600"> team Members</span>
      </h2>
      <p className="text-gray-600 mb-8">
        Our talented team members bring their expertise and passion to every project.
      </p>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="team-card bg-white rounded-lg p-5 shadow-md flex flex-col items-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
              <p className="text-gray-500 mb-1">{member.role}</p>
              <p className="text-gray-600 text-sm mb-2">{member.description}</p>

              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-2">
                <a href={member.social.facebook} className="text-blue-600 text-xl hover:text-blue-800">
                  <FaFacebookF />
                </a>
                <a href={member.social.twitter} className="text-blue-400 text-xl hover:text-blue-600">
                 <FaXTwitter />
                </a>
                <a href={member.social.instagram} className="text-pink-500 text-xl hover:text-pink-700">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TeamSection;
