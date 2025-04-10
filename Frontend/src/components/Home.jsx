import React from "react";
import { motion } from 'framer-motion';
import { FaClock, FaTabletAlt, FaChartPie } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

//animation 
const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
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

//profession page
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
//animation 

const EasyStudyHome = () => {
  return (
    <>
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      {/* Section 1 */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
        className="snap-start bg-gradient-to-b from-[#1c637b] via-[#e2b091] to-[#f9f1e9] min-h-screen"
      >
        <motion.header
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between"
        >
          <div className="text-white text-2xl font-bold">Circle</div>
         
          <button className="px-5 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200">SIGN IN</button>
        </motion.header>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 py-20 items-center"
        >
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
              Your next big<br /> idea starts here
            </h1>
            <p className="text-lg max-w-md mb-6">
              The ideal framework to learn how to manage all aspects of startup.
            </p>
            <button className="px-6 py-3 rounded-full bg-[#f8bfa5] text-white font-semibold shadow-lg hover:scale-105 transition-transform">
              START FOR FREE
            </button>
          </div>

          <div className="w-full flex justify-center">
            <img src="/illustration.png" alt="Illustration" className="max-w-sm w-full" />
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="max-w-7xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center text-white opacity-80"
        >
          <p>TransferWise</p>
          <p>WOOCOMMERCE</p>
          <p>PayPal</p>
          <p>Payoneer</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariants}
          className="mt-16 bg-[#f9f1e9] rounded-t-[50px] px-6 py-12"
        >
          <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-6 text-center text-[#1e5e75] text-2xl font-bold">
            <div>
              <p>200+</p>
            </div>
            <div>
              <p>150+</p>
            </div>
            <div>
              <p>10k+</p>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Section 2 - Syllabus */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={sectionVariants}
        className="snap-start bg-[#f9f1e9] min-h-screen flex items-center py-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img src="/syllabus-illustration.png" alt="Syllabus Illustration" className="max-w-sm w-full" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#1e5e75] mb-8">Syllabus of courses</h2>
            <div className="space-y-6 text-[#1e5e75]">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm">01</span>
                  Videos from professionals
                </h3>
                <p className="text-sm text-gray-700">
                  Our specialists will help you create any website. With our help, you can handle any task, also you get a personalized consultation.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm">02</span>
                  Practical independent work
                </h3>
                <p className="text-sm text-gray-700">
                  Learn how to organize your website, create engaging content, protect your site, and achieve search engine rankings.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className="bg-blue-200 text-blue-800 rounded-full px-3 py-1 text-sm">03</span>
                  Feedback from specialists
                </h3>
                <p className="text-sm text-gray-700">
                  Structure and visualize new knowledge. You send the practical work to the reviewing specialists and receive individual feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
    {/*/next page on scroll*/}

    <div className="bg-gradient-to-b from-[#1e5e75] via-[#d6a886] to-[#fef1ed] min-h-screen px-4 py-12">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-start text-white mb-16 gap-8">
          <motion.h2
            className="text-white text-3xl md:text-5xl font-semibold leading-snug"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Professional courses<br />on creating websites
          </motion.h2>
          <motion.p
            className="text-sm md:text-base max-w-sm text-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our courses are complete professional courses of high quality that include a set of video lessons,
            practical and training materials.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              className={`${course.bgColor} rounded-[24px] px-8 py-10 flex flex-col justify-between min-h-[320px] transition-transform shadow-xl hover:scale-105`}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <div className="mb-6">
                <p className="text-sm text-gray-600 font-semibold uppercase mb-2">{course.category}</p>
                <h3 className="text-lg font-semibold text-black leading-snug">
                  {course.title}
                </h3>
              </div>
              <div className="mt-auto flex justify-between items-end">
                <a href="#" className="text-[#1e5e75] font-semibold text-sm">READ MORE →</a>
                {course.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-t from-[#fef1ed] to-[#d6a886] rounded-t-[50px] px-4 pt-20 pb-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-[#1e5e75] mb-4">Still have questions?</h2>
              <p className="text-gray-700 mb-6">Leave a request and we will contact you to help you choose the best training format.</p>
              <form className="flex items-center gap-4">
                <input type="email" placeholder="Your email" className="px-4 py-3 rounded-full border border-gray-300 focus:outline-none w-2/3" />
                <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-100 transition">SUBMIT</button>
              </form>
            </div>
            <div className="w-full flex justify-center">
              <div className="bg-white rounded-[32px] p-8 shadow-lg max-w-xs">
                <div className="w-full h-48 bg-[#1e5e75] rounded-lg flex items-center justify-center text-white font-semibold text-center">
                  WordPress<br />The ideal course to learn<br />how to manage all aspects
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t pt-6 border-gray-300 text-sm text-gray-600 grid md:grid-cols-5 gap-4 items-center">
            <div className="col-span-1 font-bold text-[#1e5e75] text-lg">Circle</div>
            <div className="col-span-1">ABOUT<br />PROGRAM</div>
            <div className="col-span-1">COURSES<br />REVIEWS</div>
            <div className="col-span-1">
              WWW.HALO-LAB.COM<br />MAIL@HALO-LAB.COM
            </div>
            <div className="col-span-1">
              +38 068 543 8912<br />UKRAINE, ODESSA
              <div className="flex gap-2 mt-2">
                <FaFacebookF className="hover:text-[#1e5e75]" />
                <FaInstagram className="hover:text-[#1e5e75]" />
                <FaLinkedinIn className="hover:text-[#1e5e75]" />
              </div>
            </div>
          </footer>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default EasyStudyHome;
