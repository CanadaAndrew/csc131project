import React from 'react'; //placeHolder for StateDep page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getPassportNumber, getPassportExpiration, getSDPicture, getURL } from '../Backend/SDVendia'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import {useState} from 'react';

const mainTheme = createTheme({
    typography: {
      fontFamily: ["Segoe UI Symbol"].join(","),
      fontSize: 24,
    },
    palette: {
      primary: { main: "#ffffff" }, // this changes the textbox to white
  
      background: {
        default: "#c49e06", //changes whole page background to dark blue 
      },
    },
  });

const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    width: 150,
    fontSize: 20,
}
function comparisonTest() {
  const isTrue = true;
  var x;
  if (isTrue) {
    x = "This information is consistent with results from other databases."
  } else {
    x = "Error. This information is not consistent with results from other databases."
  }
  return x;
}
function StateDep(){
  const fullName = getFullName();
  const DOB = getDOB();
  const PassportNum = getPassportNumber();
  const PassportExpiration = getPassportExpiration();
  const Picture = getURL();
    return(
        <ThemeProvider theme={mainTheme} >
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>State Department Results</center></h1>
            <center>{<img src={Picture}/>}</center>
            <br />
            <Box sx={{
             //secondary background color
             borderRadius: '16px',
             height: 300,
             width: 500,
             margin: 'auto',
             backgroundColor: '#05540a', 
 
           }}>
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Passport number: {PassportNum} </center>
            <br />
            <center>Passport expires on: {PassportExpiration} </center>
            <br />
            <br />
            </Box>
            <br />

         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Mastpage">
                    Return to searchbar
               </Button>
            </Grid>
           
            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Dmv">
                   Dmv
               </Button>
            </Grid>
            
            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Ssn">
                   SS
               </Button>
            </Grid>

         </Grid>   
        </div>
        <div><center>{comparisonTest()}</center></div>
        </ThemeProvider>  
    )
}

export default StateDep;