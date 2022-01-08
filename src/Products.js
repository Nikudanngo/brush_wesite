import './App.css';
import Header from './Header';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
        <Link to="/">Invoices</Link>
        <Link to="/home">Expenses</Link>
    </div>
  );
}