import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { setCurrentUser, requestUsers } from '../../redux/users-reducer'
import styles from './Users.module.css'

const Users = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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

  const onRow = (record) => {
    return {
      onClick: event => {
        navigate(  `/users/${record.id}`)
        dispatch(setCurrentUser(record))
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
        onRow = { onRow }
        pagination={false}
      />
    </div>
  )
}

export default Users