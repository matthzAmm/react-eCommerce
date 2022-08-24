import styles from './pages.module.css'

function Contato(){
    return(

        <div className={styles.mainDivContato}>
            <h1>Contato</h1>
            <h3>Fale Conosco!</h3>
            <img src='img/dialogIcon.png'/>
            <div className={styles.contactDiv}>
                <p>Email: contato@InitialExpress.com</p>
                <p>Facebook: Intial Express Br</p>
                <p>Linkedin: Intial Express Br</p>
                <p>Instagram: Intial Express Br</p>
            </div>
        </div>
    )
}

export default Contato