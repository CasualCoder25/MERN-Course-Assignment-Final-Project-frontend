
import styled from "styled-components"
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from 'react-icons/ai';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineStar } from "react-icons/ai";

export const TaskContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const TodoWrapper = styled.div`
  background-color: rgb(38, 38, 76);
  padding: 2%;
  width: 100%;
  // height:100%

  // margin-left: auto;
  // margin-right: auto;
  margin-top: 10px;
//   max-height: 80vh;
//   overflow-y: auto;
  box-shadow: 0px 5px 7px rgb(27, 27, 27);
  border-radius: 10px;
`;

export const TodoInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgb(78, 78, 78);
  padding-bottom: 25px;
  margin-bottom: 25px;
`;

export const TodoInputItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 25px;
`;

export const TodoInputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 10px;
`;

export const PrimaryButton = styled.button`
  background-color: cyan;
  border: none;
  padding: 12px;
  border-radius: 3px;
  box-shadow: 0 0 5px cyan, 0 0 5px cyan;

  &:active {
    box-shadow: 0 0 5px cyan, 0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan, 0 0 10px cyan;
  }
`;

export const SecondaryButton = styled.button`
  background-color:rgb(17, 17, 40);
  color: white;
  border: none;
  border-radius: 3px;
   margin-top: 3%;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
`;

export const ActiveButton = styled.button`
  background-color: aqua;
  border: none;
  border-radius: 3px;
   margin-top: 3%;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
`;

export const ButtonArea = styled.div`
  margin-bottom: 15px;
`;

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



