import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"


export default class MainLayout extends React.Component {
    constructor(){
        super();
        this.state = {};
    }
    render(){
        return (
            <div>
               <Header/>
                <div>
                    {this.props.children}
                </div>    
               <Footer/> 
            </div>
        )
    }

}