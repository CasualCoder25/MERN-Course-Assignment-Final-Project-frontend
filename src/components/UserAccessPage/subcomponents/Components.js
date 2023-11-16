import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
  margin-top: 10vh;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  overflow: hidden;
  height: 500px;
  width: 800px;
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
  width: 100%;
  height: 100%;
`
export const SignUpContainer = styled.div`
  position: relative;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  left: 0;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signup
      ? `
  left: 50%;
  opacity:1;
  z-index:5;`
      : null}
`
export const SignUpContainerMobile = styled.div`
  position: relative;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 100%;
  opacity: 0;
  z-index: 1;
  ${(props) =>
    props.signup
      ? `
  opacity:1;
  z-index:5;`
      : null}
`
export const LoginContainer = styled.div`
  position: relative;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 50%;
  left: -50%;
  opacity: 1;
  z-index: 2;
  ${(props) =>
    props.signup
      ? `
  left: 0;
  opacity: 0;`
      : null}
`
export const LoginContainerMobile = styled.div`
  position: relative;
  height: 100%;
  transition: all 0.6s ease-in-out;
  width: 100%;
  top: -100%;
  opacity: 1;
  z-index: 2;
  ${(props) =>
    props.signup
      ? `
  opacity: 0;`
      : null}
`
export const OverlayContainer = styled.div`
  display: flex;
  position: relative;
  top: -100%;
  border-radius: 10px;
  overflow: hidden;
  height: 100%;
  width: 100%;
  color: white;
`
export const LeftOverlayPanel = styled.div`
  position: relative;
  height: 100%;
  background: rgb(38, 38, 76);
  transition: all 0.6s ease-in-out;
  width: 50%;
  left: 50%;
  opacity: 0;
  z-index: 11;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props) =>
    props.signup
      ? `
  left: 0;
  opacity:1;
  z-index:15;`
      : null}
`
export const RightOverlayPanel = styled.div`
  position: relative;
  height: 100%;
  background: rgb(38, 38, 76);
  transition: all 0.6s ease-in-out;
  width: 50%;
  left: 0;
  opacity: 1;
  z-index: 12;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${(props) =>
    props.signup
      ? `
  left: -50%;
  opacity: 0;`
      : null}
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
