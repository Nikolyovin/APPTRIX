import { Spin } from 'antd'
import styles from './common.module.css'

const Loading = () => {
    return (
        <div className = { styles.loadingWrap }> 
            <Spin size='large' tip="Loading..."/> 
        </div>
    )
}

export default Loading