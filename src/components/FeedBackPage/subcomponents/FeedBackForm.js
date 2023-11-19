import "./NavBar.css"
import "./Styles.css"
import { useState } from "react"
import Axios from "axios"

const FeedBackForm = () => {
  const [displayMessage, setDisplayMessage] = useState(false)
  const [error, setError] = useState(false)
  const [emailVal, setEmail] = useState("")
  const [feedbackVal, setFeedback] = useState("")
  const handleContact = () => {
    window.location.href = "/feedback"
  }
  const handleclick = (event) => {
    event.preventDefault()
    let data = {
      email: emailVal,
      description: feedbackVal,
    }
    Axios.post("https://mern-final-project-backend.onrender.com/feedback", data)
      .then((res) => {
        if (res.data.status === 500) {
          setError(true)
          setDisplayMessage(true)
        } else {
          setError(false)
          setDisplayMessage(true)
          setEmail("")
          setFeedback("")
        }
      })
      .catch((err) => {
        setError(true)
        setDisplayMessage(true)
      })
  }
  return (
    <div className="bg-white translucent p-5">
      <div>
        {displayMessage ? (
          error ? (
            <div className="Title alert alert-danger">
              Failed to send Feedback
            </div>
          ) : (
            <div className="Title alert alert-success">Sent Feedback</div>
          )
        ) : null}
        <div className="Title py-3">Help Us Improve!</div>
        <input
          value={emailVal}
          onChange={(event) => setEmail(event.target.value)}
          className="Input"
          placeholder="enter email"
        />
        <br />
        <textarea
          value={feedbackVal}
          onChange={(event) => setFeedback(event.target.value)}
          className="Input"
          placeholder="enter feedback"
        />
        <br />
        <button onClick={handleclick} className="Button" type="submit">
          Submit
        </button>
        <br /> <br />
      </div>
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
export default FeedBackForm
