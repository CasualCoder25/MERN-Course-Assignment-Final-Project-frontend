import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import SignupFormMobile from "./SignupFormMobile"
import LoginFormMobile from "./LoginFormMobile"
import "./SigninPage.css"

const SigninToggleFormMobile = (props) => {
  const [signup, toggle] = useState(props.signup)
  const [loginFailed, setLoginFailed] = useState(false)
  const [signupFailed, setSignupFailed] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const handleLogin = (event) => {
    event.preventDefault()
    let data = { email: userDetails.email, password: userDetails.password }
    Axios.post("https://mern-final-project-backend.onrender.com/user-create/login", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setLoginFailed(true)
        } else {
          setLoginFailed(false)
          window.location.href = "/profile"
        }
      })
      .catch((err) => {
        setLoginFailed(true)
        console.log(err)
      })
    event.target.reset()
  }
  const handleSignup = (event) => {
    event.preventDefault()
    let data = {
      name: userDetails.name,
      email: userDetails.email,
      password: userDetails.password,
    }
    Axios.post("https://mern-final-project-backend.onrender.com/user-create/signup", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setSignupFailed(true)
        } else {
          setSignupFailed(false)
          window.location.href = "/profile"
        }
      })
      .catch((err) => {
        setSignupFailed(true)
        console.log(err)
      })
    event.target.reset()
  }
  return (
    <div className="d-flex justify-content-center">
      <Components.ContainerMobile>
        <Components.SignUpContainerMobile signup={signup}>
          <Components.Form onSubmit={handleSignup}>
            <SignupFormMobile
              setState={setUserDetails}
              failed={signupFailed}
              toggle={toggle}
            />
          </Components.Form>
        </Components.SignUpContainerMobile>
        <Components.LoginContainerMobile signup={signup}>
          <Components.Form onSubmit={handleLogin}>
            <LoginFormMobile
              setState={setUserDetails}
              failed={loginFailed}
              toggle={toggle}
            />
          </Components.Form>
        </Components.LoginContainerMobile>
      </Components.ContainerMobile>
    </div>
  )
}
export default SigninToggleFormMobile
