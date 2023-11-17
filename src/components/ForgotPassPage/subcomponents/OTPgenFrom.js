import { useState } from "react"
import * as Components from "./Components"

const OTPgenFrom = (props) => {
  const [email, setEmail] = useState("")
  const user = { email: email }
  const handleClick = () => {
    props.setState(user)
  }
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">Failed to send OTP</div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Paragraph>Reset your password</Components.Paragraph>
      <Components.Title>Email</Components.Title>
      <Components.Input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <Components.Button onClick={handleClick} type="submit">
        Send OTP
      </Components.Button>
    </>
  )
}
export default OTPgenFrom
