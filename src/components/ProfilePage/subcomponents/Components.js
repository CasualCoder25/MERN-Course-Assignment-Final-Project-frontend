import styled from "styled-components"
import { Link } from "react-router-dom"
import { ModalHeader } from "reactstrap"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5%;
  height: 70vh;
  ${(props) =>
    props.height > props.width ? `flex-direction: column; height: 80vh` : null}
`
export const Div = styled.div``

export const FormContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
`
export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
`
export const Form = styled.form`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`
export const Title = styled.h1`
  text-align: center;
  font-weight: bold;
`
export const Input = styled.input`
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
`
export const Button = styled.button`
  background-color: rgb(38, 38, 76);
  color: #ffffff;
  border: 1px solid rgb(38, 38, 76);
  border-radius: 20px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px 45px;
  margin: 10px;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`
export const GhostButton = styled(Button)`
  background-color: transparent;
  border-color: #ffffff;
`
export const GhostButtonMobile = styled(Button)`
  background-color: transparent;
  border-color: rgb(38, 38, 76);
  color: rgb(38, 38, 76);
`
export const Anchor = styled(Link)`
  color: rgb(38, 38, 76);
  text-decoration: none;
  font-size: 14px;
  margin: 15px 0;
`
export const Paragraph = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 10px 0 5px;
`
export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const StyledModalHeader = styled(ModalHeader)`
  justify-content: center;
`
