import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName} from '../Backend/SSVendia'
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

var SSNNum;
const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    background:"LimeGreen", 
    color:"Black",
    width: 72,
    height: 76,
    fontSize: 12,
    borderRadius: 5,
    boxShadow: 3,
    elevation: 3,
}
/*function ResultText(){
  const [result, setResult] = useState('');

  function updateText(textUpdate){
    setResult(textUpdate);
    alert(result);
  }

  return(
    <center>{result}</center>
  )
} Later use
*/

function Results() {
  const [result, setResult] = useState('');
  function updateText(textUpdate){
    setResult(textUpdate);
  }
  SSNNum = sessionStorage.getItem('SSN');
  getFullName(SSNNum).then((dataName) => {updateText(dataName)});
    return(
      <ThemeProvider theme={mainTheme} >
        
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>PlaceHolder for results page with temporary button</center></h1>
            <center>{result}</center>
            <br/>
            <Grid container spacing={0} justifyContent = "center">

              <Grid item xs = {1}>
                <Button sx={styles} href="Mastpage">
                 Return to Mastpage
                </Button>
              </Grid>

              <Grid item xs = {1}>
                <Button sx={styles} href="Dmv">
                  to Dmv
                </Button>
              </Grid>

              <Grid item xs = {1}>
                <Button sx={styles} href="StateDep">
                  to StateDep
                </Button>
              </Grid>

              <Grid item xs = {1}>
                <Button sx={styles} href="Ssn">
                  to Ssn
                </Button>
               </Grid>

            </Grid>
       </div>
       </ThemeProvider>  
    )
}

export default Results;