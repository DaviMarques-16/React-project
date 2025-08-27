import Item from './Item';

function List() {
    return(
    <>
        <h2>Minha lista de Músicas</h2>
        <ul>
            <Item music = 'All Too Well' lancamento={2012} />
            <Item music = 'Anti-Hero' lancamento={1964} />
            <Item music= {87} lancamento={2025} />
            <li>This is me trying</li>
            <li>Cowboy like me</li>
        </ul>       
        
    </>
    ) 
}

export default List;