import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
import * as Components from "../Components"
const EditTaskPopup = (props) => {
    const data = props.data
    const [task_name, setTaskName] = useState(data.task_name)
    const [task_desc, setTaskDesc] = useState(data.task_description)
    const [star, setStar] = useState(data.star)
    const [priority_number, setPriorityNumber] = useState(data.priority_number)
    const [reminder_active, setReminderActive] = useState(data.reminder_active)
    const [reminder_time, setReminderTime] = useState(data.reminder_time)
    const [completed, setCompleted] = useState(data.completed)
    const [dateTimeInput, setDateTimeInput] = useState(new Date())
    const [starButtonText, setStarButtonText] = useState("")
    const [starText, setStarText] = useState("")
    const [displayText, setDisplayText] = useState("")
    if (!star) {
        setStarText("Not marked as important")
        setStarButtonText("Set as important")
    } else {
        setStarText("Marked as important")
        setStarButtonText("Set as not important")
    }

    if (!reminder_active) {
        setDisplayText("Reminder is not set")
    } else {
        setDisplayText("Reminder is not set")
    }

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
    const toggleDisplayText = () => {
        if (!reminder_active) {
            setDisplayText("Reminder is set")
        } else {
            setDisplayText("Reminder is not set")
        }
    }

    const handleCancel = () => {
        props.setPopup(false)
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

    const handleUpdate = (event) => {
        event.preventDefault();
        const task = {
            task_id: data._id,
            task_name: task_name,
            task_description: task_desc,
            star: star,
            priority_number: priority_number,
            reminder_active: reminder_active,
            reminder_time: reminder_time,
            completed: completed
        }
        Axios.put("http://localhost:8000/task/edit-task", task, {
            withCredentials: true
        })
            .then((res) => {
                if (res.data.status === 500) {
                    console.log(res.data.error)
                } else {
                    props.refresh()
                }
            }).catch((err) => alert(err))
        props.setPopup(false)

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

    );
};

export default EditTaskPopup;
