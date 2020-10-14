import React,{ useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCalendarDay,faMapMarker,faAddressCard,faEnvelope,faMobile,faSignature,faFileUpload } from '@fortawesome/free-solid-svg-icons'
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles ,styled} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import LOGO from './img/begin/LOGO.png'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';

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
}));

function Login(props) {
  const classes = useStyles();
  const [data,setData] = useState({})

  const handleSubmit=(e)=>{
    e.preventDefault();
    const {name,value}= e.target;
      
    const obj = {
      "username":e.target.username.value,
      "password":e.target.password.value
    }
    setData(obj)
    props.onAuth(e.target.username.value,e.target.password.value)
    // props.history.push("/")
    
  }

  return (
    <Grid container xs={12}>
        <Grid item xs={12} align='center' className={classes.Header}>
          <div className={classes.container}>
            <img className={classes.Logo} src={LOGO} alt="brand logo"/>
            <h1 className={classes.company}> <span> FLOWER</span> <strong className={classes.tower}>TOWERS</strong> </h1>
          </div>
        </Grid>

        <Grid item xs={12} align="center" className={classes.buttons}>
          <FormControl className={classes.margin}>
            <InputLabel htmlFor="input-with-icon-adornment">Nom Complet</InputLabel>
            <Input
            id="input-with-icon-adornment"
            name="fullname"
            variant='outlined'
            startAdornment={
                <InputAdornment position="start">
                    <FontAwesomeIcon icon={faSignature} />
                </InputAdornment>
            }
            />
          </FormControl>
          
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <MyButton >
              Se connecter
            </MyButton>
          </Link>
          
          <DividerWithText align='center'>Ou bien</DividerWithText>
          
        </Grid>
        
    </Grid>
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
    onAuth:(username,password)=> dispatch(actions.authLogin(username,password))
  }
}
export default connect(mapStateToProps,mapDispatchToProp)(Login) 