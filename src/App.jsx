import React  from 'react';
import './index.css';
import { useState } from 'react';

const App = () => {
    var d = new Date();
    var n = d.getTime();
    var d = new Date();
    var ch = d.getHours();
    var cm = d.getMinutes();
    var cs = d.getSeconds();
    var st = "";
    if(ch<12){ st = "AM"; }else{ st = "PM"; }
    var temp= ch + ":" + cm + ":" + cs + " " + st;    

    const[time,uptime] = useState(temp);

    const update =() =>{
        var d = new Date();
        var n = d.getTime();
        var d = new Date();
        var ch = d.getHours();
        var cm = d.getMinutes();
        var cs = d.getSeconds();
        var st = "";
        if(ch<12){ st = "AM"; }else{ st = "PM"; }
        var temp= ch + ":" + cm + ":" + cs + " " + st;

        console.log(temp);
        uptime(temp);
    }

    return(
        <>
            <h1>{time}</h1>
            <button onClick ={update}> GET TIME</button>
        </>
    );
};

export default App;