import React from "react";
import { ReactDOM } from "react";
import topNav from "./link";
import './style.css'



var App=function(){

    return(
    <div>
        {
            topNav.map((top)=>{
                return(<button key={top.link}>
                <a href={top.link}>{top.name}</a>
                </button>)
            })


        } 
       
    </div>
    
        )

    
    }


export default App