import { Modal, ModalBody, ModalFooter } from "reactstrap"
import * as Components from "../Components"

const UserPopup = (props) => {
  const handleEditClick = () => {
    window.location.href = "/edit-account"
  }

  const handleDeleteClick = () => {
    window.location.href = "/delete-account"
  }
  return (
    <>
      <Modal isOpen={props.popup}>
        <Components.StyledModalHeader>
          <Components.PopupContainer>
            <Components.Title>Settings</Components.Title>
          </Components.PopupContainer>
        </Components.StyledModalHeader>
        <ModalBody>
          <Components.PopupContainer>
            <Components.Button onClick={handleEditClick}>
              Edit User Info
            </Components.Button>
            <Components.Button onClick={handleDeleteClick}>
              Delete User
            </Components.Button>
          </Components.PopupContainer>
        </ModalBody>
        <ModalFooter>
          <Components.GhostButtonMobile onClick={() => props.setPopup(false)}>
            Close Settings
          </Components.GhostButtonMobile>
        </ModalFooter>
      </Modal>
    </>
  )
}

export default UserPopup
