import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./components/HomePage/HomePage"
import FeedbackPage from "./components/FeedBackPage/FeedBackPage"
import SignInPage from "./components/UserAccessPage/SigninPage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import ForgotPass from "./components/ForgotPassPage/ForgotPass"

function App() {
  return (
    <div >
       {/*className="container" adding this will change profile page bg width */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/login" element={<SignInPage signup={false} />} />
          <Route path="/signup" element={<SignInPage signup={true} />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-account" element={<h1>EditAccount</h1>} />
          <Route path="/delete-account" element={<h1>DeleteAccount</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
