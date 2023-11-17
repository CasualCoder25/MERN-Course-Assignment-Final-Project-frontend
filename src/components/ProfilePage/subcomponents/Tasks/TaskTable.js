import React, { useState, useEffect } from 'react';
// import './Profile.css';
// import Taskrow from './Taskrow';
// import Axios from "axios";
// import Completedrow from './Completedrow';
// import CreateTaskPopup from './CreateTaskPopup';
import * as Components from './TasksComponents';
function TaskTable() {
  const [task_count,setTaskCount]=useState(0);
  //to toggle
  const [isCompletedScreen, setIsCompletedScreen] = useState(false);

  //for create task popup
  const [modal,setModal]=useState(false);
  const toggle=()=>{
    setModal(!modal);

  //for get requests of pending and completes tasks
  const [curr, setCurr] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);


  //fetch pending tasks
  useEffect(() => {
    Axios.get("https://localhost:8000/tasks/task/pending-tasks")
      .then((res) => {
        if (res.status === 200)
          setCurr(res.data);
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  //fetch completed tasks
  useEffect(() => {
    Axios.get("https://localhost:8000/tasks/task/completed-tasks")
      .then((res) => {
        if (res.status === 200)
          setCompletedTasks(res.data);
        else
          Promise.reject();
      })
      .catch((err) => alert(err));
  }, []);

  //display task row
  const pendingItems = () => {
    curr.sort((a, b) =>(!a.star&&b.star) && (a.priority_number < b.priority_number) ? 1 : -1)
    return curr.map((val, ind) => {
      return <Taskrow obj={val} />
    })
  }

  const completedItems = () => {
    //display in sorted order(debug?)
    completedTasks.sort((a, b) => a.priority_number > b.priority_number ? 1 : -1)
    return completedTasks.map((val, ind) => {
      return <Completedrow obj={val} />
    })
  }
  }
    return (
    <div style={{opacity:"0.8"}}>
      <Components.TodoWrapper>
        <Components.TodoInput>
          {/* <Searchbar/> */}
          <Components.TodoInputItem>
            <Components.PrimaryButton
              type="button"
              onClick={()=>setModal(true)}>
              New Task
            </Components.PrimaryButton>
          </Components.TodoInputItem>
        </Components.TodoInput>
        <Components.ButtonArea>
        <button
            className={`secondaryBtn ${isCompletedScreen === false && 'active'}`}
            onClick={() => setIsCompletedScreen (false)}
          >
            To Do
          </button>
          <button
            className={`secondaryBtn ${isCompletedScreen === true && 'active'}`}
            onClick={() => setIsCompletedScreen (true)}
          >
            Completed
          </button>
        
        
          
         
        </Components.ButtonArea>
        <div>
        {isCompletedScreen === false && pendingItems()}
          {isCompletedScreen === true && completedItems()}
        </div>
        
       
       
      </Components.TodoWrapper>
     
      {/* <CreateTaskPopup toggle={toggle} modal={modal}/> */}
    </div>
  );
}

export default TaskTable;