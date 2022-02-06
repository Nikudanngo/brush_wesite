import {Outlet, Link } from "react-router-dom";

const Naruki=()=>{
    return(
    <div>
    <Link to="/">Invoices</Link> 
    <Link to="/App">Expenses</Link>
    </div>
    );
}

export default Naruki;