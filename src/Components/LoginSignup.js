import React from 'react';
import axios from 'axios';
import { makeStyles,withStyles,styled } from '@material-ui/core/styles';
import {Paper,Button,Container,Grid,Typography,MenuItem} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { Link,useHistory } from 'react-router-dom';
import {baseURL} from '../constants'
import LOGO from '../img/begin/LOGO.png'



const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: '#F7D039',
  color: 'white',
  height: 60,
  padding: '0 60px',
  margin: 8,
  borderRadius:'30px 30px'
});


const useStyles = makeStyles((theme) => ({
  
  
  Header:{
      backgroundColor:'#3F3D56',
      // display:'inline-block',
      position:'fixed',
      width:'100%',
      height:'30vh',
      margin:'0',
      borderBottomRightRadius: '100%' , 
      borderBottomLeftRadius: '100%' , 
  },
  container:{
    marginTop:'10vh'
  },
 Logo:{
    display:'inline',
    position:'absolute',
    // width:'100px',
    // heigth:'100px'
    float:'left',
    // marginRight:'30px'
    
 },
 company:{
    // float:'right',
    display:'inline',
    marginLeft:'80px'
 },
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
            <h1 className={classes.company}> Flower <strong>Towers</strong> </h1>
          </div>
        </Grid>
      </Grid>
    </>
          
      
  )
}

const mapStateToProps = state  => {
  return {
    isAuthenticated:localStorage.getItem('token') !== null
  }
}
