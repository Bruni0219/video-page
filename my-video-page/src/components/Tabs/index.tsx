import {FC} from "react"
import styles from './styles.module.scss'

const Tabs:FC = () =>{
    return(
        <ul className={styles.tabs}>
            <li>大會員</li>
            <li>消息</li>
            <li>動態</li>
        </ul>
    )
}

export default Tabs;