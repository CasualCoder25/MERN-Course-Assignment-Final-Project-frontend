import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 5%;
  height: 70vh;
  ${(props) =>
    props.height > props.width ? `flex-direction:column; height: 80vh` : null}
`
