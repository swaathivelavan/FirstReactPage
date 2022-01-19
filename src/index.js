
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import './index.css';



function Footer(){
    return (
     
        <footer className="footer"><small>© 2022 Velavan development. All rights reserved.</small></footer>

    )
}

function Body(){
    return (
        <div className="body">
<h2>Fun facts about React</h2>
    <ul>
        <li>Was first released in 2013</li>
        <li>Was orginally created by Jordan</li>
        <li>Has well over 100k stars on Github</li>
        <li>Composable</li>
        <li>Declarative</li>
        <li>Maintained by Facebook</li>
    </ul>
   
    </div>
    )
}

function Element(){
    return (


    <div>
   <Header/>
    <Body/>
   <Footer/>
    </div>

    )
}


ReactDOM.render(<Element/>,document.getElementById("main"))