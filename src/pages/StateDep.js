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
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#124a37" }, // this changes the textbox to green
    background: {
      default: "#d7d0b8", //changes whole page background to pale
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
        </Toolbar>
        </AppBar>
          <br />
          <br />
          <Box sx={{
            //secondary background color
            height: 700, 
            margin: 'auto', //centers the box and text
            width: 500,
            border: 2,
            borderColor: 'black',
            backgroundColor: 'white',
          }}>
            <center>{<img src={Picture}/>}</center>
            <Box sx={{backgroundColor: "#124a37",
            height: 65, 
            width: 350,
            margin: 'auto',
            display: 'flex',
          
          }}> <Grid  item
          container
         alignItems="center" justifyContent="center"> <h0 style={{ color: 'white' }}>{fullName} </h0></Grid></Box> 
         
         
            <br />
            <center><h0 style={{ color: "#124a37",fontWeight: 'bold' }}>DOB</h0> <br /> {DOB}
            <br />
            <h0 style={{ color: "#124a37",fontWeight: 'bold' }}>Passport #</h0> <br />{PassportNum} 
            <br />
            <h0 style={{ color: "#124a37",fontWeight: 'bold' }}>Passport Expires On </h0>  <br />{PassportExpiration} </center>
         
         </Box>
           
            <br />
           
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
        <pre><center>{comparisonTest()}</center></pre>
        </ThemeProvider>  
    )
}

export default StateDep;