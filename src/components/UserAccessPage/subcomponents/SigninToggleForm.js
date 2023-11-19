import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import SignupForm from "./SignupFrom"
import LoginForm from "./LoginForm"

const SigninToggleForm = (props) => {
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
      <Components.Container>
        <Components.FormContainer>
          <Components.SignUpContainer signup={signup}>
            <Components.Form onSubmit={handleSignup}>
              <SignupForm setState={setUserDetails} failed={signupFailed} />
            </Components.Form>
          </Components.SignUpContainer>
          <Components.LoginContainer signup={signup}>
            <Components.Form onSubmit={handleLogin}>
              <LoginForm setState={setUserDetails} failed={loginFailed} />
            </Components.Form>
          </Components.LoginContainer>
        </Components.FormContainer>
        <Components.OverlayContainer>
          <Components.LeftOverlayPanel signup={signup}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>Proceed with your tasks</Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Login
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signup={signup}>
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

export default SigninToggleForm
