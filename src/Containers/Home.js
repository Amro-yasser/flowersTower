import React from 'react';
import LOGO from '../img/begin/LOGO.png'
import Login from '../Login';
import Signup from '../Signup';
import { connect }from 'react-redux';
import { compose } from 'redux';
import * as actions from '../store/actions/auth'
import { Link,BrowserRouter,Route,Switch ,Redirect,withRouter,HashRouter,useHistory} from 'react-router-dom'
import clsx from 'clsx';
import { Chip,ListItem,Badge,ListItemIcon,ListItemText,ListSubheader, Button,IconButton,List,Divider } from '@material-ui/core';
import { makeStyles,withStyles,useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import MailIcon from '@material-ui/icons/Mail';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
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
import {faSearch,faPlus,faHome,faSignOutAlt,faUserAlt,faCommentDots,faKey,faFileAlt,faBell } from '@fortawesome/free-solid-svg-icons'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useSnackbar } from 'notistack';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 0,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))(Badge);

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
  appBar:{
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor:'#fff',
    color:"black",
    borderRadius:"0 0 15px 15px",
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
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
  chip:{
    color:'#fff',
    padding:'20px 50px',
    align:'center',
    backgroundColor:'red',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
    
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

    
    
    this.notifications = []
      
        
    this.state = {
      open:false,
      value:0,
      notif:false
    }
    
  }
  
  
  
  render(){
    const  { classes }  = this.props;
    const theme = this.props;
    

    const refresh = ()=> {
      this.props.logout();
      localStorage.clear()
      
      window.location = "/login"
    }

  const handleDrawerOpen = () => {
    console.log("opened")
    this.setState({open:true})
  };

  const handleDrawerClose = () => {
    this.setState({open:false})
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({notif:false});
  };
  
  
  
    
    var  exampleSocket = new WebSocket("ws://127.0.0.1:8000/notifications/");
    exampleSocket.onopen =  (event) => {
      console.log('socket listening')
      this.setState({notif:true});
      
    };
    exampleSocket.onmessage = (event) => {
      const data = JSON.parse(event.data)
      if(data.event="New Form"){
        console.log(data.username+" "+"ajoute une requete")
        const msg = data.username+" "+"ajoute une demande"
        this.setState({notif:true});
      }
        
        
      
    }
  

    return (
      <div>
      <CssBaseline />

      <Snackbar open={this.state.notif} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical:'top', horizontal:'center' }}>
        <Alert onClose={handleClose} severity="success">
          Une demande a ete ajoute
        </Alert>
      </Snackbar>
      
      <ElevationScroll {...this.props}> 
        <AppBar position="fixed" color="primary"className={clsx(classes.appBar, {
          [classes.appBarShift]: this.open})}>
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="open drawer">
              <img src={LOGO} alt="logo" width="50px" height="50px" />
              <h3>FLOWERS TOWERS</h3>
            </IconButton>
            {/* The drawer open icon */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerOpen}
              className={clsx(this.open && classes.hide)}
            >
              <StyledBadge badgeContent={4} color="secondary">
                <FontAwesomeIcon icon={faBell} />
              </StyledBadge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      
     
     <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={this.state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {this.notifications.map((id, name) => (
            <ListItem align="center" key={id}>
              <Chip className={classes.chip} label={name+'a ajouter une demande'} component="a" href="#chip" clickable />
            </ListItem>
          ))}
        </List>
      </Drawer>

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
        value={this.state.value}
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
  
  withStyles(useStyles,useTheme),
  connect(null,mapDispatchToProp)
  )(Layout); 