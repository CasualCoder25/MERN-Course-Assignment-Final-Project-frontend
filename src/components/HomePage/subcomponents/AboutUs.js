import "./NavBar.css"

const AboutUs = () => {
  const handleContact = () => {
    window.location.href = "/feedback"
  }
  return (
    <div className="bg-white translucent p-5">
      <h3>
        <b>Welcome</b>
      </h3>
      <p>
        Embark on a transformative journey of productivity with TaskForge,the
        ultimate task management solution designed to empower individuals and
        teams. Say goodbye to chaos and hello to a streamlined, organized, and
        efficient workflow.
      </p>
      <br />

      <h4>
        <b>Why Us?</b>
      </h4>
      <h5>Our Beliefs</h5>
      <ul>
        <li>
          User Empowerment: TaskForge is designed to empower users by providing
          them with the tools they need to take control of their tasks and, by
          extension, their lives.
        </li>
        <li>
          Innovation with Purpose: We don't innovate for the sake of innovation;
          every feature added to TaskForge serves a purpose - to simplify,
          enhance, and elevate your productivity.
        </li>
        <li>
          Community-Centric Approach: TaskForge is more than a software; it's a
          community of individuals committed to supporting and uplifting each
          other on their productivity journeys.
        </li>
      </ul>

      <h5>Our Features</h5>
      <ul>
        <li>
          Effective Task Management: Provides an intuitive interface that makes
          it easy to create, edit, and delete tasks.{" "}
        </li>
        <li>
          Cross-Platform Accessibility: Access your tasks on the go with
          seamless synchronization across devices. Desktop, tablet, or mobile -
          TaskForge is where you are.
        </li>
        <li>
          Reminders and Notifications: Get reminders and notifications about
          upcoming tasks and deadlines via email.{" "}
        </li>
        <li>
          Task Prioritization: Allows users to prioritize tasks based on their
          importance or urgency.
        </li>
        <li>
          User Interface: Provides a positive user experience that makes it
          enjoyable to use the to-do list app.
        </li>
        <li>
          Seamless Authentication: Securely authenticate users and generate JSON
          Web Tokens for authorized access.
        </li>
      </ul>
      <br />

      <h4>
        <b>Our Commitment to You</b>
      </h4>
      <p>
        We are committed to improving TaskForge to meet your needs. Thank you
        for choosing TaskForge. Join our community today and start your journey
        towards enhanced productivity.
      </p>
      <br />
      <h4>
        <b>Get Started Today!</b>
      </h4>
      <p>
        Ready to embark on a more organized and productive journey? Join
        TaskForge today and experience the difference.
      </p>
      <br />
      <div className="bg-darkblue p-3">
        <footer>
          <div>
            <button
              onClick={handleContact}
              className="text-primary link-style px-3"
              style={{ backgroundColor: "transparent", border: "none" }}
            >
              Contact-us
            </button>
          </div>
          <div>
            <a
              href="https://github.com/CasualCoder25/MERN-Course-Assignment-Final-Project-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style px-3"
            >
              Our Source Code
            </a>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default AboutUs
