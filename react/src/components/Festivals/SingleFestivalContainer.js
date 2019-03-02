import React from 'react';
import SingleFestivalComponent from './SingleFestivalComponent';
import axios from 'axios';

class SingleFestivalContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            title: "",
            description: '',
            type: '',
            flag: false   
        }; 
    }
    
    componentDidMount() {
        const position = this.props.match.params.title;
        axios.get('http://localhost:8090/festivals/' + (position))
            .then((response) => {
                     this.setState({ 
                        title: response.data.title,
                        description: response.data.description,
                        type: response.data.type,
                        flag: response.data.flag
                }) 
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <SingleFestivalComponent
                     title={this.state.title}
                     description={this.state.description}
                     type={this.state.type}
                     flag={this.state.flag}/>
            </div>
        );
    }
}

export default SingleFestivalContainer;