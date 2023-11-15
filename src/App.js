import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./components/HomePage/HomePage"
import FeedbackPage from "./components/FeedBackPage/FeedBackPage"

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/signin" element={<h1>Signin</h1>} />
          <Route path="/signup" element={<h1>SignUp</h1>} />
          <Route path="/forgot-password" element={<h1>ForgotPass</h1>} />
          <Route path="/otp" element={<h1>OTP</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/edit-account" element={<h1>EditAccount</h1>} />
          <Route path="/delete-account" element={<h1>DeleteAccount</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
