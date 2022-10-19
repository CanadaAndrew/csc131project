import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import {SSN} from '../Mastpage';
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

function Results() {
  alert(SSN);
    var placeHolder = getFullName(SSN);
    if(typeof placeHolder === 'object' && typeof placeHolder.then === 'function'){
      placeHolder = setTimeout(getFullName(SSN), 5000);
    }
    var fullName = placeHolder;
    const DOB = "ab" //getDOB(SSN);
    const ssn = 24459102//SSN;
    return(
        <div>
            <h1><center>PlaceHolder for results page with temporary button</center></h1>
            <center>{fullName}</center>
            <br/>
            <center>{DOB}</center>
            <br/>
            <center>{ssn}</center>
            <br/>
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