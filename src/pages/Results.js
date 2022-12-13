import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {useState, useEffect} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Person} from './../Backend/Person'
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logo.png';
import Switch from '@mui/material/Switch';

const lightTheme = createTheme({
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

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#212121" }, // this changes the textbox to dark black
    background: {
      default: "#282a3a", //changes whole page background to a lighter black
    },

  },
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
  color:  "#ffd966",
}

//const tester = true; // primitive true false boolean to control icons 
function warningMessage(){
  var x = "Warning, the following databases have missing information: "
  if(sessionStorage.getItem("errorSS") === "true"){
    x += "Social Security, ";
  }
  if(sessionStorage.getItem("errorDMV") === "true"){
    x += "DMV, ";
  }
  if(sessionStorage.getItem("errorSD") === "true"){
    x += "State Department,";
  }
  x = x.substring(0, x.length - 1) + ".";
  return x;
}
function Results() {
  const [mode, setMode] = useState(sessionStorage.getItem("light"));
  useEffect(() => {
    sessionStorage.setItem("light", mode);
  },[mode]);
  const selectedTheme = mode === "light" ?  lightTheme : darkTheme;
  const [testingVar, updatingTestingVar] = useState();
  const [testingVar2, updatingTestingVar2] = useState("Loading...");
  SSNNum = sessionStorage.getItem("SSN");
  thisPerson = new Person(SSNNum);

  setTimeout(() => {
    if(sessionStorage.getItem("SSLoad") === "true" && sessionStorage.getItem("SDLoad") === "true" && sessionStorage.getItem("DMVLoad") === "true"){
      if(sessionStorage.getItem("error") === "true"){
        updatingTestingVar2(warningMessage());
        updatingTestingVar(true);
        thisPerson.dataCheck();
        sessionStorage.setItem("allMatch", "false");
      }else{
        updatingTestingVar(true);
        updatingTestingVar2("Done!");
        thisPerson.dataCheck();
      }
    }
  }, 1000)
    return(
      <ThemeProvider theme={selectedTheme}>
        
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
        <AppBar position="static" enableColorOnDark="true" >
        <Toolbar variant="dense">
        <h0><img style={{ width:200, height: 60 }} src={logo} alt="TravelX logo" /></h0>
         <Grid container spacing={0} justifyContent = "right">

          <Grid item xs = {1}>
          <Switch checked = {mode === "light" ? false : true} onChange={() => setMode(mode === "light" ?  "dark" : "light")} color={'success'} />
          </Grid>
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

        <AppBar position="static" style={{ background: 'linear-gradient(45deg, #de880d, 65%, #124a37 )'}} sx={{ height: '5px' }} ></AppBar>
          <br />
            <h1><center>{testingVar2}</center></h1>
            <br/>
            {testingVar2 === "Loading..." 
               ? <center><CircularProgress color='success'/></center> 
               : testingVar2 === "Done!"
               ? <center><CheckIcon color='success'/></center>
               : <center><CloseIcon color='success'/></center>} {/*loading Icon and check Icon loads based on testingVar2 so should be in sync*/}
        </div>

       <div><center>{}</center></div>
      
       </ThemeProvider>  
    )
}

export default Results;