import axios from 'axios';
import { useSelector } from 'react-redux';
import styles from './TaskList.module.css'

const TaskList = () => {
  const state = useSelector(state => state)
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <div className = { styles.tableWrap }>
      <button >Page TaskList</button>
    </div>
  )
}

export default TaskList