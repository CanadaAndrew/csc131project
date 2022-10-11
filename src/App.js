import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"; // Router to link webpages
import Results from "./pages/Results"; 
import Mastpage from "./Mastpage";
 
const App = () => {
    return(
        <div>
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
//iugiu
export default App;
