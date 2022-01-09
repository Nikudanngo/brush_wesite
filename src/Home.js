import * as React from 'react';
import Header from './Header';
import Button from '@mui/material/Button';
import { Link, NavLink } from 'react-router-dom';

function Home () {
//   const [tanukiti,setTanukiti]=React.useState(false);
    return (
        <NavLink to="/Products">
        <Button variant="contained" color="primary">
            Invoices
        </Button>
        </NavLink>
    );
}

//         <div>
//             {
//                 tanukiti?
//                 <Header/>
//                 :
//             <Button onClick={()=>{
//                 setTanukiti(true);
//             }
//         }
//         color="success"
//         variant="contained"
//             >
//                 ヘッダー表示
//             </Button>
            
//         }
//         {
//             tanukiti===true&&
//         <Button onClick={()=>{
//             setTanukiti(false);
//         }}
//         variant="contained"
//         >
//             ヘッダー非表示
//             </Button>
// }
//         </div>
//     )
// }

export default Home;