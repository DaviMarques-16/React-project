import Item from './Item';

function List() {
    return(
    <>
        <h2>Minha lista de Músicas</h2>
        <ul>
            <Item music = 'All Too Well' />
            <Item music = 'Anti-Hero' />
            <li>Faroeste Caboclo</li> 
            <li>This is me trying</li>
            <li>Cowboy like me</li>
        </ul>       
        
    </>
    ) 
}

export default List;