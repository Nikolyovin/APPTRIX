import { Tabs } from 'antd'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <aside className = { styles.aside }>
      <nav>
        <div >
          <NavLink to='/users' className={(navData) => navData.isActive ? styles.active : styles.item} >Users</NavLink>
        </div>
        <div >
          <NavLink to='/taskList' className={(navData) => navData.isActive ? styles.active : styles.item} >Task list</NavLink>
        </div>
      </nav>
    </aside>
  )
}

export default Sidebar
