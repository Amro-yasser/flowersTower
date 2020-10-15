import React,{ useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt,faUnlockAlt,faEnvelope,faUserAlt, faUser } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Grid,GridList } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles ,withStyles,styled} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import LOGO from './img/begin/LOGO.png'
import g from './img/login/g.png'
import f from './img/login/f.png'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {codes} from './codes'

const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: '#F7D039',
  color: 'black',
  fontWeight:'bold',
  height: 60,
  width:250,
  padding: '0 60px',
  margin: 8,
  borderRadius:'30px 30px',
  boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);',

});

const MyButton2 = styled(({ color, ...other }) => <Button {...other} />)({
  background: '#fff',
  color: 'black',
  fontWeight:'bold',
  height: 60,
  width:400,
  padding: '0 60px',
  margin: 8,
  borderRadius:'30px 30px',
  boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);',

});

const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderRadius: `20px`,
        boxShadow:'0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);',

      },
    },
  },
})(TextField);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  Header:{
    backgroundColor:'#3F3D56',
    // display:'inline-block',
    position:'relative',
    clipPath: ' ellipse(62% 70% at 50% 20%);',
    // borderRadius:'350%/100%',
    width:'100%',
    height:'30vh',
    // borderTopRightRadius: '0' , 
    // borderTopLeftRadius: '0' , 
    // zIndex:'-1'
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
 marginTop:'30px',
 flexGrow:'1'
},
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  fields:{
    width:'350px',
    margin:'10px'
  },
}));

function Login(props) {
  const classes = useStyles();
  const [data,setData] = useState({})
  const [currency,setCurrency] = useState('+213')

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    const data= e.target;
    // console.log(name+" "+value)
    const obj = {
      "username":data.username.value,
      "email": data.email.value,
      "password1": data.password1.value,
      "password2": data.password2.value,
      "phoneNumber": data.phoneNumber.value,
    }
    setData(obj)
    console.log(obj)
    props.onAuth(data.username.value,data.email.value,data.password1.value,data.password2.value,data.phoneNumber.value)
    // props.history.push("/home")
    
  }

  return (
    <div style={{marginBottom:'10vh'}}>
    <Grid container xs={12}  >
        <Grid item xs={12} align='center' className={classes.Header}>
          <div className={classes.container}>
            <img className={classes.Logo} src={LOGO} alt="brand logo"/>
            <h1 className={classes.company}> <span> FLOWER</span> <strong className={classes.tower}>TOWERS</strong> </h1>
          </div>
        </Grid>
    
        <Grid item xs={12} align="center" className={classes.buttons}>
          <form onSubmit={handleSubmit} noValidate>
          <FormControl className={classes.margin}>
              <CustomTextField
                id="name"
                name="username"
                label="Username"
                placeholder="ex: martin123, george22...."
                variant="outlined"
                className={classes.fields}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUser} size='2x'/>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          <FormControl className={classes.margin}>
              <CustomTextField
                id="contact"
                name="email"
                label="Email"
                placeholder="example@gmail.com"
                variant="outlined"
                className={classes.fields}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faEnvelope} size='2x'/>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            <FormControl className={classes.margin}>
            
              <CustomTextField
                id="user"
                name="phoneNumber"
                label="Numero Telephone"
                placeholder="+213 77 78 79 800"
                variant="outlined"
                className={classes.fields}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      
                        <FontAwesomeIcon icon={faPhoneAlt} size='2x'/>
                            
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl className={classes.margin}>
              <CustomTextField
                id="user2"
                name="password1"
                type="password"
                label="Mot de Passe"
                placeholder="Entrer votre mot de passe"
                variant="outlined"
                className={classes.fields}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUnlockAlt} size='2x'/>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>

            <FormControl className={classes.margin}>
              <CustomTextField
                id="user2"
                name="password2"
                type="password"
                label="Confirmer"
                placeholder="Confirmer votre mot de passe"
                variant="outlined"
                className={classes.fields}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <FontAwesomeIcon icon={faUnlockAlt} size='2x'/>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
            
            <Link to='/login' style={{ textDecoration: 'none' }}>
              <MyButton type="submit" >
                Se connecter
              </MyButton>
            </Link>
          </form>
          
          <DividerWithText align='center'>Ou bien</DividerWithText>
          <MyButton2>
            <img src={g} style={{marginRight:'10px'}} alt="google auth"/>
              Se Connecter avec Google
          </MyButton2>

          <MyButton2>
            <img src={f} style={{marginRight:'10px'}} alt="google auth"/>
              Se Connecter avec Facebook
          </MyButton2>
        </Grid>
        
     </Grid>
    </div>
  );
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


const mapStateToProps = (state) => {
  return {
    loading:state.loading,
    error:state.error
  }
}
const mapDispatchToProp = (dispatch)=> {
  return {
    onAuth:(username,email,password1,password2,phoneNumber)=> dispatch(actions.authSignup(username,email,password1,password2,phoneNumber))
  }
}
export default connect(mapStateToProps,mapDispatchToProp)(Login) 