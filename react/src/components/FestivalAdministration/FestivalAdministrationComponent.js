import React from 'react';
import picture from '../Festivals/img/poilsis.jpg';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const FestivalAdministrationComponent = (props) => {
    
    var linkas = "/admin/festivals/" + props.title;
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                    <Link to={linkas}>{props.title}</Link> 
                </div>
                <div className="col-2">
                    <img src={picture} alt="poilsis" width="50px"></img>
                </div>
                <div className="col-8">
                    <p>{props.description}</p>                    
                </div>
            </div>
        </div>
    );
    }


export default withRouter(FestivalAdministrationComponent);