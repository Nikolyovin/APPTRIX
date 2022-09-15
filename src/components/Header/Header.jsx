import styles from './Header.module.css'
import { Button } from 'antd'
import  { UserOutlined } from '@ant-design/icons/lib/icons'


const Header = () => {
   
    return (
        <header className = { styles.headerContainer }>
            <div className={ styles.headerWrap }>
                <UserOutlined style = {{ fontSize: '32px', color: '#efefef' }}/>
                <h4 className = { styles.title }>APPTRIX TEST TASK</h4>
                <Button className = { styles.button }>Logout</Button>
            </div>
        </header>
    )
}

export default Header