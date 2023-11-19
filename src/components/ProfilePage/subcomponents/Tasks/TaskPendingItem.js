import Axios from "axios"
import EditTaskPopup from "../Popups/EditTaskPopup"
import { useState } from "react"
import * as Components from "./TasksComponents"

const TaskPendingItem = (props) => {
  const [editUserPopup, setEditUserPopup] = useState(false)
  const {
    _id,
    task_name,
    task_desc,
    star,
    priority_number,
    reminder_active,
    reminder_time,
    completed,
  } = props.data
  const handleTaskDelete = () => {
    Axios.post(
      "https://mern-final-project-backend.onrender.com/task/delete-task",
      { task_id: _id },
      {
        withCredentials: true,
      }
    )
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          alert("error")
        } else {
          props.refresh()
        }
      })
      .catch((err) => {
        console.log(err)
        alert("error")
      })
  }

  const handleTaskComplete = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: star,
      priority_number: priority_number,
      reminder_active: false,
      reminder_time: reminder_time,
      completed: true,
    }
    Axios.put("https://mern-final-project-backend.onrender.com/task/edit-task", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          alert("error")
        } else {
          props.refresh()
        }
      })
      .catch((err) => {
        console.log(err)
        alert("error")
      })
  }

  const handleStarClick = () => {
    const data = {
      task_id: _id,
      task_name: task_name,
      task_description: task_desc,
      star: !star,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed,
    }
    Axios.put("https://mern-final-project-backend.onrender.com/task/edit-task", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
          alert("error")
        } else {
          props.refresh()
        }
      })
      .catch((err) => {
        console.log(err)
        alert("error")
      })
  }
  return (
    <Components.TodoListItem>
      <Components.TodoListItemTitle>{task_name}</Components.TodoListItemTitle>
      <Components.EditIcon onClick={() => setEditUserPopup(true)} />
      <Components.DeleteIcon onClick={() => handleTaskDelete()} />
      <Components.CheckIcon onClick={() => handleTaskComplete()} />
      <Components.Star star={star} onClick={() => handleStarClick()} />
      <EditTaskPopup
        refresh={props.refresh}
        popup={editUserPopup}
        setPopup={setEditUserPopup}
        data={props.data}
      />
    </Components.TodoListItem>
  )
}
export default TaskPendingItem
