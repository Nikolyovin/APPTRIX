import { Button, Table } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
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

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className = { styles.workItemsWrap }>
      <Table 
        rowKey = "name" 
        dataSource = { workItems } 
        columns = { columns } 
        ref={componentRef}
      />
      <Button onClick={handlePrint}>Export PDF</Button>
    </div>

  )
}

export default WorkItems