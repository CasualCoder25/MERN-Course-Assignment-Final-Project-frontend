import { useEffect, useState } from "react"

const SignupForm = (props) => {
  const [name, setName] = useState(props.nameVal)
  const [email, setEmail] = useState(props.emailVal)
  const [password, setPassword] = useState(props.passwordVal)
  const arr = [name, email, password]
  const handleclick = () => {
    props.getState(arr)
  }
  useEffect(() => {
    setName(props.nameVal)
    setEmail(props.emailVal)
    setPassword(props.passwordVal)
  }, [props.nameVal, props.emailVal, props.passwordVal])
  return (
    <div>
      <div class="Paragraph">Don't have an account?</div>
      <div class="Title">Create Account</div>
      <input
        defaultValue={props.nameVal}
        onChange={(event) => setName(event.target.value)}
        class="Input"
        placeholder="enter name"
      />
      <br />
      <input
        defaultValue={props.emailVal}
        onChange={(event) => setEmail(event.target.value)}
        class="Input"
        placeholder="enter email"
      />
      <br />
      <input
        defaultValue={props.passwordVal}
        onChange={(event) => setPassword(event.target.value)}
        class="Input"
        placeholder="enter password"
      />
      <br />
      <button onClick={handleclick} class="Button" type="submit">
        Sign Up
      </button>
    </div>
  )
}
export default SignupForm
