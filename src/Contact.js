import * as React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';

function Contact () {
//   const [tanukiti,setTanukiti]=React.useState(false);
    return (
        <div>
            <Header />
            <Button variant="contained" color="primary">
                Hello World
            </Button>
        </div>
    );
}

export default Contact;