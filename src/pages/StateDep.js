import React from 'react'; //placeHolder for StateDep page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getPassportNumber, getPassportExpiration, getPicture } from '../Backend/SDVendia'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import {useState} from 'react';
import { wait } from '@testing-library/user-event/dist/utils';

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

const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    width: 150,
    fontSize: 20,
}

function StateDep(){
  const SSNNum = sessionStorage.getItem('SSN');
  const [fullName, setFullName] = useState('Loading...');
  const [DOB, setDOB] = useState('Loading...');
  const [PassportNum, setPassportNum] = useState('Loading...');
  const [PassportExpiration, setPassportExpiration] = useState('Loading...');
  const [Picture, setPicture] = useState();
  getFullName(SSNNum).then((dataName) => {setFullName(dataName)});
  getDOB(SSNNum).then((dataDOB) => {setDOB(dataDOB)});
  getPassportNumber(SSNNum).then((passportNumber) => {setPassportNum(passportNumber)});
  getPassportExpiration(SSNNum).then((passportExpiration) => {setPassportExpiration(passportExpiration)});
  getPicture(SSNNum).then((Picture) => {setPicture(Picture)});
  while(getPicture === null){
    wait(1000);
  }
    return(
        <ThemeProvider theme={mainTheme} >
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>State Department Results</center></h1>
            <center>{<img src={Picture}/>}</center>
            <br />
            <Box sx={{
             //secondary background color
             borderRadius: '16px',
             height: 300,
             width: 500,
             margin: 'auto',
             backgroundColor: '#05540a', 
 
           }}>
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Passport number: {PassportNum} </center>
            <br />
            <center>Passport expires on: {PassportExpiration} </center>
            <br />
            <br />
            </Box>
            <br />

         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Mastpage">
                    Return to searchbar
               </Button>
            </Grid>
           
            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Dmv">
                   Dmv
               </Button>
            </Grid>
            
            <Grid item xs = {2}>
               <Button sx={styles} size="large" variant="outlined" href="Ssn">
                   SSN
               </Button>
            </Grid>

         </Grid>   
        </div>
        </ThemeProvider>  
    )
}

export default StateDep;