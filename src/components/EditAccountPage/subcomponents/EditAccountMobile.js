import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import EditAccountFormMobile from "./EditAccountFormMobile"
import EditAccountParticle from "./EditAccountParticle"

const EditAccountMobile = () => {
  const [EditFailed, setEditFailed] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      password: userDetails.password,
      newName: userDetails.newName,
      newPassword: userDetails.newPassword,
    }
    Axios.put("https://mern-final-project-backend.onrender.com/user-edit/edit-user", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          setEditFailed(true)
        } else {
          setEditFailed(false)
          window.location.href = "/profile"
        }
      })
      .catch((err) => {
        setEditFailed(true)
        console.log(err)
      })
    event.target.reset()
  }
  return (
    <>
      <EditAccountParticle />
      <Components.Container>
        <Components.ContainerMobile>
          <Components.Form onSubmit={handleSubmit}>
            <EditAccountFormMobile
              setState={setUserDetails}
              failed={EditFailed}
            />
          </Components.Form>
        </Components.ContainerMobile>
      </Components.Container>
    </>
  )
}

export default EditAccountMobile
