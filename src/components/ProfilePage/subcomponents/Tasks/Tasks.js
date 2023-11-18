import { useEffect, useState } from "react"
import * as ProfileComponents from "./TasksComponents"
import Axios from "axios"
import TaskTable from "./TaskTable"
import CreateTaskPopup from "../Popups/CreateTaskPopup"

const Tasks = () => {
  const [createUserPopup, setCreateUserPopup] = useState(false)
  const [completedView, setCompletedView] = useState(false)
  const [refreshVar, setRefersh] = useState(false)
  const [data, setData] = useState([])
  const [searchString, setSearchString] = useState("")
  const refresh = () => {
    setRefersh(!refreshVar)
  }
  useEffect(() => {
    if (completedView) {
      Axios.get("http://localhost:8000/task/completed-tasks", {
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.status === 500) {
            console.log(res.data.error)
          } else {
            setData(res.data)
          }
        })
        .catch((err) => console.log(err))
    } else {
      Axios.get("http://localhost:8000/task/pending-tasks", {
        withCredentials: true,
      })
        .then((res) => {
          if (res.data.status === 500) {
            console.log(res.data.error)
          } else {
            setData(res.data)
          }
        })
        .catch((err) => console.log(err))
    }
  }, [completedView, refreshVar])
  return (
    <>
      <ProfileComponents.TaskContainer>
        <ProfileComponents.TaskHeaderContainer
          height={window.innerHeight}
          width={window.innerWidth}
        >
          <ProfileComponents.Input
            type="text"
            placeholder="Search Task"
            value={searchString}
            height={window.innerHeight}
            width={window.innerWidth}
            onChange={(event) => setSearchString(event.target.value)}
          />
          <ProfileComponents.GhostButton
            height={window.innerHeight}
            width={window.innerWidth}
          >
            Search
          </ProfileComponents.GhostButton>
          <ProfileComponents.PrimaryButton
            height={window.innerHeight}
            width={window.innerWidth}
            onClick={() => setCreateUserPopup(true)}
          >
            Add Task+
          </ProfileComponents.PrimaryButton>
        </ProfileComponents.TaskHeaderContainer>
        <ProfileComponents.TaskToggleContainer
          height={window.innerHeight}
          width={window.innerWidth}
        >
          <ProfileComponents.ActiveButton
            InActive={completedView}
            onClick={() => setCompletedView(false)}
          >
            Pending
          </ProfileComponents.ActiveButton>
          <ProfileComponents.ActiveButton
            InActive={!completedView}
            onClick={() => setCompletedView(true)}
          >
            Completed
          </ProfileComponents.ActiveButton>
        </ProfileComponents.TaskToggleContainer>
        <ProfileComponents.TaskBodyContainer>
          <TaskTable data={data} searchString={searchString} />
        </ProfileComponents.TaskBodyContainer>
        <CreateTaskPopup
          refresh={refresh}
          popup={createUserPopup}
          setPopup={setCreateUserPopup}
        />
      </ProfileComponents.TaskContainer>
    </>
  )
}

export default Tasks
