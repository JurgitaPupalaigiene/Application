import React, { Component } from 'react';
import './App.css';
import { Switch, Redirect, Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';
import Festivals from './components/Festivals/Festivals';
import SingleFestivalComponent from './components/Festivals/SingleFestivalComponent';
import FestivalAdministrationContainer from './components/FestivalAdministration/FestivalAdministrationContainer';
import NewFestivalContainer from './components/FestivalAdministration/NewFestivalContainer';
import UpdatingFestivalContainer from './components/FestivalAdministration/UpdatingFestivalContainer';
import noMatch from './components/NAVIGACIJA/noMatch';
import HomePage from './components/NAVIGACIJA/HomePage';


class App extends Component {
  

  render() {
    return (
     
      <BrowserRouter>
          <HomePage>
              <Switch>
                  <Route exact path='/' component={Festivals} />
                  <Route exact path="/festivals/:title" component={SingleFestivalComponent} />
                  <Route exact path='/admin' component={FestivalAdministrationContainer} />
                  <Route exact path="/admin/festivals/new" component={NewFestivalContainer} />       
                  <Route exact path="/admin/festivals/:title" component={UpdatingFestivalContainer} />   
                  <Route path="*" component={noMatch} />
                  <Route component={HomePage} />
              </Switch>
          </HomePage>
  </BrowserRouter>
      
    );
  }
}

export default App;
