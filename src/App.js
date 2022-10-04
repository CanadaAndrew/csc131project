import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"; // Router to link webpages
import Results from "./pages/Results"; 
import Mastpage from "./Mastpage";
import { getName } from "./pages/VendiaTest";
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
const App = () => {
    return(
        <div>
            <Button onClick = {() =>{
                getName()
            }} endIcon={<ArrowForwardIcon/>}>
                Enter
            </Button>
         <Router>    {/*Router to link webpages*/}
            <Routes>
               <Route path = "/results" element={<Results/>} /> {/*pathway to results.js page*/}
               <Route path = "/app" element={<App/>} /> {/*pathway to app.js page*/}
               <Route path = "/mastpage" element={<Mastpage/>} /> {/*pathway to mastpage.js page*/}
            </Routes>
         </Router>
        </div>
    )
}

export default App;
