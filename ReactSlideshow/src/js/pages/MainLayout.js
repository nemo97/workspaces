import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Slide from "./Slide";
require("../../style/app.scss");

export default class MainLayout extends React.Component             {
    
    componentDidMount() {
        document.addEventListener('keydown', this.keypressHandler.bind(this));
    }

    componentWillUnMount() {
        document.removeEventListener('keydown', this.keypressHandler.bind(this));
    }

    

    render(){
        return (
            <div onKeyUp={this.keypressHandler.bind(this)}>
               <Header onClickNext={this.nextClickHandler.bind(this)} onClickPrevious={this.previousClickHandler.bind(this)} />
               <Slide slideData={this.state.slideData}/>    
               <Footer/> 
            </div>
        )
    }

    
    loadPage(pageNumber){
        if(pageNumber < 0){
            this.pageNumber = this.pages.length;
        }else
        if(pageNumber > this.pages.length){
            this.pageNumber =0;
        }else{
            this.pageNumber = pageNumber;
        }
        
        this.pages.forEach(item => {

            if(item.p===this.pageNumber){
                const data = item.data;
                this.setState({
                    slideData : data
                });
                return;
            }

            // this.setState({
            //     slideData : 'Opps! Something wrong '
            // });
        });
    }
    
    keypressHandler(event) {
//        console.log("..."+event.which);
        let pageNumber = 0;
        switch (event.which) {
            case 39:
                /// right key
            pageNumber = this.pageNumber+1;
            this.loadPage(pageNumber);
                break;
            case 37:
                /// left key
            pageNumber = this.pageNumber-1;
            this.loadPage(pageNumber);
                break;    
        
            default :
                break;
        }        
    }

    nextClickHandler(event) {
  //      console.log("Click child next");
        let pageNumber = this.pageNumber+1;
        this.loadPage(pageNumber);
    }

    previousClickHandler(event) {
    //    console.log("Click child previous");
        let pageNumber = this.pageNumber-1;
        this.loadPage(pageNumber);
    }

    constructor(){
        super();
        this.state = {            
            slideData : ''
        };
        this.pageNumber =0;
        this.pages = 
        [
            {
                p:1,
                data:"<div class='item'>Index Page Title</div> \
                      <div class='item'>Main content</div> \
                "
            },
            {
                p:2,
                data:"Second  Page"
            },
            {
                p:3,
                data:"Last Page"
            }
        ];
        
    }
}