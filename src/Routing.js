import * as React from 'react';
import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';

import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import Header from './Header';
import Footer from './Footer';
import Instruction from './Instruction';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const useStyle = makeStyles({
  root: {
      // textAlign: "center",
      maxWidth: "1200px",
      margin: "0 auto",
  },
});

const Routing = () => {
  const classes = useStyle();
    return (
      <div>
        <BrowserRouter>
          <Header />
          <div className={classes.root}>
            <Routes>
              <Route path="/" element={<Home />} />
                <Route exact path="/Home" element={<Home />} />
                <Route exact path="/Products" element={<Products />} />
                <Route exact path="/Instruction" element={<Instruction />} />
                <Route exact path="/Contact" element={<Contact />} />

                {/* Not Found */}
                <Route path="*" element={
                  <h1 style={{textAlign: 'center', marginTop: "10px"}}>
                    404 Not Found
                    <br />
                    お探しのページは見つかりませんでした。
                    <br />
                    <Button variant="contained" color="defalt" href="/">
                      ホームへ戻る
                    </Button>
                  </h1>} 
                  />
                  
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
};

export default Routing;