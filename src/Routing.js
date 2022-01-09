import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';

import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Header from './Header';
const Routing = () => {
    return (
      <div>
        <BrowserRouter>
          <Header />
            <Routes>
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Products" element={<Products />} />
                <Route exact path="/Contact" element={<Contact />} />
                  {/* Not Found */}
            </Routes>
        </BrowserRouter>
      </div>
    );
};

export default Routing;