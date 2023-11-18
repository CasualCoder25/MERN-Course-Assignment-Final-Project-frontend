import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineStar } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export const CrossIcon =styled(RxCross2)`
font-size: 35px;
margin-left: 10px;
color: red;

&:hover {
  color: rgb(139, 0, 0);
}
`
export const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background-color: rgb(38, 38, 76);
  box-shadow: 5px 5px 5px rgb(17, 17, 40);
  border-radius: 10px;
`
export const TaskHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px 10px 0 0;
  background-color: #fff;
  opacity: 0.7;
  padding: 4%;
  ${(props) => (props.height > props.width ? `flex-wrap: wrap;` : null)}
`
export const TaskBodyContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0 0 10px 10px;
  opacity: 0.7;
  padding: 4%;
`
export const TaskToggleContainer = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid rgb(17, 17, 40);
  background-color: #fff;
  opacity: 0.7;
  padding: 2% 4%;
  ${(props) =>
    props.height > props.width
      ? `flex-wrap: wrap; justify-content: center; padding: 4%`
      : null}
`
export const Task = styled.div``
export const Input = styled.input`
  background-color: #eee;
  border: none;
  border-radius: 5px;
  padding: 12px 15px;
  margin: 10px;
  width: 100%;
  ${(props) => (props.height > props.width ? `margin:5px;` : null)}
`
export const PrimaryButton = styled.button`
  background-color: rgb(17, 17, 40);
  color: #ffffff;
  width: 250px;
  border: 1px solid rgb(17, 17, 40);
  border-radius: 5px;
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 12px 25px;
  margin: 10px;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.height > props.width
      ? `width:45%; margin:5px; padding: 12px 12px`
      : null}
`
export const GhostButton = styled(PrimaryButton)`
  background-color: transparent;
  border-color: rgb(17, 17, 40);
  color: rgb(17, 17, 40);
`
export const ActiveButton = styled(PrimaryButton)`
  &:active {
    transform: none;
  }
  width: 100px;
  padding: 3px;
  margin: 0;
  border-radius: 0;
  ${(props) =>
    props.InActive
      ? `background-color: transparent;
  border-color: rgb(17, 17, 40);
  color: rgb(17, 17, 40);
  width: 100px;
  padding: 3px;
  margin: 0;
  border-radius: 0;`
      : null}
`

export const TodoListItem = styled.div`
  position: relative;
  background-color: rgb(28, 28, 66);
  display: flex;
  justify-content: space-between;
  padding: 25px;
  padding-bottom: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  align-items: center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, deeppink, cyan);
  }

  &::before {
    top: 0;
    left: 0;
  }

  &::after {
    bottom: 0;
    right: 0;
  }
`;

export const TodoListItemH3 = styled.h3`
  font-size: 25px;
  color: cadetblue;
  font-weight: bold;
  margin: 0;
`;

export const TodoListItemP = styled.p`
  font-size: 14px;
  color: rgb(161, 161, 161);
  margin-top: 8px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  font-size: 35px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
export const EditIcon = styled(CiEdit)`
  font-size: 35px;
  cursor: pointer;

  &:hover {
    color: blue;
  }
`;

export const CheckIcon = styled(BsCheckLg)`
  font-size: 35px;
  margin-left: 10px;
  color: rgb(0, 230, 122);

  &:hover {
    color: rgb(4, 196, 106);
  }
`;

export const Star = styled(AiOutlineStar)`
 
  // &.clicked {
  //   color: goldenrod;
  // }

  font-size: 35px;
  cursor: pointer;
  ${(props)=>props.star?`color:goldenrod`:null}
`;



