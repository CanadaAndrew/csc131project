import React from 'react'; //placeHolder for StateDep page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getPassportNumber, getPassportExpiration, getURL } from '../Backend/SDVendia'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

const mainTheme = createTheme({
    typography: {
      fontFamily: ["Segoe UI Symbol"].join(","),
      fontSize: 24,
    },
    palette: {
      primary: { main: "#ffffff" }, // this changes the textbox to white
  
      background: {
        default: "#d7d0b8", //changes whole page background to pale 
      },
    },
  });

const styles = {
    "&:hover":{
        background: "Green",
        //border: "1px solid black",
        color: "White"
    },
    width: 150,
    fontSize: 20,
}

function comparisonTest() {
  if (sessionStorage.getItem("allMatch") === "true"){
    var isTrue = true;
  }else{
    var isTrue = false;
  }
  var x = "";
  if (isTrue) {
    x = "This information is consistent with results from other databases."
  }else {
    x += "Warning:\n"
    if(sessionStorage.getItem("DMV_SD_Name_Match") === "false" && sessionStorage.getItem("DMV_SD_DOB_Match") === "false"){
      x += "The name and date of birth does not match with the DMV database.\n"
    }else if(sessionStorage.getItem("DMV_SD_Name_Match") === "false"){
      x += "The name does not match with the DMV database.\n";
    }
    else if(sessionStorage.getItem("DMV_SD_DOB_Match") === "false"){
      x += "The date of birth does not match with the DMV database.\n";
    }
    if(sessionStorage.getItem("SS_SD_Name_Match") === "false" && sessionStorage.getItem("SS_SD_DOB_Match") === "false"){
      x += "The name and date of birth does not match with the Social Secuirty database."
    }else if(sessionStorage.getItem("SS_SD_Name_Match") === "false"){
      x += "The name does not match with Social Security database.\n";
    }else if(sessionStorage.getItem("SS_SD_DOB_Match") === "false"){
      x += "The date of birth does not match with Social Security database.\n";
    }
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
        <AppBar position="static" enableColorOnDark="true"  sx={{ bgcolor: "#124a37" }}>
        <Toolbar variant="dense">
        <h0>TravelX.</h0>
        <Grid container spacing={0} justifyContent = "right">
            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="Mastpage">
                    Return
               </Button>
            </Grid>
           
            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="Dmv">
                   Dmv
               </Button>
            </Grid>
            
            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="Ssn">
                   SSN
               </Button>
            </Grid>
         </Grid> 
        </Toolbar>
        </AppBar>
          <br />
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
        </div>
        <pre><center>{comparisonTest()}</center></pre>
        </ThemeProvider>  
    )
}

export default StateDep;