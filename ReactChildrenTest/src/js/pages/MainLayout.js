import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"

require("../../style/app.scss");

export default class MainLayout extends React.Component             {
    
    render(){
        return (
            <div>
               <Header/>
                <div className="main_content">
                    {this.props.children}
                </div>    
               <Footer/> 
            </div>
        )
    }

}