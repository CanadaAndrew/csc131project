import React from 'react'; //placeHolder for Dmv page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';

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

function Dmv() {
    const fullName = "a"//getFullName(SSN);
    const DOB = "ab" //getDOB(SSN);
    return(
        <div>
            <h1><center>DMV Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Driver's license number: </center>
            <br />
            <br />

         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {1}>
               <Button sx={styles} href="Mastpage">
                   Return Mastpage
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
            
            <Grid item xs = {1}>
               <Button sx={styles} href="Results">
                   to Results
               </Button>
            </Grid>

         </Grid>
        </div>
    )
}

export default Dmv;