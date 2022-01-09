import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Contact () {
//   const [tanukiti,setTanukiti]=React.useState(false);
    return (
        <div>
            <Button variant="contained" color="primary">
                <Link to="/">Invoices</Link>
            </Button>
        </div>
    );
}

export default Contact;