import React from 'react'; //placeHolder for Ssn page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/SSVendia'
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
  var isTrue;
  if (sessionStorage.getItem("allMatch") === "true"){
    isTrue = true;
  }else{
    isTrue = false;
  }
  var x = "";
  if (isTrue) {
    x = "This information is consistent with results from other databases."
  }else {
    x += "Warning:\n"
    if(sessionStorage.getItem("DMV_SS_Name_Match") === "false" && sessionStorage.getItem("DMV_SS_DOB_Match") === "false"){
      x += "The name and date of birth does not match with the DMV database.\n"
    }else if(sessionStorage.getItem("DMV_SS_Name_Match") === "false"){
      x += "The name does not match with the DMV database.\n";
    }else if(sessionStorage.getItem("DMV_SS_DOB_Match") === "false"){
      x += "The date of birth does not match with the DMV database.\n";
    }

    if(sessionStorage.getItem("SS_SD_Name_Match") === "false" && sessionStorage.getItem("SS_SD_DOB_Match") === "false"){
      x += "The name and date of birth does not match with the State Department database.\n"
    }else if(sessionStorage.getItem("SS_SD_Name_Match") === "false"){
      x += "The name does not match with the State Department database.\n";
    }else if(sessionStorage.getItem("SS_SD_DOB_Match") === "false"){
      x += "The date of birth does not match with the State Department database.\n";
    }
  }
  return x;
}

function Ssn(){
    const fullName = getFullName();
    const DOB = getDOB();
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
               <Button sx={styles} size="large" href="StateDep">
                   StateDep
               </Button>
            </Grid>
         </Grid>
        </Toolbar>
        </AppBar>
        <br />
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
        </div>
        <pre><center>{comparisonTest()}</center></pre>
        </ThemeProvider>  
    )
}

export default Ssn;