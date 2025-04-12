import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const TutorProfilePage = () => {
  const { id } = useParams();
  const [tutor, setTutor] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

  useEffect(() => {
    const fetchTutor = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/tutors/${id}`);
        const data = await res.json();
        setTutor(data);
      } catch (err) {
        console.error("Failed to fetch tutor:", err);
      }
    };

    fetchTutor();
  }, [id]);

  const handleRequest = async () => {
    console.log("tutorEmail:", tutor?.email);
    console.log("Auth0 user:", user);

    if (!user || !tutor?.email) {
      alert("User not authenticated or tutor email missing.");
      return;
    }

    const learner = {
      name: user.name,
      email: user.email,
    };

    try {
      const response = await fetch("http://localhost:5000/api/requests/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tutorEmail: tutor.email,
          learner,
        }),
      });

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending request:", error);
      alert("Something went wrong.");
    }
  };

  if (!tutor) return <div>Loading tutor profile...</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold">{tutor.name}</h2>
      <p className="text-gray-600 mb-4">{tutor.title}</p>

      <div>
        {tutor.skills && tutor.skills.length > 0 ? (
          tutor.skills.map((skill, i) => (
            <span
              key={i}
              className="inline-block bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full m-1 text-sm"
            >
              {skill}
            </span>
          ))
        ) : (
          <p>No skills listed</p>
        )}
      </div>

      <button
        onClick={handleRequest}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
      >
        Send Request
      </button>
    </div>
  );
};

export default TutorProfilePage;
