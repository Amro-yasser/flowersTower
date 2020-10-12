import React from 'react';
import { makeStyles,withStyles,styled } from '@material-ui/core/styles';
import {Paper,Button,Container,Grid} from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import homescreen from '../img/ext/homescreen.jpg'
import img1 from '../img/int/img1.jpg'
import img2 from '../img/int/img2.jpg'
import img3 from '../img/int/img3.jpg'
import img4 from '../img/int/img4.jpg'
import img5 from '../img/int/img5.jpg'
import img6 from '../img/int/img6.jpg'
import img7 from '../img/int/img7.jpg'
import img8 from '../img/int/img8.jpg'
import img9 from '../img/int/img9.jpg'
import img10 from '../img/int/img10.jpg'
import ext1 from '../img/ext/ext1.jpg'
import ext2 from '../img/ext/ext2.jpg'
import ext3 from '../img/ext/ext3.jpg'
import ext4 from '../img/ext/ext4.jpg'
import ext5 from '../img/ext/ext5.jpg'
import ext6 from '../img/ext/ext6.jpg'
import ext7 from '../img/ext/ext7.jpg'
import ext8 from '../img/ext/ext8.jpg'
import ext9 from '../img/ext/ext9.jpg'
import ext10 from '../img/ext/ext10.jpg'
import ext11 from '../img/ext/ext11.jpg'
import ext12 from '../img/ext/ext12.jpg'
import ext13 from '../img/ext/ext13.jpg'
import ext14 from '../img/ext/ext14.jpg'
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const MyButton = styled(({ color, ...other }) => <Button {...other} />)({
  background: (props) =>
    props.color === 'red'
      ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
      : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: (props) =>
    props.color === 'red'
      ? '0 3px 5px 2px rgba(255, 105, 135, .3)'
      : '0 3px 5px 2px rgba(33, 203, 243, .3)',
  color: 'white',
  height: 60,
  padding: '0 60px',
  margin: 8,
});


const useStyles = makeStyles((theme) => ({
  root:{
    marginBottom:'50px'
  },
  overlay:{
    background: 'linear-gradient(to right, #207dff 0%, #a16ae8 100%)',
    // opacity:'0.3'
  },
  image:{
    width: '100%',
    backgroundSize:'cover',
    backgroundPosition:'center',
    
    position: 'absolute',
    padding:'0px',
    margin:'0px',
    opacity:'0.9',
    // backgroundImage: "url(images/bg_1.jpg)",
    
  },
  
  headerDiv:{
    // color:'#ffffff',
    // margin:'0px 0px 48px',
    backgroundImage:`url(${homescreen})`,
    position: 'absolute',
    backgroundSize:'cover',
    backgroundPosition:'center',
    // position:'relative',
    width:'100%',
    height:'50%',
    Zindex:-1
  },
  headers:{
    color:'#ffffff',
    fontSize: '54px',
    lineHeight: '1.2',
    fontWeight: '400',
    display:'block',
  },
  Carousel:{
    marginTop:'200px',
    
  },
  Description:{
    color:'#ffffff',
    fontSize: '54px',
    fontWeight: '400',
  },
  Cards:{
  
    color:'#ffffff',
    backgroundColor:'#F6D863',
    width:'120px',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
    
  },
  imgInt:{
    zIndex:-1,
    borderRadius:'10px 10px',
    width:'400px',
    height:'150px',
    boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',


  },
  icons:{
    fontSize:'50px',
    borderRadius:'50%',
    color:"#fff",
    background:'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
    marginRight:'10px '

  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  reviews: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));




export default function Example(props){
  const classes = useStyles();
  const state = {
    isAuthenticated:localStorage.getItem('token')!== null
  }
  const appartements = [
    {
      area:'F2',
      surface:''
    },
    {
      area:'F3',
      surface:''
    },
    {
      area:'F4',
      surface:''
    },
  ]
  const pictures = [
    {
      src:img1
    },
    {
      src:img2
    },
    {
      src:img3
    },
    {
      src:img4
    },
    {
      src:img5
    },
    {
      src:img6
    },
    {
      src:img7
    },
    {
      src:img8
    },
    {
      src:img9
    },
    {
      src:img10
    },
  ]

  const pictures2 = [
    {
      src:ext1
    },
    {
      src:ext2
    },
    {
      src:ext3
    },
    {
      src:ext4
    },
    {
      src:ext5
    },
    {
      src:ext6
    },
    {
      src:ext7
    },
    {
      src:ext8
    },
    {
      src:ext9
    },
    {
      src:ext10
    },
    {
      src:ext11
    },
    {
      src:ext12
    },
    {
      src:ext13
    },
    {
      src:ext14
    },
  ]
  
 
    return (
      <>
      <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12} align="center" className={classes.headerDiv} > 
            
              <h1 className={classes.Description}>Hello world</h1>
            
          <Grid item xs={12} align="center" className={classes.Carousel}>
          
            
              <OwlCarousel
                className="owl-theme"
                loop ={false}
                freeDrag={true}
                margin={40}
                nav
                  >
                { appartements.map((app)=>(
                  <div class="item">
                  <Card className={classes.Cards} variant="outlined">
                    <CardContent>
                      
                      <Typography component="h5">
                        Appartement: {app.area}
                      </Typography>
                      
                      <Typography variant="body2" component="p">
                        Surface: {app.surface}
                      </Typography>
                    </CardContent>
                  </Card>
                  </div>
                ))}
                
                
              </OwlCarousel>
              
          </Grid>
          <Grid item xs={12}>
            <Typography style={{margin:'10px 0'}} align="left" component="h4"><strong>Intérieur </strong>d'appartements</Typography>
              <OwlCarousel
                  className="owl-theme"
                  loop 
                  freeDrag={true}
                  margin={10}
                  slideBy={10}
                  autoplayHoverPause={true}
                  mergeFit={false}
                  dots={false}
                  
                  autoWidth={true}
                 
                    >
                  { pictures.map((pic)=>(
                    <div style={{width:'200px'}} class="item">
                      <img className={classes.imgInt} src={pic.src}/> 
                    </div>
                  ))}
                  
                  
              </OwlCarousel>

          </Grid>

          <Grid item xs={12}>
            <Typography style={{margin:'10px 0'}} align="left" component="h4"><strong>Extérieur </strong>d'appartements</Typography>
              <OwlCarousel
                  className="owl-theme"
                  loop 
                  freeDrag={true}
                  margin={10}
                  slideBy={10}
                  autoplayHoverPause={true}
                  mergeFit={false}
                  dots={false}
                  
                  autoWidth={true}
                 
                    >
                  { pictures2.map((pic)=>(
                    <div style={{width:'200px'}} class="item">
                      <img className={classes.imgInt} src={pic.src}/> 
                    </div>
                  ))}
                  
                  
              </OwlCarousel>

          </Grid>
          <Grid item xs={12}>
          <Typography style={{margin:'10px 0'}} align="left" component="h4"><strong>Extérieur </strong>d'appartements</Typography>
          <List className={classes.root}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Brunch this weekend?"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Ali Connors
                    </Typography>
                    {" — I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Summer BBQ"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      to Scott, Alex, Jennifer
                    </Typography>
                    {" — Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary="Oui Oui"
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      Sandra Adams
                    </Typography>
                    {' — Do you have Paris recommendations? Have you ever…'}
                  </React.Fragment>
                }
              />
            </ListItem>
          </List>
          </Grid>
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