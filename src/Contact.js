import * as React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import ColumnsGrid from './ColumnsGrid';

function Contact () {
//   const [tanukiti,setTanukiti]=React.useState(false);
    return (
        <React.Fragment>
        <div className="main">
            <div className="text">
                <h1>
                    CONTACT
                    <span className="span">
                        お問い合わせ
                    </span>
                </h1>
            </div>
            <div>
                {/* <ColumnsGrid 
                title={["高品質な","竹歯ブラシ"]}
                document={
                    "十分な強度としなやかさをもった竹歯ブラシを作るには，ひとつの歯ブラシに3年以上の乾燥と徹底した研磨が必要です。私たちは、お客様が安心してご使用できるように、全ての歯ブラシを研磨・検品を行っています。"
                }
                //   image={<img src={inCup} className={classes.image}/>}
                column="column"
                row="row"
                /> */}
                <Box >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d410.0970412333015!2d135.71116542559886!3d34.68559416679214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6001239c90000001%3A0xc8b69fc668aa840f!2sRecherche!5e0!3m2!1sja!2sjp!4v1629123177581!5m2!1sja!2sjp" 
                        width="100%" 
                        height="450" 
                        style={{border:0}}
                        loading="lazy"
                        >
                    </iframe>
                </Box>
            </div>
        </div>
        </React.Fragment>
    );
}

export default Contact;