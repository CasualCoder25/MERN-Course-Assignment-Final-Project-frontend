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
        Axios.delete("http://localhost:8000/tasks/task/delete-task", _id)
            .then((res) => {
                if (res.status === 200) {
                    // alert("Record deleted successfully");
                    window.location.reload();
                }
                else
                    Promise.reject();
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