function Pessoa({nome, idade, profissao, foto}) { //structuring: pegando as props direto
    return (
        <div>
            <h2>Nome: {nome}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoa;