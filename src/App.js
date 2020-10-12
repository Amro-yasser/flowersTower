import React, { Component } from 'react';

import useStyles from './Containers/Home'
import { BrowserRouter as Router, Switch, Route,Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Login from './Login';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Layout from './Containers/Home';
import * as actions from './store/actions/auth'



class App extends Component {
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.onTryAutoSignUp();
  }

  render(){
    const classes = useStyles;
    return (
      <>      
        <Router>
            <Layout {...this.props} />
            
          {/* </Layout> */}
        </Router>
      </>
    );
  }       
}

const mapStateToProps = state  => {
  return {
    isAuthenticated:localStorage.getItem('token') !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp:()=> dispatch(actions.authCheckState())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
