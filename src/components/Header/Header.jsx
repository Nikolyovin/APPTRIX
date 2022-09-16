import styles from './Header.module.css'
import { Button } from 'antd'
import  { UserOutlined } from '@ant-design/icons/lib/icons'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth-reducer'

const Header = () => {
    const dispatch = useDispatch()
   
    const onLogout = () => {
        dispatch(logout())
    }

    return (
        <header className = { styles.headerContainer }>
            <div className={ styles.headerWrap }>
                <UserOutlined style = {{ fontSize: '32px', color: '#efefef' }}/>
                <h4 className = { styles.title }>APPTRIX TEST TASK</h4>
                <Button onClick = { onLogout } className = { styles.button }>Logout</Button>
            </div>
        </header>
    )
}

export default Header