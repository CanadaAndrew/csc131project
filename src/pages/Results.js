import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName as getSSFullName, getDOB as getSSDOB} from '../Backend/SSVendia'
import {getFullName as getSDFullName, getDOB as getSDDOB} from '../Backend/SDVendia'
import {getFullName as getDMVFullName, getDOB as getDMVDOB} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import {Person} from './../Backend/Person'
import { FiberPinRounded } from '@mui/icons-material';
import { wait } from '@testing-library/user-event/dist/utils';
import {getPicture} from './../Backend/DMVVendia'
import { CircularProgress } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

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
}

const tester = true; // primitive true false boolean to control icons 

function Results() {
  const [testingVar, updatingTestingVar] = useState();
  const [testingVar2, updatingTestingVar2] = useState("Loading...");
  SSNNum = sessionStorage.getItem("SSN");
  thisPerson = new Person(SSNNum);
  var btnDisabled = testingVar;

  setTimeout(() => {if(sessionStorage.getItem("SSLoad") === "true" && sessionStorage.getItem("SDLoad") === "true" && sessionStorage.getItem("DMVLoad") === "true"){
    updatingTestingVar(true);
    updatingTestingVar2("Done!");
    if(getDMVFullName() === getSDFullName() && getDMVFullName() === getSSFullName() && getDMVDOB() === getSDDOB() && getDMVDOB() === getSSDOB()){
      sessionStorage.setItem("Match", "true");
      console.log("Set match to true");
    }else{
      sessionStorage.setItem("Match", "false");
      console.log("Set match to false");
    }
  }else{
    updatingTestingVar(false);
  }
  }, 1000)
    return(
      <ThemeProvider theme={mainTheme} >
        
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>User Results</center></h1>
            <center>{<img src={testingVar}/>}</center>
            <br/>
            <Grid container spacing={0} justifyContent = "center">

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

              <Grid item xs = {2}>
                <Button sx={styles} size="large" variant="outlined" href="Ssn">
                  SS
                </Button>
               </Grid>

            </Grid>
       </div>
       <div><center>{}</center></div>

       </ThemeProvider>  
    )
}

export default Results;