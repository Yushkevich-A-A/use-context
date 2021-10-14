import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Info from './Info/Info';

import './Details.css';

function Details(props) {
    const { info } = props;


    const [dataUser, setDataUser] = useState(null);
    const [ loadingUser, setLoadingUser ] = useState(false); 

    useEffect(() => {
        setLoadingUser(true)
        fetch(`${process.env.REACT_APP_USER_DATA}/${info.id}.json`)
            .then(response => response.json())
            .then(result => setDataUser(result))
            .catch((e) => console.log(e))
            .finally(() => {
            setLoadingUser(false)
            })
        }, [info])

    return (
            
            <div className='details' >
                {loadingUser && <p>Загрузка...</p>}
                {dataUser && <Info id={dataUser.id} data={dataUser}/>}
            </div>
    )
}

Details.propTypes = {

};

export default Details;

