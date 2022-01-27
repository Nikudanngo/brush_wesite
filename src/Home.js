import * as React from 'react';
import Slider from './Slider';
import { makeStyles } from "@material-ui/core/styles";


const useStyle = makeStyles({
    home: {
        textAlign: "left",
    },
});

function Home () {
    const classes = useStyle();
    return (
        <div className={classes.home}>
            <Slider />
            <div>
                <h1>
                    
                </h1>
            </div>
        </div>
    );
}
export default Home;
