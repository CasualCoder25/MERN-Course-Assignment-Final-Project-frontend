import ForgotPassParticle from "./subcomponents/ForgotPassParticle"
import OTPToggleForm from "./subcomponents/SigninToggleForm"
import OTPToggleFormMobile from "./subcomponents/SigninToggleFormMobile"
import "./subcomponents/OTPPage.css"

const ForgotPass = (props) => {
  return (
    <>
      <ForgotPassParticle />
      {window.innerWidth >= 800 ? (
        <OTPToggleForm signup={props.signup} />
      ) : (
        <OTPToggleFormMobile signup={props.signup} />
      )}
    </>
  )
}

export default ForgotPass
