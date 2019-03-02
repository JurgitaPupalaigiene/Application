import React from 'react';
import NewFestivalComponent from './NewFestivalComponent';
import axios from 'axios';
import { withRouter } from 'react-router';


class NewFestivalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image: '',
      description: '',
      type: '',
      flag: false,
     
    };
  }

  handleChangeOfTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  handleChangeOfImage = (event) => {
    this.setState({ image: event.target.value });
  }

  handleChangeOfDescription = (event) => {
    this.setState({ description: event.target.value });
  }

  handleChangeOfType = (event) => {
    this.setState({ type: event.target.value });
  }

  handleChangeOfFlag = (event) => {
    this.setState({ flag: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    axios.post('http://localhost:8090/festivals', this.state)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {

  }
  render() {
    
    this.fromMenu = "Iveskite naujos sventes duomenis:"

    return (
      <NewFestivalComponent handleChangeOfTitle={this.handleChangeOfTitle}
        handleChangeOfImage={this.handleChangeOfImage}
        handleChangeOfDescription={this.handleChangeOfDescription}
        handleChangeOfType={this.handleChangeOfType}
        handleChangeOfFlag={this.handleChangeOfFlag}
        handleSubmit={this.handleSubmit}
        fromMenu={this.fromMenu}
      />
    );
  }
}

export default withRouter(NewFestivalContainer);