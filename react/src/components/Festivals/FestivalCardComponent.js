import React from 'react';
import PropTypes from 'prop-types';
import picture from './img/poilsis.jpg';
import {Link} from 'react-router-dom';


const FestivalCardComponent = (props) => {
    var linkas = "/festivals/" + props.title;
    return (
       
          <div className="card">
            <img className="card-img-top" src={picture} alt="poilsis"/>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <p className="card-text">Tipas: {props.type}</p>
              <p className="card-text">Veliava</p>
              <Link className="btn btn-primary" to={linkas}>Apie svente daugiau</Link>
            </div>
          </div>
      
  );
  }
  
FestivalCardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    type: PropTypes.number.isRequired,
    flag: PropTypes.bool.isRequired
};

export default FestivalCardComponent;