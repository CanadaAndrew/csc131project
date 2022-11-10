import React from 'react'; //placeHolder for Ssn page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';

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
  if (sessionStorage.getItem("Match") === "true"){
    var isTrue = true;
  }else{
    var isTrue = false;
  }
  var x;
  if (isTrue) {
    x = "This information is consistent with results from other databases."
  } else {
    x = "Alert. This information is not consistent with results from other databases."
  }
  return x;
}

function Ssn(){
    const SSNNum = sessionStorage.getItem('SSN');
    const fullName = getFullName();
    const DOB = getDOB();
    return(
        <ThemeProvider theme={mainTheme} >
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>Social Security Results</center></h1>
            <Box sx={{
             
             //secondary background color
             borderRadius: '16px',
             height: 300,
             width: 500,
             margin: 'auto',
             backgroundColor: '#05540a', 
 
           }}>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
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
               <Button sx={styles} size="large" variant="outlined" href="StateDep">
                   StateDep
               </Button>
            </Grid>

         </Grid>
        </div>
        <div><center>{comparisonTest()}</center></div>
        </ThemeProvider>  
    )
}

export default Ssn;