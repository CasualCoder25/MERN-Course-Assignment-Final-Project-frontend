import { useEffect, useState } from "react"
import TaskCompletedItem from "./TaskCompletedItem"
import TaskPendingItem from "./TaskPendingItem"

// refresh , data, SearchString
const TaskTable = (props) => {
  const [data, setData] = useState(props.data)
  useEffect(() => {
    let users = props.data
    if (props.searchString.length > 0) {
      users = props.data.filter((user) => {
        return user.task_name.match(props.searchString)
      })
    }
    setData(users)
  }, [props.searchString, props.data])
  return (
    <>
      {data.map((user) => {
        return props.completedView ? (
          <TaskCompletedItem data={user} refresh={props.refresh} />
        ) : (
          <TaskPendingItem data={user} refresh={props.refresh} />
        )
      })}
    </>
  )
}

export default TaskTable
