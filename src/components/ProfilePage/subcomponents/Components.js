import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5%;
  height: 70vh;
  ${(props) => (props.height > props.width ? `height: 80vh` : null)}
`
export const Div = styled.div``
