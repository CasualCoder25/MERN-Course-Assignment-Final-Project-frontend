import styled from "styled-components"

export const SlideShowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  ${(props) => (props.height > props.width ? `height: 35vh` : null)}
`
export const SlidesContainer = styled.div`
  height: 90%;
  width: 60%;
  padding: 4%;
  ${(props) => (props.height > props.width ? `width:100%;` : null)}
`
export const ContainerFirst = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  opacity: 0;
  transition: all 0.6s ease-in-out;
  box-shadow: 1px 1px 30px 1px black;
  ${(props) => (props.display ? `opacity: 0.9;` : null)}
`
export const ContainerSecond = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -100%;
  opacity: 0;
  transition: all 0.6s ease-in-out;
  box-shadow: 1px 1px 30px 1px black;
  ${(props) => (props.display ? `opacity: 0.9;` : null)}
`
export const ContainerThird = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  top: -200%;
  opacity: 0;
  transition: all 0.6s ease-in-out;
  box-shadow: 1px 1px 30px 1px black;
  ${(props) => (props.display ? `opacity: 0.9;` : null)}
`
export const ImageContainer = styled.img`
  max-height: 100%;
  max-width: 100%;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Button = styled.button`
  height: 5px;
  width: 30px;
  border-radius: 10px;
  opacity: 0.6;
  border: none;
  margin: 2px;
  ${(props) => (props.display ? `opacity: 0.9;` : null)}
`
