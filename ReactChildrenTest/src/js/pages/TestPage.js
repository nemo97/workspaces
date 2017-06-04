import React from "react";
import Question from "../components/Question";

export default class TestPage extends React.Component {
    constructor(){
        super();
        this.state = {};
        this.question = {
            title : "",
            moreinfo : "more info",
            answer : { "test" : "comming soon" }
        }
    }
    render(){
        return (
            <div >
               <Question question={this.question} />                     
           </div>
        )
    }

}