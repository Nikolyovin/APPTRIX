import { Input, Popconfirm, Table } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TaskList.module.css'
import { requestFoundTasks, requestTasks, requestTimeSheet } from '../../redux/tasks-reducer'
import { useNavigate } from 'react-router-dom';

const TaskList = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.tasks)
  const { Search } = Input

  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(requestTasks())
  }, [ ])

  const handleRoute = (record) => {
    dispatch(requestTimeSheet(record.id))
    navigate( `/taskList/:workItems`)
  }

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
    {
      title: 'Time sheet',
      dataIndex: 'timeSheet',
      render: (_, record) =>
          <Popconfirm title="Sure to open time sheet?" onConfirm={() => handleRoute(record)}>
            <a>Timesheet</a>
          </Popconfirm>
    },
  ]

  const changeInput = (e) => {
    const length = e.target.value.length
    if (length > 2) dispatch(requestFoundTasks(e.target.value))
    if (length == 0) dispatch(requestTasks())
  }

  return (
    <div className = { styles.tableWrap }>
      <Search 
        placeholder="search for name" 
        onChange = {changeInput} 
        // loading 
      />
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