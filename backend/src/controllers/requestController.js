import Request from '../models/Request.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export const sendLearningRequest = async (req, res) => {
  const { tutorEmail, learner } = req.body;

  if (!tutorEmail || !learner?.name || !learner?.email) {
    return res.status(400).json({ message: "Missing user or tutor info." });
  }
  
  
  

  const getUserRequests = async (req, res) => {
    try {
      const { userEmail } = req.query;
      const requests = await Request.find({ userEmail });
      res.json(requests);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch requests" });
    }
  };

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: tutorEmail,
    subject: `New Learning Request from ${learner.name}`,
    html: `
     <h2>Hello Tutor,</h2>
      <p>You have received a new learning request:</p>
      <ul>
        <li><strong>Name:</strong> ${learner.name}</li>
        <li><strong>Email:</strong> <a href="mailto:${learner.email}">${learner.email}</a></li>
      </ul>
      <p>Respond to this request via the dashboard.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent to:", tutorEmail);
    res.status(200).json({ message: "Request sent successfully!" });
  } catch (error) {
    console.error("❌ Email error:", error);
    res.status(500).json({ message: "Failed to send email." });
  }
};

export const getRequests = async (req, res) => {
  const { userId, role } = req.params;
  const filter = role === 'tutor' ? { tutorId: userId } : { learnerId: userId };

  try {
    const requests = await Request.find(filter);
    res.json(requests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const respondToRequest = async (req, res) => {
  const { requestId } = req.params;
  const { status, tutorName } = req.body;

  try {
    const request = await Request.findByIdAndUpdate(requestId, { status }, { new: true });

    await transporter.sendMail({
      to: request.learnerEmail,
      subject: `Your Request has been ${status}`,
      html: `<p>${tutorName} has ${status} your request.</p>`
    });

    res.json(request);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// function to accept request
// export const acceptRequest = async (req, res) => {
//   try {
//     const { requestId } = req.query;
//     const updated = await Request.findByIdAndUpdate(requestId, { status: "Accepted" }, { new: true });
//     res.send("Request Accepted. You may now contact the student.");
//   } catch (err) {
//     res.status(500).send("Error accepting request.");
//   }
// };
    // to decline req
  // export const declineRequest = async (req, res) => {
  //   try {
  //     const { requestId } = req.query;
  //     await Request.findByIdAndUpdate(requestId, { status: "Declined" });
  //     res.send("Request Declined.");
  //   } catch (err) {
  //     res.status(500).send("Error declining request.");
  //   }
  // };
  // export const getUserRequests = async (req, res) => {
  //   try {
  //     const { userEmail } = req.query;
  //     const requests = await Request.find({ userEmail });
  //     res.json(requests);
  //   } catch (err) {
  //     res.status(500).json({ message: "Failed to fetch requests" });
  //   }
  // };