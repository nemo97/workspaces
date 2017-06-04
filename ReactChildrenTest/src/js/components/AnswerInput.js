import React from "react";
import { IndexLink, Link } from "react-router";

export default class AnswerInput extends React.Component {
    
    render(){
        return (
            <div>{JSON.stringify(this.props.answer)} </div>
        )
    }

}