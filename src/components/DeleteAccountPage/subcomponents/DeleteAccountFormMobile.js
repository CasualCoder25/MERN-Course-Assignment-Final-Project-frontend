import { useState } from "react"
import * as Components from "./Components"

const DeleteAccountFormMobile = (props) => {
  const [password, setPassword] = useState("")
  const user = {
    password: password,
  }
  const handleClick = () => {
    props.setState(user)
  }
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">
          Failed to delete User
        </div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Title>Enter Password</Components.Title>
      <Components.Input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter Password"
      />
      <Components.Button onClick={handleClick} type="submit">
        Delete User
      </Components.Button>
      <Components.Anchor to="/profile">Profile</Components.Anchor>
    </>
  )
}

export default DeleteAccountFormMobile
