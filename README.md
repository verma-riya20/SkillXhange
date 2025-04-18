
# 🎓 SkillXchange - AI-Powered Skill Barter & Tutor Marketplace

**SkillXchange** is a modern, collaborative educational platform where students and professionals can register as instructors, connect by shared skills, and exchange educational resources. It features a real-time tutor marketplace, upcoming AI-based skill barter system, and plans for a book exchange.

---

## 🌟 Features (Detailed)

### 🔍 Instructor Marketplace (LIVE)

- **Instructor Cards**: Displays instructor name, title, profile image, skills, rating (with stars), and number of reviews.
- **Dynamic Sorting**: Users can sort the instructor list by:
  - `Rating`: High to Low
  - `Popularity`: Based on number of reviews
  - `Alphabetical`: A-Z sorting using names
- **Skill Search**: Live text input to filter instructors based on skill tags like "React", "Figma", etc.
- **Live Update on Register**: When a tutor submits the registration form, their details are dynamically added to the instructor list (using shared React Context).
- **Responsive Layout**: Instructor cards are displayed in a responsive grid layout optimized for mobile and desktop views.
- **Profile Image Handling**: Placeholder images are used; later integration with file upload is planned.

### 📝 Register as a Tutor (LIVE)

- **Multi-field Form**: Collects user data like name, email, phone, institution, skills, expertise, and resume upload.
- **Form Validation**: Required fields are validated before submission.
- **Resume Upload**: Users can select a resume file (currently only console-logged, storage integration pending).
- **Terms & Conditions Checkbox**: Ensures user consent.
- **Submission Handling**: On submission, the tutor's data is pushed into the shared instructor context, instantly rendering them on the instructor list.

### 🔁 AI Skill Barter Exchange (Planned)

- **Smart Matching Engine**: Recommend peers based on mutual learning goals (e.g., someone who wants to learn React can be matched with someone who teaches React).
- **Barter Request System**: Users can send requests to "exchange" skills and create custom learning sessions.
- **Calendar & Session Booking**: Session scheduling between learners and tutors (planned via calendar integration).
- **AI-Powered Recommendations**: Leverages NLP and AI to suggest top-matched tutors or peer learners.

### 📖 Book Marketplace (Planned)

- **Buy/Sell Books**: Platform to buy or sell used academic books locally or across the community.
- **Book Listings**: Upload book image, description, price, and condition.
- **Search and Filter**: Search books by subject, condition, price range.
- **Secure Payment Gateway**: Future support for safe transactions via Stripe or Razorpay.

### 🧠 Personalized Dashboards (Planned)

- **Instructor Dashboard**: Track student signups, ratings, earnings (post backend integration).
- **Student Dashboard**: Save favorite instructors, track barter sessions, manage course history.
- **Admin Panel**: Manage users, flagged content, and insights.

---

## 🧰 Tech Stack

| Category           | Tools Used                               |
|--------------------|-------------------------------------------|
| Frontend           | React.js, Tailwind CSS                    |
| UI Components      | React Icons, Responsive Flex/Grid Layout |
| Routing            | `react-router-dom`                        |
| State Management   | React Context API                         |
| Form Handling      | useState, Controlled Inputs               |
| Animations (Planned)| Framer Motion                            |
| Backend (Planned)  | Node.js, Express.js, MongoDB              |
| Auth (Planned)     | Auth0 or Firebase Authentication          |
| File Upload (Planned)| Cloudinary or Firebase Storage          |

---

## 🗂 Folder Structure

