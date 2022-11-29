import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Person} from './../Backend/Person'
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
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
   
  }
});

var SSNNum;
var thisPerson;
const styles = {
    "&:hover":{
        background: "green",
        border: "1px solid black",
        color: "White"
    },
    width: 150,
  fontSize: 20,
  color: "white"
}

//const tester = true; // primitive true false boolean to control icons 
function warningMessage(){
  var x = "Warning the following databases have missing information: "
  if(sessionStorage.getItem("errorSS")){
    x += "Social Security, ";
  }
  if(sessionStorage.getItem("errorDMV")){
    x += "DMV, ";
  }
  if(sessionStorage.getItem("errorSD")){
    x += "State Department,";
  }
  return x;
}
function Results() {
  const [testingVar, updatingTestingVar] = useState();
  const [testingVar2, updatingTestingVar2] = useState("Loading...");
  SSNNum = sessionStorage.getItem("SSN");
  thisPerson = new Person(SSNNum);
  sessionStorage.setItem("start", "false");
  

  setTimeout(() => {
    if(sessionStorage.getItem("SSLoad") === "true" && sessionStorage.getItem("SDLoad") === "true" && sessionStorage.getItem("DMVLoad") === "true"){
      if(sessionStorage.getItem("error") === "true"){
        updatingTestingVar2(warningMessage());
        updatingTestingVar(true);
      }
      updatingTestingVar(true);
      updatingTestingVar2("Done!");
      thisPerson.dataCheck();
    }
  }, 1000)
    return(
      <ThemeProvider theme={mainTheme} >
        
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
        <AppBar position="static" enableColorOnDark="true"  sx={{ bgcolor: "#124a37" }}>
        <Toolbar variant="dense">
        <h0>TravelX.</h0>
         <Grid container spacing={0} justifyContent = "right">
          <Grid item xs = {2}>
            <Button sx={styles} size="large" href="Dmv" disabled = {!testingVar}>
              Dmv
            </Button>
          </Grid>

          <Grid item xs = {2}>
            <Button sx={styles} size="large" href="StateDep" disabled = {!testingVar}>
              StateDep
            </Button>
          </Grid>

          <Grid item xs = {2}>
            <Button sx={styles} size="large" href="Ssn" disabled = {!testingVar}>
              SS
            </Button>
          </Grid>
         </Grid>
        </Toolbar>
        </AppBar>
          <br />
            <h1><center>{testingVar2}</center></h1>
            <br/>
            {testingVar2 === "Loading..." 
               ? <center><CircularProgress color='success'/></center> 
               : <center><CheckIcon color='success'/></center>} {/*loading Icon and check Icon loads based on testingVar2 so should be in sync*/}
        </div>

       <div><center>{}</center></div>

       </ThemeProvider>  
    )
}

export default Results;