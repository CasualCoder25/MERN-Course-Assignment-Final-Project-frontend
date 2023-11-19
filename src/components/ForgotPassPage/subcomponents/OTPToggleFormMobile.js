import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import OTPgenFormMobile from "./OTPgenFormMobile"
import OTPsubmitFormMobile from "./OTPsubmitFormMobile"
import "./OTPPage.css"

const OTPToggleFormMobile = () => {
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
      <Components.ContainerMobile>
        <Components.OTPgenContainerMobile genOTP={genOTP}>
          <Components.Form onSubmit={handleOTPgen}>
            <OTPgenFormMobile
              setState={setUserDetails}
              failed={OTPgenFailed}
              toggle={toggle}
            />
          </Components.Form>
        </Components.OTPgenContainerMobile>
        <Components.OTPsubmitContainerMobile genOTP={genOTP}>
          <Components.Form onSubmit={handleOTPsubmit}>
            <OTPsubmitFormMobile
              email={email}
              setState={setUserDetails}
              failed={OTPsubmitFailed}
              toggle={toggle}
            />
          </Components.Form>
        </Components.OTPsubmitContainerMobile>
      </Components.ContainerMobile>
    </div>
  )
}
export default OTPToggleFormMobile
