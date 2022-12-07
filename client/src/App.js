import React from "react";
import { Container } from "@material-ui/core";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Swich, Route} from 'react-router-dom';

const App = () => {
  
    return (
        <Container maxwidth="lg">
            <Navbar/>
            <Home/>
        </Container>
    );
}

export default App;