import Palavras from './Palavras';
function SayMyName(props) {
    return (
        <div>
            <p>Fala aí: {props.nome}, suave?</p>
            <Palavras word="Sons" />
        </div>

    )
}

export default SayMyName;