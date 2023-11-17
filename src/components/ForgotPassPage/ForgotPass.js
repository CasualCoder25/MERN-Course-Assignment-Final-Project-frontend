import ForgotPassParticle from "./subcomponents/ForgotPassParticle"
import OTPToggleForm from "./subcomponents/OTPToggleForm"
import OTPToggleFormMobile from "./subcomponents/OTPToggleFormMobile"
import "./subcomponents/OTPPage.css"

const ForgotPass = () => {
  return (
    <>
      <ForgotPassParticle />
      {window.innerWidth >= 800 ? (
        <OTPToggleForm />
      ) : (
        <OTPToggleFormMobile />
      )}
    </>
  )
}

export default ForgotPass
