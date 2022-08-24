import { Link } from "react-router-dom"
import styles from "./NavBar.module.css"

function NavBar(){

    return(
        
    <div className={styles.navBarMain}>
        <h1 className={styles.text}>Initial Express</h1>
        <div className={styles.subDiv}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link className={styles.link} to = "/">Home</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to = "/empresa">Empresa</Link>
            </li>
            <li className={styles.item}>
                <Link className={styles.link} to = "/contato">Contato</Link>
            </li>
        </ul>
        </div>
        
    </div>
    )
}

export default NavBar