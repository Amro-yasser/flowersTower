import React from 'react';
import axios from 'axios';
import { makeStyles,withStyles,styled } from '@material-ui/core/styles';
import {Paper,Button,Container,Grid,Typography,MenuItem} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link,useHistory } from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import {baseURL} from '../constants'
import LOGO from '../img/begin/LOGO.png'
import image from '../img/begin/image.png'



const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: '#F7D039',
  color: 'black',
  fontWeight:'bold',
  height: 60,
  width:250,
  padding: '0 60px',
  margin: 8,
  borderRadius:'30px 30px'
});


const useStyles = makeStyles((theme) => ({
  
  
  Header:{
      backgroundColor:'#3F3D56',
      // display:'inline-block',
      position:'relative',
      borderRadius:'350%/100%',
      width:'600px',
      height:'30vh',
      borderTopRightRadius: '0' , 
      borderTopLeftRadius: '0' , 
      // borderWidth:'0 50px 50px 50px'
      // margin:'0',
      // borderBottomRightRadius: '100%' , 
      // borderBottomLeftRadius: '100%' , 
  },
  container:{
    marginTop:'10vh'
  },
 Logo:{
    display:'inline',
    position:'absolute',
    float:'left',
    marginLeft:'0',
    top:'8vh'
    // height:'0px'
    
 },
 company:{
    display:'inline',
    marginLeft:'90px',
    fontSize:'32px',
    marginTop:'200px'
 },
 tower:{
   color:'#ffffff'
 },
 buttons:{
   marginTop:'30px'
 },
 span:{
   background:'#fff',
   margin:'0 15px'
 },
 divider:{
   display:'felx',
   alignItems:'center',
   justifyContent:'center',
   background:'#fff',
   margin:'0 15px',
   '::after':{
    height:'2px',
    background: 'black',
    flex:'1',
    content:`''`
    
    },
  },
  image:{
    marginTop:'20px',
    position:'relative',
    // width:'50%',
    height:'100%'
  },
  container2: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "1px solid black",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: "black"
  }
}));




export default function LoginSignup(props){
  const classes = useStyles();
  const history = useHistory();
 

  return (
    <>
      <Grid container xs={12}>
        <Grid item xs={12} align='center' className={classes.Header}>
          <div className={classes.container}>
            <img className={classes.Logo} src={LOGO} alt="brand logo"/>
            <h1 className={classes.company}> <span> FLOWER</span> <strong className={classes.tower}>TOWERS</strong> </h1>
          </div>
        </Grid>
        <Grid item xs={12} align="center" className={classes.buttons}>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <MyButton >
              Se connecter
            </MyButton>
          </Link>
          
          <DividerWithText align='center'>Ou bien</DividerWithText>
          <Link to='/signup' style={{ textDecoration: 'none' }}>
            <MyButton  >
              S'inscrire
            </MyButton>
          </Link>
        </Grid>
        <Grid item xs={12} align='center'>
          <img src={image} className={classes.image} alt="house"/>
        </Grid>
      </Grid>
    </>
          
      
  )
}
const DividerWithText = ({ children }) => {
  const classes = useStyles();
  return (
   <div className={classes.container2} >
     <div className={classes.border} />
     <span className={classes.content}>{children}</span>
     <div className={classes.border} />
   </div>
  );
 };

const mapStateToProps = state  => {
  return {
    isAuthenticated:localStorage.getItem('token') !== null
  }
}
