import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"


export default class Slide extends React.Component {
    

    render(){
        return (
            <div className="parent" dangerouslySetInnerHTML={{ __html : this.props.slideData }}/>
            
        )
    }

}