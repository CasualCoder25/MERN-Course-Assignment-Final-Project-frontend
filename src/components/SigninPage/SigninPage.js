import * as Components from "./subcomponents/Components"
import ParticleBg from "./subcomponents/SigninParticle"
import LoginForm from "./subcomponents/LoginForm"
import SignupForm from "./subcomponents/SignupForm"
import Axios from "axios"
import { useState } from "react"
// import "./Styles.css"

const SignIn = (props) => {
  const [signIn, toggle] = useState(props.login)
  const [arr, setArr] = useState([])
  const handleSignup = (event) => {
    event.preventDefault()
    const data = { name: arr[0], email: arr[1], password: arr[2] }
    // Axios here
    event.target.reset()
  }

  const handleLogin = (event) => {
    event.preventDefault()
    const data = { email: arr[0], password: arr[1] }
    // Axios here
    event.target.reset()
  }

  return (
    <>
      <ParticleBg />
      <Components.Container>
        <Components.SignUpContainer signinIn={signIn}>
          <form class="Form" onSubmit={handleSignup}>
            <SignupForm
              getState={setArr}
              nameVal=""
              emailVal=""
              passwordVal=""
            />
          </form>
        </Components.SignUpContainer>

        <Components.SignInContainer signinIn={signIn}>
          <form class="Form" onSubmit={handleLogin}>
            <LoginForm getState={setArr} emailVal="" passwordVal=""></LoginForm>
          </form>
        </Components.SignInContainer>

        <Components.OverlayContainer signinIn={signIn}>
          <Components.Overlay signinIn={signIn}>
            <Components.LeftOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome Back!</Components.Title>
              <Components.Paragraph>
                Proceed with your tasks
              </Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(true)}>
                Sign In
              </Components.GhostButton>
            </Components.LeftOverlayPanel>

            <Components.RightOverlayPanel signinIn={signIn}>
              <Components.Title>Welcome User!</Components.Title>
              <Components.Paragraph>Tackle your tasks</Components.Paragraph>
              <Components.GhostButton onClick={() => toggle(false)}>
                Sign Up
              </Components.GhostButton>
            </Components.RightOverlayPanel>
          </Components.Overlay>
        </Components.OverlayContainer>
      </Components.Container>
    </>
  )
}

export default SignIn
