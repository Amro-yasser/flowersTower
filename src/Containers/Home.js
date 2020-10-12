import React from 'react';

import Login from '../Login';
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
import Container from '@material-ui/core/Container';

import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faPlus,faHome,faSignOutAlt,faUserAlt,faCommentDots,faKey } from '@fortawesome/free-solid-svg-icons'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';



function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const drawerWidth = 240;

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
    bottom:0
    
    
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
    
    marginBottom:'250px'
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
      <div className={classes.root}>
      <CssBaseline />
      <HashRouter>
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
     
       <main className={classes.content}>
          <Container  >
            <Switch>
              {/* <Route exact path='/Projects' component={ProjectsSections} />  */}
              <Route exact path='/login' component={Login} /> 
              <Route exact paht='/home' component={HomeComponent}/>
              
              
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
        <BottomNavigationAction className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faKey} size="2x" />} />
        <BottomNavigationAction className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faHome} size="2x" />} />
        <BottomNavigationAction className={classes.toolbarIcon} icon={<FontAwesomeIcon icon={faCommentDots} size="2x" />} />
      </BottomNavigation>
     

       
      </HashRouter>
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