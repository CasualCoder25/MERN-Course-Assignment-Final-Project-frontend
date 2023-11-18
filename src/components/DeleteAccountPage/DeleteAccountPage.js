import DeleteAccount from "./subcomponents/DeleteAccount"
import DeleteAccountMobile from "./subcomponents/DeleteAccountMobile"

const DeleteAccountPage = () => {
  return (
    <>
      {window.innerWidth >= window.innerHeight ? (
        <DeleteAccount />
      ) : (
        <DeleteAccountMobile />
      )}
    </>
  )
}

export default DeleteAccountPage
