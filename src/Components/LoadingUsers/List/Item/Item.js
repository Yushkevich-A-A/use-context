import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';


function Item(props) {
    const { item, handleClick, selectedId } = props;

    return (
        <div className={`item ${selectedId === item.id ? 'selected' : ''}`} onClick={() => handleClick(item)}>
            {item.name}
        </div>
    )
}

Item.propTypes = {

};

export default Item;

