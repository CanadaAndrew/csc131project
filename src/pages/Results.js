import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react';
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
    )
}

export default Results;