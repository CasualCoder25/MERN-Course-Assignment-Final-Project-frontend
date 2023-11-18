import React, { useState } from "react"
import { Modal, ModalBody, ModalFooter } from "reactstrap"
import Axios from "axios"
import * as Components from "../Components"

const CreateTaskPopup = (props) => {
  const [task_name, setTaskName] = useState("")
  const [task_desc, setTaskDesc] = useState("")
  const [star, setStar] = useState(false)
  const [priority_number, setPriorityNumber] = useState(0)
  const [reminder_active, setReminderActive] = useState(false)
  const [reminder_time, setReminderTime] = useState("")
  const [completed, setCompleted] = useState(false)
  const [dateTimeInput, setDateTimeInput] = useState(new Date())
  const [starButtonText, setStarButtonText] = useState("Set as important")
  const [starText, setStarText] = useState("Not marked as important")
  const [displayText, setDisplayText] = useState("Reminder is not set")
  const toggleStarButtonText = () => {
    if (!star) {
      setStarButtonText("Set as unimportant")
    } else {
      setStarButtonText("Set as important")
    }
  }
  const toggleStarText = () => {
    if (!star) {
      setStarText("Marked as important")
    } else {
      setStarText("Not marked as important")
    }
  }
  const reset = () => {
    setTaskName("")
    setTaskDesc("")
    setStar(false)
    setPriorityNumber(0)
    setReminderActive(false)
    setReminderTime("")
    setCompleted(false)
    setDisplayText("Reminder is not set")
    setStarButtonText("Set as important")
    setStarText("Not marked as important")
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = {
      task_name: task_name,
      task_description: task_desc,
      star: star,
      priority_number: priority_number,
      reminder_active: reminder_active,
      reminder_time: reminder_time,
      completed: completed,
    }
    Axios.post("http://localhost:8000/task/create-task", data, {
      withCredentials: true,
    })
      .then((res) => {
        if (res.data.status === 500) {
          console.log(res.data.error)
        } else {
          props.refresh()
        }
      })
      .catch((err) => console.log(err))
    props.setPopup(false)
    reset()
  }
  const handleCancel = () => {
    props.setPopup(false)
    reset()
  }

  const sendDateTime = (dateTimeInput) => {
    const dateTime = new Date(dateTimeInput)
    const monthString = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    const month = monthString[dateTime.getMonth()]
    const day = String(dateTime.getDate()).padStart(2, "0")
    const year = dateTime.getFullYear()
    const hours = String(dateTime.getHours()).padStart(2, "0")
    const minutes = String(dateTime.getMinutes()).padStart(2, "0")
    const seconds = String(dateTime.getSeconds()).padStart(2, "0")
    const formattedDateTime = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`
    setReminderTime(formattedDateTime)
    setDisplayText("Reminder has been set")
  }

  return (
    <Modal isOpen={props.popup}>
      <Components.StyledModalHeader>
        <Components.PopupContainer>
          <Components.Title>Create Task</Components.Title>
        </Components.PopupContainer>
      </Components.StyledModalHeader>
      <ModalBody>
        <Components.PopupContainer>
          <Components.Input
            value={task_name}
            onChange={(event) => setTaskName(event.target.value)}
            placeholder="Enter Task Name"
          />
          <Components.Input
            value={task_desc}
            onChange={(event) => setTaskDesc(event.target.value)}
            placeholder="Enter Task Description"
          />
          <Components.Title>Need a reminder?</Components.Title>
          <Components.Input
            type="datetime-local"
            onChange={(event) => setDateTimeInput(event.target.value)}
          />
          <Components.Button
            onClick={() => {
              setReminderActive(true)
              sendDateTime(dateTimeInput)
            }}
          >
            Set Reminder
          </Components.Button>
          <Components.Paragraph>{displayText}</Components.Paragraph>
          <Components.Title>Important Task?</Components.Title>
          <Components.Button
            onClick={() => {
              toggleStarButtonText()
              toggleStarText()
              setStar(!star)
            }}
          >
            {starButtonText}
          </Components.Button>
          <Components.Paragraph>{starText}</Components.Paragraph>
        </Components.PopupContainer>
      </ModalBody>
      <ModalFooter>
        <Components.Button onClick={handleSubmit}>Submit</Components.Button>
        <Components.GhostButtonMobile onClick={handleCancel}>
          Close
        </Components.GhostButtonMobile>
      </ModalFooter>
    </Modal>
  )
}

export default CreateTaskPopup
