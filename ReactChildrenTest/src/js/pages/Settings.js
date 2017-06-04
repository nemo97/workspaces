import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"


export default class Settings extends React.Component {
    constructor(){
        super();
        this.state ={
            counter : 0
        }        
    }
    update(){
        localStorage.setItem("setting:app",JSON.stringify(this.state));
    }
    fromLocalStore(){
        let item = JSON.parse(localStorage.getItem("setting:app")) || {};
        this.setState(Object.assign({},this.state,item));
    }
    increase () {
        this.setState( (p) => (
             { counter : p.counter +1 }
          )
        );
    }
    reset () {
        this.setState( (p) => {
            return {counter : 0}
          }
        );
    }
    render(){
        return (
            <div>
              Settigs! Counter {this.state.counter}
              <div>
                <button onClick={this.increase.bind(this)} className="btn btn-primary">Increase</button>
              </div>
              <div>
                <button onClick={this.update.bind(this)} className="btn btn-primary">Store</button>
              </div>
              <div>
                <button onClick={this.reset.bind(this)} className="btn btn-primary">Reset</button>
              </div>
              <div>
                <button onClick={this.fromLocalStore.bind(this)} className="btn btn-primary">From LocalStore</button>
              </div>  
            </div>
        )
    }

}