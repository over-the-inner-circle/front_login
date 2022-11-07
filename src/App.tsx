import React, { useReducer } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from './Intro';
import Login from './Login';
import SignUp from './SignUp';
import Main from "./Main";

const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/login/:provider" element={ <Login /> }/>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
