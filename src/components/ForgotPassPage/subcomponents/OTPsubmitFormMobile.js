import { useEffect, useState } from "react"
import * as Components from "./Components"

const OTPsubmitFormMobile = (props) => {
  const [email, setEmail] = useState("")
  const [OTP, setOTP] = useState("")
  const [password, setPassword] = useState("")
  const user = { email: email, OTP: OTP, password: password }
  const handleClick = () => {
    props.setState(user)
  }
  useEffect(() => {
    setEmail(props.email)
  }, [props.email])
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">
          Failed to reset Password
        </div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Title>Reset Password</Components.Title>
      <Components.Input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <Components.Input
        value={OTP}
        onChange={(event) => setOTP(event.target.value)}
        placeholder="Enter OTP"
      />
      <Components.Input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter New Password"
      />
      <Components.Button onClick={handleClick} type="submit">
        Reset Password
      </Components.Button>
      <Components.Anchor to="/login">Login</Components.Anchor>
      <Components.GhostButtonMobile
        onClick={() => props.toggle(true)}
        type="button"
      >
        Send OTP
      </Components.GhostButtonMobile>
    </>
  )
}

export default OTPsubmitFormMobile
