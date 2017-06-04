import React from "react";
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {
    
    render(){
        return (
            <div>
                <header>Apps! </header>               
                
                <ul class="nav nav-pills">
                    <li ><IndexLink to="/" >Profile</IndexLink></li>                    
                    <li ><Link to="settings" >Settings</Link></li>
                    <li ><Link to="test" >Start Test</Link></li>
                </ul>
            </div>    
        )
    }

}