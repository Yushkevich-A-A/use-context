import React from 'react';
import './Info.css';

function Info(props) {
    const { data } = props;
    return (
        <div className='info'>
            <img className='info-img' src={data.avatar} alt="" />
            <div className="info-name">{data.name}</div>
            <div className='info-text'>{data.details.city}</div>
            <div className='info-text'>{data.details.company}</div>
            <div className='info-text'>{data.details.position}</div>
        </div>
    )
}

Info.propTypes = {

};

export default Info;

