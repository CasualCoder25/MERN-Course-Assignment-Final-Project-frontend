import EditAccount from "./subcomponents/EditAccount"
import EditAccountMobile from "./subcomponents/EditAccountMobile"

const EditAccountPage = () => {
  return (
    <>
      {window.innerWidth >= window.innerHeight ? (
        <EditAccount />
      ) : (
        <EditAccountMobile />
      )}
    </>
  )
}

export default EditAccountPage
