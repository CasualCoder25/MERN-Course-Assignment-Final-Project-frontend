import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import OTPgenFrom from "./OTPgenFrom"
import OTPsubmitForm from "./OTPsubmitForm"

const OTPToggleForm = () => {
  const [genOTP, toggle] = useState(true)
  const [OTPsubmitFailed, setOTPsubmitFailed] = useState(false)
  const [OTPgenFailed, setOTPgenFailed] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const [email, setEmail] = useState("")
  const handleOTPsubmit = (event) => {
    event.preventDefault()
    let data = {
      email: userDetails.email,
      OTP: userDetails.OTP,
      newPassword: userDetails.password,
    }
    Axios.put("https://mern-final-project-backend.onrender.com/pass-edit/reset-pass", data)
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setOTPsubmitFailed(true)
        } else {
          setOTPsubmitFailed(false)
          window.location.href = "/login"
        }
      })
      .catch((err) => {
        setOTPsubmitFailed(true)
        console.log(err)
      })
    event.target.reset()
  }
  const handleOTPgen = (event) => {
    event.preventDefault()
    let data = {
      email: userDetails.email,
    }
    Axios.post("https://mern-final-project-backend.onrender.com/pass-edit/send-fp-otp", data)
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setOTPgenFailed(true)
        } else {
          setOTPgenFailed(false)
          toggle(false)
          setEmail(data.email)
        }
      })
      .catch((err) => {
        setOTPgenFailed(true)
        console.log(err)
      })
    event.target.reset()
  }
  return (
    <div className="d-flex justify-content-center">
      <Components.Container>
        <Components.FormContainer>
          <Components.OTPgenContainer genOTP={genOTP}>
            <Components.Form onSubmit={handleOTPgen}>
              <OTPgenFrom
                setState={setUserDetails}
                failed={OTPgenFailed}
                toggle={toggle}
              />
            </Components.Form>
          </Components.OTPgenContainer>
          <Components.OTPsubmitContainer genOTP={genOTP}>
            <Components.Form onSubmit={handleOTPsubmit}>
              <OTPsubmitForm
                email={email}
                setState={setUserDetails}
                failed={OTPsubmitFailed}
                toggle={toggle}
              />
            </Components.Form>
          </Components.OTPsubmitContainer>
        </Components.FormContainer>
        <Components.OverlayContainer>
          <Components.LeftOverlayPanel genOTP={genOTP}>
            <Components.Title>Forgot Password!</Components.Title>
            <Components.Paragraph>You can reset it</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Enter OTP
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel genOTP={genOTP}>
            <Components.Title>Didn't Receive OTP!</Components.Title>
            <Components.Paragraph>Resend OTP</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Resend OTP
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  )
}

export default OTPToggleForm
