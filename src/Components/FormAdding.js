import React from 'react';
import axios from 'axios';
import { makeStyles,withStyles,styled } from '@material-ui/core/styles';
import {Paper,Button,Container,Grid,Typography,MenuItem} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faCalendarDay,faMapMarker,faAddressCard,faEnvelope,faMobile,faSignature,faFileUpload } from '@fortawesome/free-solid-svg-icons'
import { Link,useHistory } from 'react-router-dom';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {baseURL} from '../constants'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: '#F7D039',
  color: 'white',
  height: 60,
  padding: '0 60px',
  margin: 8,
  borderRadius:'30px 30px'
});


const useStyles = makeStyles((theme) => ({
  root:{
    marginBottom:'50px',
    marginTop:'20px'
  },
  margin: {
    margin: theme.spacing(2),
  },
  Header:{
      
  },
  Title1:{
    marginTop:"20px",
    fontSize:'30px',
    fontWeight:'900',
    // boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
  },
  Title:{
      fontSize:'20px',
      fontWeight:'900'
  },
  Paper:{
      margin:'10px',
      padding:'20px',
      boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
  }
}));




export default function FormAdding(props){
  const classes = useStyles();
  const history = useHistory();
  const [item,setItem]= React.useState(
    {
        fullname:'',
        birthday:'',
        birthplace:'',
        adress:'',
        email:'',
        phoneNumber:'',
        identity:'',
        appartement:'',
        furniture:'',
        description:'',
        floor:'',
        state:'',
        bank_receipt:'',
      }
  )
  const [visible,setVisible]= React.useState(false)
  const state = {
    isAuthenticated:localStorage.getItem('token')!== null
  }
  const onChange = (e) => {
    const { name , value} = e.target
    if (value =="Meuble Personnalise"){
        setVisible(true)
    }else {
        setVisible(false)
    }
    setItem(prev=> ({...prev, [name]: value}))
    console.log(item)
     
  };
  const handleChange = (event) => {
      
      console.log("area")
  };

  const handleChange2 = (event) => {
      if (event.target.value =="Meuble Personnalise"){
          setVisible(true)
      }else {
          setVisible(false)
      }
    console.log("choice")
    
};

const onSubmit = (e) => {
      
    e.preventDefault();
    const data = item;
    const json = JSON.stringify(data);
    // const token = localStorage.getItem('token')
    var config = {
      headers: {
        // 'Authorization': "Token " + token,
        'Content-Type': 'application/json'
      }
      
    }
    
    console.log(json)
    if (window.confirm("Are You Sure ?")){
      axios.post(`${baseURL}/add-form/`,json,config)
      .then(res => {          
          history.push("/home")
        
        console.log(res.status);
      }) 
    }
  }
  const areas = [
      {
          value:'F3',
      },
      {
          value:'F4'
      },
      {
          value:'F5'
      }
  ]

  const choices = [
    {
        value:'Non Meuble',
    },
    {
        value:'Meuble Standard'
    },
    {
        value:'Meuble Personnalise'
    }
]
  
 
    return (
        <>
        <Grid container xs={12} >
            <Grid item align="center" xs={12} classesName={classes.Header}>
                <Typography className={classes.Title1} component='h3'>Formulaire D'achats</Typography>
            </Grid>
            <Grid item xs={12} align='center' className={classes.root}>
                <Paper className={classes.Paper}>
                    <form onSubmit={onSubmit}>
                    <Typography className={classes.Title} component='h3'>Information Personel</Typography>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Nom Complet</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        onChange={onChange}
                        name="fullname"
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faSignature} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Date de Naissance</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        name="birthday"
                        onChange={onChange}
                        type="date"
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faCalendarDay} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Lieu de Naissance</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        name="birthplace"
                        onChange={onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faMapMarker} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Adresse</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        name="adress"
                        onChange={onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faAddressCard} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Email</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        type="email"
                        name="email"
                        onChange={onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor="input-with-icon-adornment">Numero De Telephone</InputLabel>
                        <Input
                        id="input-with-icon-adornment"
                        name="phoneNumber"
                        onChange={onChange}
                        startAdornment={
                            <InputAdornment position="start">
                                <FontAwesomeIcon icon={faMobile} />
                            </InputAdornment>
                        }
                        />
                    </FormControl>
                    <FormControl className={classes.margin}>
                        <input
                            id="input-file"
                            type="file"
                            name="identity"
                            onChange={onChange}
                            style={{display:'none'}}
                        />
                        <label htmlFor="input-file">
                            <Button
                                variant="contained"
                                color="default"
                                className={classes.button}
                                component="span"
                                startIcon={<FontAwesomeIcon icon={faFileUpload} />}
                            >
                                Upload la piece d'identite
                            </Button>
                        </label>
                        
                    </FormControl>
                    <Typography className={classes.Title} component='h3'>Information d'immobilier</Typography>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="outlined-select-currency"
                            name="appartement"
                            onChange={onChange}
                            select
                            label="Appartement"
                            value={item.appartement}
                            helperText="Choisir Votre Surface "
                            startAdornment={
                                <InputAdornment position="start">
                                    <FontAwesomeIcon icon={faMobile} />
                                </InputAdornment>
                            }
                            >
                            {areas.map((ar) => (
                                <MenuItem key={ar.value} value={ar.value}>
                                {ar.value}
                                </MenuItem>
                            ))}
                        </TextField>

                    </FormControl>
                    <FormControl>
                        <TextField
                        id="outlined-number"
                        name="floor"
                        onChange={onChange}
                        label="Etage"
                        type="number"                   
                        />
                    </FormControl>
                        

                    <FormControl className={classes.margin}>
                        <TextField
                            id="outlined-select-currency"
                            name="furniture"
                            select
                            label="Meuble"
                            onChange={onChange}
                            value={item.furniture}
                            helperText="Choisir Votre choix"
                            
                            >
                            {choices.map((ch) => (
                                <MenuItem key={ch.value} value={ch.value}>
                                {ch.value}
                                </MenuItem>
                            ))}
                        </TextField>

                    </FormControl>
                    { visible ?
                    (
                        <FormControl className={classes.margin}>
                    
                        <TextField
                        id="standard-textarea"
                        name="description"
                        onChange={onChange}
                        label="Description Du meuble"
                        placeholder="Description Meuble Standard"
                        multiline
                      />

                    </FormControl>
                    )
                    :[]}
                    <MyButton type="submit">Envoyer</MyButton>
                    </form>
                </Paper>
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
