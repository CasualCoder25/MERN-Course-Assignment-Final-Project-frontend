import { useState } from "react"
import * as Components from "./Components"
import "./SigninPage.css"

const SigninToggleForm = (props) => {
  const [signup, toggle] = useState(props.signup)
  const [userDetails, setUserDetails] = useState({})
  const handleLogin = (event) => {
    event.preventDefault()
    //Axios here
    event.target.reset()
  }
  const handleSignup = (event) => {
    event.preventDefault()
    //Axios here
    event.target.reset()
  }
  return (
    <div className="d-flex justify-content-center">
      <Components.Container>
        <Components.FormContainer>
          <Components.SignUpContainer signup={signup}>
            <Components.Form onSubmit={handleSignup}>
              <Components.Title>SignUp</Components.Title>
            </Components.Form>
          </Components.SignUpContainer>
          <Components.LoginContainer signup={signup}>
            <Components.Form onSubmit={handleLogin}>
              <Components.Title>Login</Components.Title>
            </Components.Form>
          </Components.LoginContainer>
        </Components.FormContainer>
        <Components.OverlayContainer>
          <Components.LeftOverlayPanel
            signup={signup}
          ></Components.LeftOverlayPanel>
          <Components.RightOverlayPanel
            signup={signup}
          ></Components.RightOverlayPanel>
        </Components.OverlayContainer>
      </Components.Container>
    </div>
  )
}

export default SigninToggleForm
