import { Input, Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskList.module.css'
import { requestTasks } from '../../redux/tasks-reducer'

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)
  console.log('tasks:', tasks);
  useEffect(() => {
    dispatch(requestTasks())
  }, [ ])

  const columns = [
    {
      title: 'TaskId',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Summary',
      dataIndex: 'summary',
      key: 'summary',
    },
    {
      title: 'Project name',
      dataIndex: ['project', 'name'],
      key: 'project',
    },
  ]

  return (
    <div className = { styles.tableWrap }>
      <Input placeholder="search for name" />
      <Table 
        rowKey = "id" 
        dataSource = { tasks } 
        columns = { columns } 
        pagination={{ position: 'bottomCenter' }}
        // onRow = { onRow }
      />
    </div>
  )
}

export default TaskList