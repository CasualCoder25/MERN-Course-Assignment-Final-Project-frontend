import { useState } from "react"
import * as Components from "./Components"

const LoginForm = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const user = { email: email, password: password }
  const handleClick = () => {
    props.setState(user)
  }
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">Failed to Login</div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Title>Login</Components.Title>
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
        Login
      </Components.Button>
      <Components.Anchor to="/forgot-password">
        Forgot your password?
      </Components.Anchor>
    </>
  )
}

export default LoginForm
