import { useState } from "react"
import Axios from "axios"
import * as Components from "./Components"
import DeleteAccountForm from "./DeleteAccountForm"
import DeleteAccountParticle from "./DeleteAccountParticle"

const DeleteAccount = () => {
  const [DeleteFailed, setDeleteFailed] = useState(false)
  const [userDetails, setUserDetails] = useState({})
  const handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      password: userDetails.password,
    }
    Axios.post("http://localhost:8000/user-edit/delete-user", data, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
        if (res.data.status === 500) {
          console.log(res.data.error)
          setDeleteFailed(true)
        } else {
          window.location.href = "/"
        }
      })
      .catch((err) => console.log(err))
    event.target.reset()
  }
  return (
    <>
      <DeleteAccountParticle />
      <Components.DeletingContainer>
        <Components.Form onSubmit={handleSubmit}>
          <DeleteAccountForm setState={setUserDetails} failed={DeleteFailed} />
        </Components.Form>
      </Components.DeletingContainer>
    </>
  )
}

export default DeleteAccount
