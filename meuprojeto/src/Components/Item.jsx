import PropTypes from 'prop-types'

function Item({music, lancamento}) {
    return (
        <>
            <li>{music} - {lancamento}</li>
        </>
    ) 
}

Item.propTypes = {
    music: PropTypes.string.isRequired,
}

export default Item;