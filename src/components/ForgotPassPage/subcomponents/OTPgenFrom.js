import { useState } from "react"
import * as Components from "./Components"

const SignupForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = { name: name, email: email, password: password }
  const handleClick = () => {
    props.setState(user)
  }
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">Failed to Sign Up</div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Paragraph>Don't have an account?</Components.Paragraph>
      <Components.Title>Create Account</Components.Title>
      <Components.Input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Enter Name"
      />
      <Components.Input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
      />
      <Components.Input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter Password"
      />
      <Components.Button onClick={handleClick} type="submit">
        Sign Up
      </Components.Button>
    </>
  )
}
export default SignupForm
