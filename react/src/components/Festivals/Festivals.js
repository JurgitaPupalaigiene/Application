import React from 'react';
import FestivalCardComponent from './FestivalCardComponent';
import axios from 'axios';

class Festivals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            festivals: '',
            loading: 'Visos sventes pakeliui. Prasome palaukti ...'
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
            const festivalCard = this.state.festivals.map((festival, index) => {
                return (
                    <FestivalCardComponent
                        key={index}
                        title={festival.title}
                        description={festival.description}
                        image={festival.image}  
                        type={festival.type}
                        flag={festival.flag}
                    />
                );
            });
            return (<div className="row">{festivalCard}</div>);
        }
        return this.state.loading;
    }
}

export default Festivals;