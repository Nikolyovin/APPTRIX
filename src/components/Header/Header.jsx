import styles from './Header.module.css'
import { Button, Typography } from 'antd'
import  { UserOutlined } from '@ant-design/icons/lib/icons'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/auth-reducer'

const Header = () => {
    const dispatch = useDispatch()
   
    const onLogout = () => {
        dispatch(logout())
    }

    const isAuth = useSelector(state => state.auth.isAuth)

    const username = useSelector(state => state.auth.username)

    return (
        <header className = { styles.headerContainer }>
            <div className={ styles.headerWrap }>
                {
                    isAuth 
                        ? 
                            <div className = { styles.iconWrap}>
                                <UserOutlined style = {{ fontSize: '28px', color: '#efefef' }}/>
                                <Typography style = {{ color: '#efefef' }}>
                                    {username}
                                </Typography>
                            </div>
                        : 
                            <div className = { styles.gagLeft }></div>
                }
                
                <h4 className = { styles.title }>APPTRIX TEST TASK</h4>

                {
                    isAuth 
                        ? <Button onClick = { onLogout } className = { styles.button }>Logout</Button>
                        : <div className = { styles.gagRight }></div>
                }
                
            </div>
        </header>
    )
}

export default Header