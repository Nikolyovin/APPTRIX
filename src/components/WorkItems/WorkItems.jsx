import { Button, Spin, Table } from 'antd'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useReactToPrint } from 'react-to-print'
import { requestTimeSheet } from '../../redux/tasks-reducer'
import Loading from '../common/Loading'
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

  if (workItems.length == 0) return  <Loading/>

  return (
    <div className = { styles.workItemsWrap }>
      <Table 
        rowKey = "name" 
        dataSource = { workItems } 
        columns = { columns } 
        ref={componentRef}
        pagination={{ position: ['bottomCenter'] , showSizeChanger: false }}
      />
      <div className = { styles.buttonWrap }>
        <Button type="primary" onClick={handlePrint}>Export PDF</Button>
      </div>
    </div>

  )
}

export default WorkItems