import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  justify-content: center;
`
export const ContainerMobile = styled.div`
  margin-top: 10vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  height: 550px;
  width: 90%;
`
export const FormContainer = styled.div`
  display: flex;
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100%;
`
export const DeletingContainer = styled.div`
  background-color: #fff;
  height: 100vh;
  width: 50vw;
`
export const DeletingContainerMobile = styled.div`
  height: 100%;
  width: 100%;
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
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 10px 0 5px;
`
