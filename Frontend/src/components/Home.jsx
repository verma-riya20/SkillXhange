import React from "react";
import { motion } from 'framer-motion';
import { FaClock, FaTabletAlt, FaChartPie, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeOut'
    }
  }
};

const courses = [
  {
    title: 'How to make a quality site in WordPress in 40 hours without experience',
    category: 'DESIGN',
    bgColor: 'bg-[#fef1ed]',
    icon: <FaClock className="text-4xl text-[#336b87]" />,
  },
  {
    title: 'WordPress: How to start in a developer without any basic knowledge',
    category: 'PROGRAMMING',
    bgColor: 'bg-white',
    icon: <FaTabletAlt className="text-4xl text-[#c94c4c]" />,
  },
  {
    title: 'Creating dynamic sites with CMS WordPress + SEO for WordPress websites',
    category: 'SEO',
    bgColor: 'bg-[#fef1ed]',
    icon: <FaChartPie className="text-4xl text-[#336b87]" />,
  },
];

const EasyStudyHome = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] min-h-screen flex items-center"
      >
        <motion.div
          variants={fadeInVariants}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-20 items-center"
        >
          <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6 text-slate-950">
  <span className="text-7xl font-chewy font-bold text-black-600 mb-8">SkillXChange</span><br />
  <span className="typewriter font-chewy text-4xl transition-colors duration-300 hover:text-black-500"  style={{ color: 'oklch(97% 0.001 106.424)' }}>Where Students Uplift Students.</span>
</h1>
            <p className="text-lg max-w-md mb-6 text-brown-600 font-bold" style={{ color:'oklch(27.9% 0.041 260.031)' }}>
            Exchange skills, share books, and build knowledge together — because learning is better when it's shared.
            </p>
            <div className="flex gap-4 mb-6">
              <a href="/register-tutor">
                <button className="px-6 py-3 rounded-full bg-slate-950 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                  GET STARTED
                </button>
              </a>
            </div>
          </div>

          <div className="min-w-96 flex justify-center w-full ">
            <img src="../images/image2.png" alt="Hero Illustration" className="max-w-sm w-full" />
          </div>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="bg-[#f9f1e9] py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
          </div>
          <div>
            <h2 className="font-chewy text-4xl font-semibold text-[#1e5e75] mb-8">Why Choose SkillXchange?</h2>
            <div className="space-y-6 text-[#1e5e75]">
              {[{
                title: "Connect with Top-Rated Tutors",
                desc: "Choose from a wide selection of verified tutors based on skills, reviews, and ratings. Learn exactly what you need, when you need it."
              }, {
                title: "Chat, Schedule & Pay — All in One Place",
                desc: "No more juggling platforms. Use our built-in chat and scheduling system to arrange meetings and pay securely through our portal."
              }, {
                title: "Buy, Sell or Lend Books Easily",
                desc: "Whether you're looking to sell your old semester books or borrow a novel, our book exchange tab keeps learning affordable and circular."
              }].map((feature, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow-md">
                  <h3 className="font-bold text-lg flex items-center gap-2">
                    <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm">{`0${i + 1}`}</span>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-700 mt-2">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Courses Section */}
      <section className="bg-gradient-to-b from-[#1e5e75] via-[#d6a886] to-[#fef1ed] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-white mb-16">
            <h2 className="text-4xl font-chewy md:text-5xl font-semibold mb-4">Professional courses<br />on creating websites</h2>
            <p className="text-sm md:text-base max-w-md">Our courses are complete professional courses of high quality that include a set of video lessons, practical and training materials.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className={`${course.bgColor} rounded-[24px] px-8 py-10 min-h-[320px] shadow-xl hover:scale-105 transition-transform`}
                whileHover={{ y: -4 }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <p className="text-sm text-gray-600 font-semibold uppercase mb-2">{course.category}</p>
                <h3 className="text-lg font-semibold text-black">{course.title}</h3>
                <div className="flex justify-between items-end mt-6">
                  <a href="#" className="text-[#1e5e75] font-semibold text-sm">READ MORE →</a>
                  {course.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section className="bg-gradient-to-t from-[#fef1ed] to-[#d6a886] px-4 pt-20 pb-12 ">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-chewy font-semibold text-[#1e5e75] mb-4">Still have questions?</h2>
            <p className="text-gray-700 mb-6">Leave a request and we will contact you to help you choose the best training format.</p>
            <form className="flex items-center gap-4">
              <input type="email" placeholder="Your email" className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none w-2/3" />
              <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition">SUBMIT</button>
            </form>
          </div>
          <div className="w-full flex justify-center">
            <div className="bg-white rounded-[32px] p-8 shadow-lg max-w-xs">
              <div className="w-full h-48 bg-[#1e5e75] rounded-lg flex items-center justify-center text-white font-semibold text-center">
                <img src="/images/question.jpg" alt="" className="w-full h-full object-contain"  />
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 border-t pt-6 border-gray-300 text-sm text-gray-600 grid md:grid-cols-5 gap-4 items-center">
          <div className="col-span-1 font-bold text-[#1e5e75] text-lg">SkillXchange</div>
          <div className="col-span-1">ABOUT<br />PROGRAM</div>
          <div className="col-span-1">COURSES<br />REVIEWS</div>
          <div className="col-span-1">
            <a href="mailto:support@skillxchange.com" className="hover:text-[#1e5e75]">support@skillxchange.com</a><br />Delhi, India
          </div>
          <div className="col-span-1">
            <a href="tel:+919876543210" className="hover:text-[#1e5e75]">+91 9876543210</a>
            <div className="flex gap-2 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF className="hover:text-[#1e5e75]" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram className="hover:text-[#1e5e75]" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn className="hover:text-[#1e5e75]" /></a>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default EasyStudyHome;
