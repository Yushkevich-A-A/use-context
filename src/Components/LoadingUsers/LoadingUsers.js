import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import List from './List/List';
import Details from './Details/Details';

import './LoadingUsers.css';

function LoadingUsers() {
  const [ list, setList ] = useState([]);
  const [ info, setInfo ] = useState(null);
  const [ loading, setLoading ] = useState(false);  
  const [ selected, setSelected ] = useState(0);

  useEffect(() => {
    setLoading(true)
    fetch(`${process.env.REACT_APP_USER_DATA}/users.json`)
      .then(response => response.json())
      .then(result => setList(result))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false))
  }, [])

  const handleClick = (data) => {
    if ( selected === data.id) {
      return;
    }
    setSelected(data.id)
    setInfo(data);
  }
    return (
        <div className="loading-container">
            {loading && <p>Загрузка...</p>}
            <List list={list} handleClick={handleClick} selectedId={selected}/>
            {info ? <Details info={info}/> : null}
        </div>
    )
}

LoadingUsers.propTypes = {

};

export default LoadingUsers;

