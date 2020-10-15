import React from 'react';

import Login from '../Login';
import Signup from '../Signup';
import { connect }from 'react-redux';
import { compose } from 'redux';
import * as actions from '../store/actions/auth'
import { Link,BrowserRouter,Route,Switch ,Redirect,withRouter,HashRouter,useHistory} from 'react-router-dom'
import clsx from 'clsx';
import { ListItem,ListItemIcon,ListItemText,ListSubheader, Button } from '@material-ui/core';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import HomeComponent from '../Components/HomeComponent'
import FormAdding from '../Components/FormAdding'
import LoginSignup from '../Components/LoginSignup'
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faPlus,faHome,faSignOutAlt,faUserAlt,faCommentDots,faKey,faFileAlt } from '@fortawesome/free-solid-svg-icons'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';





export const useStyles = theme => ({
  root: {
    
  },
  bottomNavigation: {
    marginTop:'200px',
    color :'#ffffff',
    background:'#F7D039',
    borderRadius:'30px 30px 0 0  ',
    position: 'fixed',
    width:'100%',
    bottom:0,
  },
  upNavigation:{
    background:'#ffffff',
    borderRadius:'0 0 30px 30px'
  },
  toolbarIcon: {
    color: '#ffffff',
  
  },
  

  content: {
    height: '100vh',
    pading:'0px',
    margin:'0px'
  },
  
  fixedHeight: {
    height: 240,
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  
tab:{
  color:'#45B8AC',
  fontWeight:'bold',
  '&:hover': {
    color: "#f00",
 },
}

});

 class Layout extends React.Component {
   
  constructor(props){
    super(props);
    
    this.menuItems = {
      
        items:[
          {
            name:"Acceuil",
            url:"/home",
            icon:<FontAwesomeIcon icon={faHome} size="2x" />,
            
          },
          {
            name:"Cherche ",
            url:"/Annonces",
            icon:<FontAwesomeIcon icon={faSearch} size="2x"/>,
            
          },
          {
            name:"Poster ",
            url:"/ajouter",
            icon:<FontAwesomeIcon icon={faPlus} size="2x"/>,
            
          },
        ],
        items2:[
          {
            name:"Connexion",
            url:"/home",
            icon:<FontAwesomeIcon icon={faHome} size="2x" />,
            
          },
        ]
      
    }
    this.state = {
      value:0
    }
    
  }
  
  
  
  render(){
    const  { classes }  = this.props;
    
  
    const refresh = ()=> {
      this.props.logout();
      localStorage.clear()
      
      window.location = "/login"
    }
    

  

    return (
      <div>
      <CssBaseline />
      
      {/* <BottomNavigation
        value={this.state}
        onChange={(event, newValue) => {
          this.setState({value:newValue});
        }}
        showLabels
        className={classes.upNavigation}
      >
        <BottomNavigationAction className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faKey} size="2x" />} />
      </BottomNavigation> */}
     
       <main >
          <Container disableGutters={true} style={{margin:'0'}}>
            <Switch>
              {/* <Route exact path='/Projects' component={ProjectsSections} />  */}
              <Route exact path='/ls' component={LoginSignup} /> 
              <Route exact path='/login' component={Login} /> 
              <Route exact path='/signup' component={Signup} /> 
              <Route exact path='/home' component={HomeComponent}/>
              <Route exact path='/addForm' component={FormAdding}/>
              
              
            </Switch>
          </Container>
        </main>
      <BottomNavigation
        value={this.state}
        onChange={(event, newValue) => {
          this.setState({value:newValue});
        }}
        showLabels
        className={classes.bottomNavigation}
        >
         
        <BottomNavigationAction component={Link} to="/addForm" className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faFileAlt} size="2x" />} />
        <BottomNavigationAction component={Link} to="/home" className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faHome} size="2x" />} />
        <BottomNavigationAction className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faCommentDots} size="2x" />} />
      </BottomNavigation>
     

       
      
          </div>
      );
  }
    
}

const mapDispatchToProp = (dispatch)=> {
  return {
    logout:()=> dispatch(actions.logout),
  }
}

export default  compose (
  
  withStyles(useStyles),
  connect(null,mapDispatchToProp)
  )(Layout); 