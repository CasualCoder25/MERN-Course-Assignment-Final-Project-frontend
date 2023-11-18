import { useEffect, useState } from "react"
import * as ProfileComponents from "./TasksComponents"
import Axios from "axios"
import TaskTable from "./TaskTable"

const Tasks = () => {
  const [completedView, setCompletedView] = useState(false)
  const [refreshVar, setRefersh] = useState(false)
  const [data, setData] = useState([])
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
            height={window.innerHeight}
            width={window.innerWidth}
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
          <TaskTable data={data} />
        </ProfileComponents.TaskBodyContainer>
      </ProfileComponents.TaskContainer>
    </>
  )
}

export default Tasks
