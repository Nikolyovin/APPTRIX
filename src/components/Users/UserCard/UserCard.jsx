import { Card, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import styles from './UserCard.module.css'
import { requestUser, setCurrentUser } from '../../../redux/users-reducer'
import { useParams } from 'react-router-dom';

const UserCard = () => {
    const dispatch = useDispatch()
    const { userId } = useParams()

    // const state = useSelector(state => state)
    const currentUser = useSelector(state => state.users.currentUser)
    const { $type, email, id, login, name } = currentUser

    if (Object.keys(currentUser).length == 0) {
        dispatch(requestUser(userId))
    }
    
    if (Object.keys(currentUser).length == 0) return  (<div className = { styles.loadingWrap }> <Spin size='large' tip="Loading..."/> </div>)

    return (
        <Card title="Карточка пользователя"  style={{ width: '100%' }}>
            <p className={styles.title}>Type: <span className={styles.span}>{$type}</span></p>
            <p className={styles.title}>Email: <span className={styles.span}>{email}</span></p>
            <p className={styles.title}>User id: <span className={styles.span}>{id}</span></p>
            <p className={styles.title}>Login: <span className={styles.span}>{login}</span></p>
            <p className={styles.title}>Name: <span className={styles.span}>{name}</span></p>
        </Card>
    )
}

export default UserCard