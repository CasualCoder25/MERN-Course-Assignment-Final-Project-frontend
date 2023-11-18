import React from 'react'
import Axios from "axios";
import './Profile.css';
import { AiOutlineDelete } from 'react-icons/ai';
const Completedrow = (props) => {
    const { _id, user_email_id,
        task_name,
        task_desc,
        star,
        priority_number,
        reminder_active,
        reminder_time,
        completed } = props.obj;

    const handleToDoDelete = () => {
        Axios.delete("http://localhost:8000/task/delete-task", _id),{
      withCredentials: true,
    }
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
        }
        else{
          console.log("Record deleted successfully");
          window.location.reload();
        }
          
      })
      .catch((err) => alert(err));
    }
    return (
        <Components.TodoListItem>
            <div>
                <Components.TodoListItemH3>{task_name}</Components.TodoListItemH3>
                <Components.TodoListItemP>{task_desc}</Components.TodoListItemP>

            </div>
            <div>
                <Components.DeleteIcon
                    onClick={() => handleToDoDelete()}
                />
            </div>
        </Components.TodoListItem>

    )
}

export default Completedrow;