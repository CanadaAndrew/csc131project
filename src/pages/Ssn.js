import React from 'react'; //placeHolder for Ssn page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/SSVendia'
import {SSN} from '../Mastpage'
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

function Ssn(){
    getFullName(123456789);
    const fullName ='a';
    const DOB = 'b' //getDOB(SSN);
    const ssn = SSN;
    return(
        <div>
            <h1><center>Social Security Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
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
               <Button sx={styles} href="StateDep">
                   to StateDep
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

export default Ssn;