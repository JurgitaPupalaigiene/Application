import React from 'react';
import FestivalAdministrationComponent from './FestivalAdministrationComponent';
import axios from 'axios';
import {Link} from 'react-router-dom';

class FestivalAdministrationContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: '',
            loading: 'Siulome isgerti kavos ar arbatos, nes svenciu ikelimas uztruks ...'
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8090/festivals')
            .then((response) => {
                this.setState({ festivals: response.data });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        if (this.state.festivals) {
            const festivalsCard = this.state.festivals.map((festival, index) => {
                return (
                    <FestivalAdministrationComponent
                        key={index}
                        title={festival.title}
                        image={festival.image}
                        description={festival.description}
                    />
                );
            });
            return (
    <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <div className="container">
                <div className="row">
                    <Link className="btn btn-primary btn-sm" to="/admin/festivals/new">Prideti nauja svente</Link>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>Svente</p>
                    </div>
                    <div className="col-2">
                         <p>Nuotrauka</p>
                    </div>
                    <div className="col-8">
                        <p>Aprasymas</p>
                    </div>
                </div>
                <div className="row">{festivalsCard}
                </div>
            </div>
        </div>
    </div>
                );
        }
        return this.state.loading;
    }
}

export default FestivalAdministrationContainer;