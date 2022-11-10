import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PatternFormat } from 'react-number-format';
import {Person} from './Backend/Person'
var SSNNum = 0;
//the main bg color and font
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

//changes properties of buttons
const buttonStyle =
{
  "&:hover": {
    background: "Green",
    border: "1px solid black",
    color: "White",
  },
  width: 150,
  fontSize: 20,
}

//###-##-#### format
function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <PatternFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
    // isNumericString
    />
  );
}

const Mastpage = () => {
  const [value, setValue] = useState("");
  var btnDisabled = useState(true)

  return (
    <ThemeProvider theme={mainTheme}>
      {/* ThemeProvider enables mainTheme*/}
      
      <div>
        <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <Typography align="center" color="common.white">
         
          {/*Typography formats text*/}
          <h1 id="h1"> SS# Background Check</h1>

          <Box sx={{
            //secondary background color
            height: 1000, //just a quick fix for now, TODO: find a way to set it to the height of the page
            backgroundColor: '#05540a', //placeholder, TODO: discuss nice colors w/ group
            margin: 'auto', //this pushes the width to the page size and centers the text

          }}>

            <br />

            <TextField
              inputProps={{ format: "###-##-####" }} //don't ask me why there are 2 versions
              InputProps={{ inputComponent: NumberFormatCustom }}
              onChange={(e) => {setValue(e.target.value); SSNNum = e.target.value}} //keeps track of textfield length

              //if length is invalid, show an error message
              helperText={
                value.length !== 9 && value.length !== 0
                  ? "SS# length is invalid"
                  : " "
              }

              //search buttons will enable when length is 9
              btnDisabled={
                value.length === 9
                  ? btnDisabled = false
                  : btnDisabled = true
              }

              error={value.length < 9 && value.length !== 0} //makes text red
              id="filled-basic"
              label="Social Security #"
              variant="outlined"
              sx={{ input: { color: "white" } }} //makes input text white



            />
            <br />

              {/*aligns the buttons to be on the same row*/}
            <Grid container spacing={0} justifyContent="center" >

              <Grid item xs={4}>{/*TODO: figure out how to change width in buttonStyle*/}
                <Button href="Ssn" onClick = {() => {sessionStorage.setItem("SSN", SSNNum); }} sx={buttonStyle} variant="outlined" disabled={btnDisabled} size="large">SS</Button> {/*button size warped, fix later*/}
              </Grid>

              <Grid item xs={0}>
                <Button href="Dmv" onClick = {() => {sessionStorage.setItem("SSN", SSNNum)}} size="large" sx={buttonStyle} disabled={btnDisabled} variant="outlined">DMV</Button>
              </Grid>

              <Grid item xs={4}>
                <Button href="StateDep" onClick = {() => {sessionStorage.setItem("SSN", SSNNum)}} size="large" sx={buttonStyle} disabled={btnDisabled} variant="outlined">State</Button>
              </Grid>

              <Grid item xs ={4}>
                <Button
                   onClick = {() => {sessionStorage.setItem("SSN", SSNNum); sessionStorage.setItem("SSLoad", "false"); sessionStorage.setItem("SDLoad", "false"); sessionStorage.setItem("DMVLoad", "false");}}
                   href="Results" size="large" sx={buttonStyle} disabled={btnDisabled} variant="outlined">
                    Search
                </Button>
              </Grid>

            </Grid>

            <h6>Note: Alphabetical and Special Characters are not allowed. Ex. A-Z !@#$%</h6>


          </Box>


        </Typography>
      </div>
    </ThemeProvider>



  );
};

export default Mastpage;