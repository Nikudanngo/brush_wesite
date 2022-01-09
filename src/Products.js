import './App.css';

import * as React from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  return (
    <div>
        <Link to="/">Invoices</Link>
        <Link to="/Home">home</Link>
    </div>
  );
}