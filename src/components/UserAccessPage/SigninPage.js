import SigninParticle from "./subcomponents/SigninParticle"
import SigninToggleForm from "./subcomponents/SigninToggleForm"
import "./subcomponents/SigninPage.css"

const SignInPage = (props) => {
  return (
    <>
      <SigninParticle />
      <SigninToggleForm signup={props.signup} />
    </>
  )
}

export default SignInPage
