import ForgotPassParticle from "./subcomponents/ForgotPassParticle"
import OTPToggleForm from "./subcomponents/OTPToggleForm"
import OTPToggleFormMobile from "./subcomponents/OTPToggleFormMobile"
import "./subcomponents/OTPPage.css"

const ForgotPass = () => {
  return (
    <div className="container">
      <ForgotPassParticle />
      {window.innerWidth >= 800 ? (
        <OTPToggleForm />
      ) : (
        <OTPToggleFormMobile />
      )}
    </div>
  )
}

export default ForgotPass
