import { useEffect, useState } from "react"

const LoginForm = (props) => {
  const [email, setEmail] = useState(props.emailVal)
  const [password, setPassword] = useState(props.passwordVal)
  const arr = [email, password]
  const handleclick = () => {
    props.getState(arr)
  }
  useEffect(() => {
    setEmail(props.emailVal)
    setPassword(props.passwordVal)
  }, [props.nameVal, props.emailVal, props.passwordVal])
  return (
    <div>
      <div class="Title">Sign in</div>
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
        Log In
      </button>
      <br /> <br />
      <a class="Anchor" href="/forgot-password">
        Forgot your password?
      </a>
    </div>
  )
}
export default LoginForm
