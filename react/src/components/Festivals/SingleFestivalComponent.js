import React from 'react';
import picture from './img/poilsis.jpg';
import './styles.css';


const SingleFestivalComponent = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <img src={picture} alt="poilsis" width="150px"></img>
                </div>
                <div className="col-3">
                    <h5>{props.title}</h5>
                    <p>{props.description}</p>
                    <p>{props.type}</p>
                    <p>Veliava: {props.flag}</p>
                </div>
            </div>
        </div>
    );
}

export default SingleFestivalComponent;