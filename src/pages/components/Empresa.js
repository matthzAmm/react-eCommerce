import styles from './pages.module.css'

function Empresa(){
    return(

        <div className={styles.contentEmpresa}>
            <h1>Empresa</h1>
            <h3>Quem somos nos:</h3>
            <p>Somos uma empresa brasileira que realiza importações dos mais diversos tipos de produtos
               das mais diversas localidades pelo mundo proporcionando produtos não encontrados ou com
               valores inflacionados por um preço justo.
            </p>
            <img className={styles.empresaImg} src="/img/empresa01.jpeg"/>
            <h3>Barração de produtos</h3>
            <p>
            Caso a encomenda caia na alfândega, o recebimento do produto só ocorre caso a carga tributária seja paga. 
            A Receita Federal emitirá um comunicado para informar o bloqueio da encomenda. O consumidor, 
            contudo, pode recorrer e tentar uma justificativa para não pagar o imposto. Contudo boa parte dos produtos
            Mesmo com a carga tributária estarão abaixo do preço encontrado no mercado, alem disso a carga triburia é 
            informada ao comprador no ato de compra dessa forma não causando surpresas ao cliente.
            </p>
            <img className={styles.empresaImg} src="/img/tradeIcon.png"></img>


        </div>
    )
}

export default Empresa