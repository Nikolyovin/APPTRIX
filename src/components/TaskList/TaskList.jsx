import { useSelector } from 'react-redux';
import styles from './TaskList.module.css'

const TaskList = () => {
  const state = useSelector(state => state)
  const isAuth = useSelector(state => state.auth.isAuth)
  console.log('isAuth:', isAuth);
  console.log('state:', state);
  return (
    <div className = { styles.tableWrap }>
      Page TaskList
    </div>
  )
}

export default TaskList