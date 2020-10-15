import React from 'react'
import axios from 'axios';
import {useHistory} from 'react-router-dom';

import * as c from '../../constants';
import * as actionTypes from './actionTypes';


export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const auhtSuccess = token => {
  return{
    type:actionTypes.AUTH_SUCCESS,
    token:token
  }
}

export const auhtFail = error => {
  return {
    type:actionTypes.AUTH_FAIL,
    error:error
  }
}

export const logout = () =>{
 
  return {
    type:actionTypes.AUTH_LOGOUT
  };
} 

export const checkAuthTimeout = expirationTime =>{
  return dispatch=> {
    setTimeout(()=> {
      dispatch(logout());
    },expirationTime * 1000)
  }
} 

export const authLogin = (username,password) => {
  return dispatch => {
    dispatch(authStart());
    console.log(username)
    axios.post(c.loginURL,{
      username:username,
      password:password
    })
    .then(res => {
      if (res.status ===200){
        
        
        const token = res.data.key;
        const expirationDate = new Date(new Date().getTime()+ 3600 * 1000);
        localStorage.setItem('token',token);
        localStorage.setItem('expirationDate',expirationDate);
        dispatch(auhtSuccess(token));
        dispatch(checkAuthTimeout(3600));
        console.log('Done')
        const history = useHistory()

          // history.push("/home")
          window.location = "/home"
      
        
    }else if(res.status===400) {
      alert("Check Your Informations")
    }else {
      console.log('Server Fault')
    }
      
    })
    .catch(err =>{
      dispatch(auhtFail(err))
    })
  }
}
export const authSignup = (username,email,password1,password2,phoneNumber) => {
  return dispatch => {
    dispatch(authStart());
    console.log(username)
    axios.post(c.signupURL,{
      username: username,
      email: email,
      password1: password1,
      password2: password2,
      phoneNumber:phoneNumber 
    })
    .then(res => {
      if (res.status ===201){
          window.location = "/login"
      
        
    }else if(res.status===400) {
      alert("Check Your Informations")
    }else {
      console.log('Server Fault')
    }
      
    })
    .catch(err =>{
      dispatch(auhtFail(err))
    })
  }
}

export const authCheckState = () =>{
  return dispatch =>{
    const token = localStorage.getItem('token');
    if (token ===undefined){
      dispatch(logout());
    }else {
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if( expirationDate<=new Date() ){
        dispatch(logout());
      }else{
        dispatch(auhtSuccess(token));
        dispatch( checkAuthTimeout( (expirationDate.getTime = new Date().getTime()) /1000) ) 
      }
    }
  }
}

