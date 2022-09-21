import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { requestUser, requestUsers } from '../../redux/users-reducer'
import styles from './Users.module.css'

const Users = () => {
  const dispatch = useDispatch()

  const state = useSelector(state => state)
  const users = useSelector(state => state.users.users)
  const isAuth = useSelector(state => state.auth.isAuth)

  useEffect(() => {
    dispatch(requestUsers())
  }, [ ])

  const columns = [
    {
      title: 'email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
  ]

  const onRow = (record, rowIndex) => {
    return {
      onClick: event => {
        dispatch(requestUser(record.id))
      }
    }
  }
  
  if (!isAuth) return <Navigate to = { '/login' } />

  return (
    <div className = { styles.usersWrap } >
      <Table 
        rowKey = "id" 
        dataSource = { users } 
        columns = { columns } 
        onRow = { onRow }/>
    </div>
  )
}

export default Users