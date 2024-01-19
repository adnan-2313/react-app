import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
let curDate =  new Date();
curDate=curDate.getHours();
let message = '';
const cssStyle = {};


    if(curDate>1 && curDate <12 ){
        message = "Good Morning";
        cssStyle.color = 'green';
    }
    else if(curDate >=12 && curDate <19 ) {
        message = "Good Afternoon";
        cssStyle.color = 'red';
    }
    else{
        message = "Good Evening";
        cssStyle.color = 'black';
    }
    
    
root.render(
    <>
    <div className = "container">
        <h1>
            Hello Sir,<span style={cssStyle}> {message}</span>
        </h1>
    </div>
    </>
)