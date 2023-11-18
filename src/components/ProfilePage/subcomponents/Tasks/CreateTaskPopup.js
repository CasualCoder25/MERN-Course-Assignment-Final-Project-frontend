import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
const CreateTaskPopup = ({ modal, toggle }) => {
    //for create task
    const [task_name, setTaskName] = useState("");
    const [task_desc, setTaskDesc] = useState("");
    const [star, setStar] = useState(false);
    const [priority_number, setPriorityNumber] = useState(0); //SET PRIORITY
    const [reminder_active, setReminderActive] = useState(false);
    const [reminder_time, setReminderTime] = useState("");
    const [completed, setCompleted] = useState(false);

    const handleSave = (e) => {
        e.preventDefault();
        const data = {
            task_name: task_name,
            task_description: task_desc,
            star: star,
            priority_number: priority_number,
            reminder_active: reminder_active,
            reminder_time: reminder_time,
            completed: completed
        }
        Axios.post("http://localhost:8000/tasks/task/create-task", data)
            .then((res) => {
                if (res.data.status === 500) {
                    console.log("error")
                }
                else
                    console.log("success");
                // alert("record added successfully");
                // setTaskCount(count => count + 1);
            })
            .catch((err) => alert(err))
        e.target.reset();
    }

    function sendDateTime() {
        const datetimeInput = document.getElementById("datetime");
        const selectedDateTime = new Date(datetimeInput.value);
    
        const monthNamesShort = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
    
        const month = monthNamesShort[selectedDateTime.getMonth()];
        const day = String(selectedDateTime.getDate()).padStart(2, '0');
        const year = selectedDateTime.getFullYear();
        const hours = String(selectedDateTime.getHours()).padStart(2, '0');
        const minutes = String(selectedDateTime.getMinutes()).padStart(2, '0');
        const seconds = String(selectedDateTime.getSeconds()).padStart(2, '0'); // Add seconds
    
        const formattedDateTime = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
        setReminderTime(formattedDateTime)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>

                <div className="form-group">
                    <label>Task Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setTaskName(e.target.value)} name="taskName" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea rows="5" className="form-control" onChange={(e)=>setTaskDesc(e.target.value)} name="description"></textarea>
                </div>
                <br/>
                <div className="form-group">
                    <input class="form-check-input" type="checkbox" onChange={(e)=>setReminderActive(e.target.value)} id="flexCheckDefault" />
                    <label class="form-check-label" for="flexCheckDefault">
                    {'  '}    Would you like a reminder?
                    </label>
                </div>
                <div className="form-group">
                    <input type="datetime-local" id="datetime" className="form-control"/>
                    <button onClick={sendDateTime} >Set Reminder</button>

                </div>

            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>Create</Button>{' '}
                <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;