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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {Person} from './Backend/Person'
import Switch from '@mui/material/Switch';
import logo from './logo.png';



var SSNNum = 0;
//the main bg color and font
const lightTheme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#124a37" }, // this changes the textbox to green
    background: {
      default: "#d7d0b8", //changes whole page background to pale
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#212121" }, // this changes the textbox to green
    background: {
      default: "#282a3a", //changes whole page background to pale
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
  const [mode, setMode] = useState("light");
  const selectedTheme = mode === "light" ?  lightTheme : darkTheme;
  return (
    <ThemeProvider theme={selectedTheme}>
      {/* ThemeProvider enables mainTheme*/}
      
      <div>
        <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <Typography align="center" color="common.black">
         
          {/*Typography formats text*/}


        <AppBar position="static" enableColorOnDark="true">
        <Toolbar variant="dense">
        <h0><img style={{ width:200, height: 60 }} src={logo} alt="TravelX logo" /></h0>
        </Toolbar>
        </AppBar>

        <AppBar position="static" style={{ background: 'linear-gradient(45deg, #de880d, 65%, #124a37 )'}} sx={{ height: '5px' }} ></AppBar>
          <br />
          <br />
          <Box sx={{
            //secondary background color
            height: 650, 
            margin: 'auto', //centers the box and text
            width: 500,
            border: 2,
            borderColor: 'black',
            backgroundColor: 'white',
          }}>

            <br />
            <h0> SSN Search</h0>
            <br /> <br />

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
              



            />
            <br />

              {/*aligns the buttons to be on the same row*/}
            <Grid container spacing={0} justifyContent="center" >

              <Grid item xs={4}>{/*TODO: figure out how to change width in buttonStyle*/}
                <Button href="Ssn" onClick = {() => {sessionStorage.setItem("SSN", SSNNum)}} sx={buttonStyle} variant="outlined" disabled={btnDisabled} size="large">SS</Button> {/*button size warped, fix later*/}
              </Grid>

              <Grid item xs={0}>
                <Button href="Dmv" onClick = {() => {sessionStorage.setItem("SSN", SSNNum)}} size="large" sx={buttonStyle} disabled={btnDisabled} variant="outlined">DMV</Button>
              </Grid>

              <Grid item xs={4}>
                <Button href="StateDep" onClick = {() => {sessionStorage.setItem("SSN", SSNNum)}} size="large" sx={buttonStyle} disabled={btnDisabled} variant="outlined">State</Button>
              </Grid>
              

              <Grid item xs ={4}>
                <Button
                   onClick = {() => {sessionStorage.setItem("SSN", SSNNum); sessionStorage.setItem("SSLoad", "false"); sessionStorage.setItem("SDLoad", "false"); sessionStorage.setItem("DMVLoad", "false"); sessionStorage.setItem("start", "true");}}
                   href="Results" size="large" sx={buttonStyle} disabled={btnDisabled} variant="contained">
                    Search
                </Button>
              </Grid>

            </Grid>
            <br />
              <Switch onChange={() => setMode(mode === "light" ?  "dark" : "light")} />
            <h6>Note: Alphabetical and Special Characters are not allowed. Ex. A-Z !@#$%</h6>

            
          </Box>


        </Typography>
      </div>
    </ThemeProvider>



  );
};

export default Mastpage;