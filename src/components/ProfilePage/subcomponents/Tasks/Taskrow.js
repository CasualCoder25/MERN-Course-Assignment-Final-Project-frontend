import Axios from "axios";
import { FaArrowAltCircleUp,FaArrowAltCircleDown } from "react-icons/fa";
import EditTaskPopup from "./EditTaskPopup";
import { useState } from "react";
import * as Components from "./TaskComponents"

function Taskrow(props) {
  const [modal,setModal]=useState(false);
  const toggle=()=>{
    setModal(!modal);
  }
  
  const { _id, user_email_id,
    task_name,
    task_desc,
    star,
    priority_number,
    reminder_active,
    reminder_time,
    completed } = props.obj; //Object destruction

    const task = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: true,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed
    }

  const handleToDoDelete = () => {
    Axios.delete("http://localhost:8000/tasks/task/delete-task", _id)
      .then((res) => {
        if (res.data.status === 500) {
          Promise.reject();  
        }
        else{
          console.log("Record deleted successfully");
          window.location.reload();
        }
          
      })
      .catch((err) => alert(err));
  }

  const handleComplete = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: star,
      priority_number: priority_number,
      reminder_active: false,
      reminder_time: reminder_time,
      completed: true
    }
    Axios.put("http://localhost:8000/tasks/task/edit-task", data)
      .then((res) => {
        if (res.status === 200)
          console.log("record updated")
        else Promise.reject();
      })
      .catch((err) => alert(err));
  }


  const handleStarClick = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: true,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed
    }
    Axios.put("http://localhost:8000/tasks/task/edit-task", data)
      .then((res) => {
        if (res.status === 200)
        console.log("starred")
        else Promise.reject();
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
      <Components.EditIcon 
      onClick={()=>setModal(true)}
      />
      
        <Components.DeleteIcon
          onClick={() => handleToDoDelete()}
        />
        <Components.CheckIcon
          onClick={() => handleComplete()}
        />

        <Components.Star 
          star={star}
          onClick={() => handleStarClick()}
        />

      </div>
      <EditTaskPopup modal={modal} toggle={toggle} taskObj={task}/>
    </Components.TodoListItem>





  )
}
export default Taskrow;
