import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styles from './Users.module.css'

const Users = () => {
  const state = useSelector(state => state)
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log('isAuth:', isAuth);
  console.log('state:', state);

  if (!isAuth) return <Navigate to = { '/login' } />
    
  return (
    <div className = { styles.usersWrap }>
        Page Users
    </div>
  )
}

export default Users