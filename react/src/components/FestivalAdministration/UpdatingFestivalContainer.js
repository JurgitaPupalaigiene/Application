import React from 'react';
import UpdatingFestivalComponent from './UpdatingFestivalComponent';
import axios from 'axios';
import { withRouter } from 'react-router';

class UpdatingFestivalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldTitle: "",
      title: "",
      image: "",
      description: "",
      type: "",
      flag: false
    };
  }

  componentDidMount() {
    const position = this.props.match.params.title;

    axios.get('http://localhost:8090/festivals/' + (position))
      .then((response) => {
        this.setState({oldTitle: response.data.title});
        this.setState({title: response.data.title});
        this.setState({image: response.data.image});
        this.setState({description: response.data.description});
        this.setState({type: response.data.type});
        this.setState({flag: response.data.flag});
      })
      .catch((error) => {
        console.log(error);
      });
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
    axios.put('http://localhost:8090/festivals/' + (this.state.oldTitle), this.state)
      .then(function (response) {
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  handleDelete = (event) => {
    event.preventDefault();
    axios.delete('http://localhost:8090/festivals/' + (this.state.oldTitle))
    .then((response) => {
        console.log("Ištrinta");
    })
    .catch(function (error) {
        console.log(error);
    });
  }

  render() {
    this.fromMenu = "Atnaujinama Šventė:";

    return (
      <UpdatingFestivalComponent handleChangeOfTitle={this.handleChangeOfTitle}
        handleChangeOfImage={this.handleChangeOfImage}
        handleChangeOfDescription={this.handleChangeOfDescription}
        handleChangeOfType={this.handleChangeOfType}
        handleChangeOfFlag={this.handleChangeOfFlag}
        handleSubmit={this.handleSubmit}
        handleDelete={this.handleDelete}
        fromMenu={this.fromMenu}
        currentTitle={this.state.title}
        currentImage={this.state.image}
        currentDescription={this.state.description}
        currentType={this.state.type}
        currentFlag={this.state.flag}
      />
    );
  }
}

export default withRouter(UpdatingFestivalContainer);