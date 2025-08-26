import styles from './Frase.module.css'
//estilo independente: somente para este componente

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p>Este é um componente contendo uma frase!</p>
        </div>
    )
}

export default Frase;