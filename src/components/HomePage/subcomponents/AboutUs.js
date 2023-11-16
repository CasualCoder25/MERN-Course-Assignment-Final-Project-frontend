import { Link } from "react-router-dom"
import "./NavBar.css"

const AboutUs = () => {
  return (
    <div className="bg-white translucent p-5">
      <h2>Our Story</h2>
      <p>
        Our journey began with a simple idea: to create a digital space that
        empowers individuals to take control of their tasks and schedules,
        making their lives more efficient and enjoyable. We recognized the need
        for a flexible, easy-to-use, and feature-rich to-do list application,
        and that's where [Your Company Name] was born.
      </p>
      <h5>About Us</h5>
      <p>
        Welcome to [Your To-Do List Website Name], your trusted companion for
        staying organized and productive. At [Your Company Name], we believe
        that a well-organized life is a key to success, and our mission is to
        help you achieve just that.
      </p>
      <h5>What Sets Us Apart</h5>
      <p>
        At [Your To-Do List Website Name], we stand out from the crowd with our
        commitment to user-centric design, functionality, and innovation. Here
        are some key features that set us apart: Intuitive Interface: Our
        user-friendly interface ensures that you can start creating tasks and
        lists within minutes. No steep learning curves, just pure productivity.
        Customization: We understand that everyone has unique preferences and
        needs. That's why we offer a wide range of customization options,
        allowing you to tailor your to-do lists to suit your style.
        Cross-Platform Accessibility: Access your to-do lists from anywhere, on
        any device. Our platform is designed to sync seamlessly across desktop,
        mobile, and tablet devices. Collaboration: Whether you're working on a
        group project or managing household chores, our collaboration features
        make it easy to share tasks and stay on the same page. Productivity
        Insights: Gain valuable insights into your task management habits and
        track your progress over time with our productivity analytics.
      </p>
      <p>
        At [Your To-Do List Website Name], we stand out from the crowd with our
        commitment to user-centric design, functionality, and innovation. Here
        are some key features that set us apart: Intuitive Interface: Our
        user-friendly interface ensures that you can start creating tasks and
        lists within minutes. No steep learning curves, just pure productivity.
        Customization: We understand that everyone has unique preferences and
        needs. That's why we offer a wide range of customization options,
        allowing you to tailor your to-do lists to suit your style.
        Cross-Platform Accessibility: Access your to-do lists from anywhere, on
        any device. Our platform is designed to sync seamlessly across desktop,
        mobile, and tablet devices. Collaboration: Whether you're working on a
        group project or managing household chores, our collaboration features
        make it easy to share tasks and stay on the same page. Productivity
        Insights: Gain valuable insights into your task management habits and
        track your progress over time with our productivity analytics.
      </p>
      <p>
        At [Your To-Do List Website Name], we stand out from the crowd with our
        commitment to user-centric design, functionality, and innovation. Here
        are some key features that set us apart: Intuitive Interface: Our
        user-friendly interface ensures that you can start creating tasks and
        lists within minutes. No steep learning curves, just pure productivity.
        Customization: We understand that everyone has unique preferences and
        needs. That's why we offer a wide range of customization options,
        allowing you to tailor your to-do lists to suit your style.
        Cross-Platform Accessibility: Access your to-do lists from anywhere, on
        any device. Our platform is designed to sync seamlessly across desktop,
        mobile, and tablet devices. Collaboration: Whether you're working on a
        group project or managing household chores, our collaboration features
        make it easy to share tasks and stay on the same page. Productivity
        Insights: Gain valuable insights into your task management habits and
        track your progress over time with our productivity analytics.
      </p>
      <h5>Our Commitment to You</h5>
      <p>
        We are dedicated to continually improving and expanding our platform to
        meet the evolving needs of our users. Your feedback and suggestions are
        invaluable in shaping the future of [Your To-Do List Website Name].
        Thank you for choosing [Your To-Do List Website Name] as your go-to
        solution for managing your tasks, goals, and aspirations. We're here to
        simplify your life and help you make every day count. Join the [Your
        Company Name] community today and start your journey towards enhanced
        productivity and organization.
      </p>
      <div className="bg-darkblue p-3">
        <footer>
          <div>
            <Link to="/feedback" className="link-style p-3">
              Contact-us
            </Link>
          </div>
          <div>
            <a
              href="https://github.com/CasualCoder25/MERN-Course-Assignment-Final-Project-backend"
              target="_blank"
              rel="noopener noreferrer"
              className="link-style p-3"
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
