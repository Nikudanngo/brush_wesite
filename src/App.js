import logo from './logo.svg';
import './App.css';
import Header from './Header';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Header />
        <Link to="/">Invoices</Link> 
        <Link to="/App">Expenses</Link>
    </div>
  );
}
