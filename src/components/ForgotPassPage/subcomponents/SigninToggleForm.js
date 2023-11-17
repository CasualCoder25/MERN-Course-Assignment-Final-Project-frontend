import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import OTPgenFrom from "./OTPgenFrom"
import OTPsubmitForm from "./OTPsubmitForm"

const OTPToggleForm = () => {
  const [genOTP, toggle] = useState(true)
  const [OTPsubmitFailed, setLoginFailed] = useState(false)
  const [OTPgenFailed, setSignupFailed] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const handleLogin = (event) => {
    event.preventDefault()
    let data = { email: userDetails.email, password: userDetails.password }
    Axios.post("http://localhost:8000/user-create/login", data)
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setLoginFailed(true)
        } else {
          window.location.href = "/profile"
        }
      })
      .catch((err) => console.log(err))
    event.target.reset()
  }
  const handleSignup = (event) => {
    event.preventDefault()
    let data = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
    }
    Axios.post("http://localhost:8000/user-create/signup", data)
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setSignupFailed(true)
        } else {
          window.location.href = "/profile"
        }
      })
      .catch((err) => console.log(err))
    event.target.reset()
  }
  return (
    <div className="d-flex justify-content-center">
      <Components.Container>
        <Components.FormContainer>
          <Components.OTPgenContainer genOTP={genOTP}>
            <Components.Form onSubmit={handleSignup}>
              <OTPgenFrom setState={setUserDetails} failed={OTPgenFailed} />
            </Components.Form>
          </Components.OTPgenContainer>
          <Components.OTPsubmitContainer genOTP={genOTP}>
            <Components.Form onSubmit={handleLogin}>
              <OTPsubmitForm setState={setUserDetails} failed={OTPsubmitFailed} />
            </Components.Form>
          </Components.OTPsubmitContainer>
        </Components.FormContainer>
        <Components.OverlayContainer>
          <Components.LeftOverlayPanel genOTP={genOTP}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>Proceed with your tasks</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel genOTP={genOTP}>
            <Components.Title>Welcome User!</Components.Title>
            <Components.Paragraph>Tackle your tasks</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  )
}

export default OTPToggleForm
