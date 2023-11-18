import { useState } from "react"
import * as Components from "./Components"

const EditAccountForm = (props) => {
  const [newName, setNewName] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [password, setPassword] = useState("")
  const user = {
    password: password,
    newName: newName,
    newPassword: newPassword,
  }
  const handleClick = () => {
    props.setState(user)
  }
  return (
    <>
      {props.failed ? (
        <div className="alert alert-danger max-width">Failed to edit User</div>
      ) : (
        <div className="alert max-width" style={{ color: "white" }}>
          Message
        </div>
      )}
      <Components.Title>Enter Details</Components.Title>
      <Components.Input
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
        placeholder="Enter New Name"
      />
      <Components.Input
        value={password}
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter Old Password"
      />
      <Components.Input
        value={newPassword}
        type="password"
        onChange={(event) => setNewPassword(event.target.value)}
        placeholder="Enter New Password"
      />
      <Components.Button onClick={handleClick} type="submit">
        Edit User
      </Components.Button>
      <Components.Anchor to="/profile">Profile</Components.Anchor>
    </>
  )
}

export default EditAccountForm
