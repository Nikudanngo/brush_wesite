import './App.css';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Buying from './Buy';

export default function Products() {
  return (
    <div>
        <Link to="/">Invoices</Link>
        <Link to="/Home">home</Link>
        <Buying />
    </div>
  );
}