import styled from "styled-components"

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  margin: 10px;
  ${(props) => (props.height > props.width ? `flex-direction:column` : null)}
`
