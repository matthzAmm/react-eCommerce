import styles from './pages.module.css'

function Home(){
    return(

        <div className={styles.contentHome}>
            <h1>Importando os mais diversos tipos de produto!</h1>
            <p>Desde calçados até equipamentos eletronicos nós da Initial Express temos diversas opções de produtos</p>
            <div className={styles.homeImgDiv}>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt01.jpg"/>
                    <h3>Conjunto Feminino</h3>
                    <h5>De: China Ocidental</h5>
                </div>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt02.jpg"/>
                    <h3>All Stars - 2022</h3>
                    <h5>De: Europa</h5>
                </div>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt03.jpg"/>
                    <h3>Notebook Lenovo Dual Core 4GB</h3>
                    <h5>De: China Ocidental</h5>
                </div>             
            </div>
            <div className={styles.homeImgDiv}>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt04.jpg"/>
                    <h3>GeForce RTX 2060, 6GB, GDDR6</h3>
                    <h5>De: USA</h5>
                </div>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt05.jpg"/>
                    <h3>Sapatilha Salomé Preta</h3>
                    <h5>De: Europa</h5>
                </div>
                <div className={styles.itemDiv}>
                    <img className={styles.mainImg} src="/img/pdt06.jpg"/>
                    <h3>Processador Intel Core i9-12900K</h3>
                    <h5>De: China Ocidental</h5>
                </div>
            </div>
        </div>
    )
}

export default Home