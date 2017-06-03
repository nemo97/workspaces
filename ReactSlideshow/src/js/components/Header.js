import React from "react";
import { IndexLink, Link } from "react-router";

export default class Header extends React.Component {

    render(){
        return (
            <div class="menu-parent"> 
                <div class="menu">
                    <a onClick={this.props.onClickPrevious}>Previous</a>    
                </div>
                <div class="menu">
                    <a onClick={this.props.onClickNext} > Next </a>    
                </div>
            </div>    
        )
    }

}