import React from "react";
import { IndexLink, Link } from "react-router";
import AnswerInput from './AnswerInput';

export default class Question extends React.Component {
    
    render(){
        return (
            <div className="parent" >
                <div className="item">{this.props.question.title} </div>
                <div className="item">{this.props.question.moreinfo} </div>
                <div className="item">
                    <AnswerInput answer={this.props.question.answer}/>
                </div>    
            </div>    
        )
    }

}