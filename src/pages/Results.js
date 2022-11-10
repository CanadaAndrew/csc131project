import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName, getPerson} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import {Person} from './../Backend/Person'
import { wait } from '@testing-library/user-event/dist/utils';
import {getPicture} from './../Backend/DMVVendia'

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
const styles = {
    "&:hover":{
        background: "green",
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

function Results() {
  const [testingVar, updatingTestingVar] = useState();
  const [testingVar2, updatingTestingVar2] = useState();
  var ready = false;
  /*function updateText(textUpdate){
    setResult(textUpdate);
  }*/

  SSNNum = sessionStorage.getItem('SSN');
  /*
  getFullName(SSNNum).then((dataName) => {updateText(dataName)});
  */
  getPicture(SSNNum).then((URL) =>{updatingTestingVar(URL)});
  while(getPicture === null){
    wait(1000)
  }
  console.log(SSNNum);
  //var aPerson = Person(SSNNum);
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
                  SSN
                </Button>
               </Grid>

            </Grid>
       </div>
       <div><center>{comparisonTest()}</center></div>

       </ThemeProvider>  
    )
}

export default Results;