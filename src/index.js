import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import Contact from './Contact';
import Faculty10Exp from './Faculty10Exp';
import FacultyDesign from './Facultydesign';
import Layout from './Layout';
import Facultyname from './Facultyname';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route> 
          <Route path="./Facultyname" element={<Facultyname />}></Route>
          <Route path="./Contact" element={<Contact />}></Route>
          <Route path="./Faculty10Exp" element={<Faculty10Exp />}></Route>
          <Route path="./Facultydesign" element={<FacultyDesign />}></Route>
          </Route>

        </Routes>

      </BrowserRouter>
);

// If you want to start measuring p
