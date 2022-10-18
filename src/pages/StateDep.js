import React from 'react'; //placeHolder for StateDep page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getInfo} from '../Backend/SSVendia'
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

function StateDep(){
    const fullName = "a"//getFullName(SSN);
    const DOB = "ab" //getDOB(SSN);
    const ssn = 24459102//SSN;
    return(
        <div>
            <h1><center>State Department Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Passport number: </center>
            <br />
            <center>Passport expires on: </center>
            <br />
            <br />

         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {1}>
               <Button sx={styles} href="Mastpage">
                   Return Mastpage
               </Button>
            </Grid>
           
            <Grid item xs = {1}>
               <Button sx={styles} href="Dmv">
                   to Dmv
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

export default StateDep;