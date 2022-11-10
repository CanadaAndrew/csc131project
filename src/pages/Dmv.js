import React from 'react'; //placeHolder for Dmv page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getLicenseNumber, getDMVPicture, getURL} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import { typography } from '@mui/system';

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
    //color: "black",
    //border: "1px solid white"
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

function Dmv() {
    const fullName = getFullName();
    const DOB = getDOB();
    const DL = getLicenseNumber();
    const Picture = getURL();
    return(
        <ThemeProvider theme={mainTheme} >
        <div>
        <CssBaseline /> {/*CssBaseline enables changing background color*/}

       

            <h1><center>DMV Results</center></h1>
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
              <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Driver's license number: {DL}</center>
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
               <Button sx={styles} size="large" variant="outlined" href="StateDep">
                   StateDep
               </Button>
            </Grid>
            
            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Ssn">
                   SSN
               </Button>
            </Grid>

         </Grid>
        
        </div>
         <div><center>{comparisonTest()}</center></div>
        </ThemeProvider>  
    )
   
}


export default Dmv;