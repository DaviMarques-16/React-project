function Escola({nome, endereco, fundacao, alunos}) {
    return (
        <div>
            <h2>Nome escola: {nome}</h2>
            <p>
                Endereço: {endereco} <br />
                Fundação: {fundacao} <br />
                Alunos: {alunos} <br />
            </p>
        </div>    
        
    )
}
export default Escola;