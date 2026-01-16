import {FC} from "react"
import styles from './styles.module.scss'

const Tabs = () =>{
    return(
        <div className={styles.tabs}>
            <ul>
                <li>大會員</li>
                <li>消息</li>
                <li>動態</li>
            </ul>
        </div>
    )
}

export default Tabs;