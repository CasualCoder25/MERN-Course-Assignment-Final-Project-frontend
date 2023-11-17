import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import OTPgenFormMobile from "./OTPgenFormMobile"
import OTPsubmitFormMobile from "./OTPsubmitFormMobile"
import "./OTPPage.css"

const OTPToggleFormMobile = () => {
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
      <Components.ContainerMobile>
        <Components.OTPgenContainerMobile genOTP={genOTP}>
          <Components.Form onSubmit={handleSignup}>
            <OTPgenFormMobile
              setState={setUserDetails}
              failed={OTPgenFailed}
              toggle={toggle}
            />
          </Components.Form>
        </Components.OTPgenContainerMobile>
        <Components.OTPsubmitContainerMobile genOTP={genOTP}>
          <Components.Form onSubmit={handleLogin}>
            <OTPsubmitFormMobile
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
