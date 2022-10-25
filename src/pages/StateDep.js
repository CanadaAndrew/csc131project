import React from 'react'; //placeHolder for StateDep page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getInfo} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

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
        <ThemeProvider theme={mainTheme} >
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
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
                    Return to searchbar
               </Button>
            </Grid>
           
            <Grid item xs = {1}>
               <Button sx={styles} href="Dmv">
                   to Dmv
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
        </ThemeProvider>  
    )
}

export default StateDep;