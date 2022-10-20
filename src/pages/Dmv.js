import React from 'react'; //placeHolder for Dmv page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getLicenseNumber} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react'
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
    const SSNNum = sessionStorage.getItem('SSN');
    const [fullName, setFullName] = useState('');
    const [DOB, setDOB] = useState('');
    const [DL, setDL] = useState('');
    getFullName(SSNNum).then((dataName) => {setFullName(dataName)});
    getDOB(SSNNum).then((dataDOB) => {setDOB(dataDOB)});
    getLicenseNumber(SSNNum).then((dataLN) => {setDL(dataLN)});
    return(
        <div>
            <h1><center>DMV Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Driver's license number: {DL}</center>
            <br />
            <br />

         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {1}>
               <Button sx={styles} href="Mastpage">
                    Return to searchbar
               </Button>
            </Grid>

            <Grid item xs = {1}>
               <Button sx={styles} href="StateDep">
                   to StateDep
               </Button>
            </Grid>
            
            <Grid item xs = {1}>
               <Button sx={styles} href="Ssn">
                   to SS
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