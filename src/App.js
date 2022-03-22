
import './App.css';
import './App.scss';
import HomeScreen from './Screens/Home';
import DetailScreen from './Screens/Detail';
import SignupScreen from './Screens/Signup';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Layouts/Header';
import SignInScreen from './Screens/Signin';
import { Component } from 'react';
import { connect } from 'react-redux';
import { createAction } from './Redux/Actions';
import { FETCH_CREDENTIALS } from './Redux/Actions/type';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/detail/:courseId" component={DetailScreen} />
          <Route path="/signup" component={SignupScreen} />
          <Route path="/signin" component={SignInScreen} />
          <Route path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }

  _getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem('credentials')
    if (credentialsStr) {
      this.props.dispatch(createAction(FETCH_CREDENTIALS, JSON.parse(credentialsStr)))
    }
  }
  componentDidMount() {
    this._getCredentialFromLocal()
  }
}

export default connect()(App);
