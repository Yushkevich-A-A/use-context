import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item/Item';
import './List.css';

function List(props) {
    const { list, handleClick, selectedId } = props;
    return (
        <div className='list'>
            {
                list.map( item => <Item key={item.id} item={item} handleClick={handleClick} selectedId={selectedId}/>) 
            }
        </div>
    )
}

List.propTypes = {

};

export default List;

