import mongoose from "mongoose";
import dotenv from "dotenv";
import Tutor from "../src/models/Tutor.js"; // Add .js extension for ES modules

dotenv.config(); // Load environment variables

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
  const dummyTutors = [
    {
      name: "Drishti Goel",
      title: "Full Stack Developer",
      email: "drishtig210@gmail.com",
      image: "/instructors/john.jpg",
      skills: ["React", "Node.js", "MongoDB"],
      rating: 4.8,
      reviews: 120,
    },
    {
      name: "Jane Smith",
      title: "UI/UX Designer",
      email: "jane.smith@example.com",
      image: "/instructors/jane.jpg",
      skills: ["Figma", "Sketch", "Adobe XD"],
      rating: 4.6,
      reviews: 85,
    },
    {
      name: "Ravi Kumar",
      title: "SEO Specialist",
      email: "ravi.kumar@example.com",
      image: "/instructors/ravi.jpg",
      skills: ["SEO", "Google Analytics", "Content Strategy"],
      rating: 4.9,
      reviews: 143,
    },
    {
      name: "Emily Chen",
      title: "Data Scientist",
      email: "emily.chen@example.com",
      image: "/instructors/emily.jpg",
      skills: ["Python", "Pandas", "Machine Learning"],
      rating: 4.7,
      reviews: 110,
    },
    {
      name: "Mohammed Ali",
      title: "Cloud Architect",
      email: "mohammed.ali@example.com",
      image: "/instructors/ali.jpg",
      skills: ["AWS", "Azure", "DevOps"],
      rating: 4.5,
      reviews: 90,
    },
    {
      name: "Priya Sharma",
      title: "Frontend Developer",
      email: "priya.sharma@example.com",
      image: "/instructors/priya.jpg",
      skills: ["HTML", "CSS", "JavaScript", "Vue.js"],
      rating: 4.8,
      reviews: 130,
    },
    {
      name: "Carlos Mendoza",
      title: "Mobile App Developer",
      email: "carlos.mendoza@example.com",
      image: "/instructors/carlos.jpg",
      skills: ["Flutter", "React Native", "Firebase"],
      rating: 4.6,
      reviews: 102,
    },
    {
      name: "Ananya Gupta",
      title: "Cybersecurity Expert",
      email: "ananya.gupta@example.com",
      image: "/instructors/ananya.jpg",
      skills: ["Ethical Hacking", "Network Security", "SIEM"],
      rating: 4.9,
      reviews: 152,
    },
  ];
  
async function seedTutors() {
  try {
    await Tutor.deleteMany(); // Clear existing data
    await Tutor.insertMany(dummyTutors);
    console.log("Dummy tutors inserted!");
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding data:", err);
  }
}

seedTutors();
