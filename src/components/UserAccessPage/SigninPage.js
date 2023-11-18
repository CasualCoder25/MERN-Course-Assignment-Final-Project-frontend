import SigninParticle from "./subcomponents/SigninParticle"
import SigninToggleForm from "./subcomponents/SigninToggleForm"
import SigninToggleFormMobile from "./subcomponents/SigninToggleFormMobile"
import "./subcomponents/SigninPage.css"

const SignInPage = (props) => {
  return (
    <div className="container">
      <SigninParticle />
      {window.innerWidth >= 800 ? (
        <SigninToggleForm signup={props.signup} />
      ) : (
        <SigninToggleFormMobile signup={props.signup} />
      )}
    </div>
  )
}

export default SignInPage
