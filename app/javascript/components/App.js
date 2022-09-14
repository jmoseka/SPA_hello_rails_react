import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Greeting.js";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Greeting />} />
            </Routes>
      </BrowserRouter>
    );
}

export default App;