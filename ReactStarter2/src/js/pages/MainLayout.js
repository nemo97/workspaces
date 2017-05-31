import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

require("../../style/app.scss");

export default class MainLayout extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return (
            <div>
               <Header/>
                <div className="test">
                    {this.props.children}
                </div>    
               <Footer/> 
            </div>
        )
    }

}