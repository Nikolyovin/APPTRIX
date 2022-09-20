import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { requestUsers } from '../../redux/users-reducer'
import styles from './Users.module.css'

const Users = () => {
  const state = useSelector(state => state)
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log('isAuth:', isAuth);
  console.log('state:', state);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestUsers())
    }, [ ])
  

  if (!isAuth) return <Navigate to = { '/login' } />
    
  return (
    <div className = { styles.usersWrap }>
        Page Users
    </div>
  )
}

export default Users