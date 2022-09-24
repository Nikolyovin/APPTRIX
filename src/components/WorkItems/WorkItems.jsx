import { Table } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { requestTimeSheet } from '../../redux/tasks-reducer'
import styles from './WorkItems.module.css'

const WorkItems = () => {
  const dispatch = useDispatch()
  const workItems = useSelector(state => state.tasks.workItems)
  console.log('workItems:', workItems);

  useEffect(() => {
    dispatch(requestTimeSheet())
  }, [ ])

  const columns = [
    {
      title: 'Имя пользователя',
      dataIndex: [ 'author', 'name' ],
      key: 'name',
    },
    {
      title: 'Затраченное время',
      dataIndex: [ 'duration', 'presentation' ],
      key: 'duration',
    },
    {
      title: 'WorkItemsId',
      dataIndex: 'id',
      key: 'id',
    },
        
  ]

  return (
    <div className = { styles.workItemsWrap }>
      <Table 
        rowKey = "name" 
        dataSource = { workItems } 
        columns = { columns } 
      />
    </div>
  )
}

export default WorkItems