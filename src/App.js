import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./components/HomePage/HomePage"
import FeedbackPage from "./components/FeedBackPage/FeedBackPage"
import SignInPage from "./components/UserAccessPage/SigninPage"
import ProfilePage from "./components/ProfilePage/ProfilePage"
import ForgotPass from "./components/ForgotPassPage/ForgotPass"
import EditAccountPage from "./components/EditAccountPage/EditAccountPage"
import DeleteAccountPage from "./components/DeleteAccountPage/DeleteAccountPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
          <Route path="/login" element={<SignInPage signup={false} />} />
          <Route path="/signup" element={<SignInPage signup={true} />} />
          <Route path="/forgot-password" element={<ForgotPass />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/edit-account" element={<EditAccountPage />} />
          <Route path="/delete-account" element={<DeleteAccountPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
