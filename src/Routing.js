import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';

import Home from './Home';
import App from './App';
import Naruki from './Naruki';
import Header from './Header';
import Products from './Products';
import Contact from './Contact';


const Routing = () => {
    return (
      <div>
        <BrowserRouter>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Contact" element={<Contact />} />

                  {/* Not Found */}
            </Routes>
        </BrowserRouter>
      </div>
    );
};

export default Routing;