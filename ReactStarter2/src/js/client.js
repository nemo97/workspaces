import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import MainLayout from "./pages/MainLayout"
import Settings from "./pages/Settings"
import Welcome from "./pages/Welcome"

const app = document.getElementById('app')
ReactDOM.render(<Router history={hashHistory}> 
    <Route path="/" component={MainLayout}>
          <IndexRoute component={Welcome}></IndexRoute>      
          <Route path="settings" name="settings" component={Settings}></Route>
      {/*<Route path="archives(/:article)" name="archives" component={Archives}></Route>
      */}
    </Route>
  </Router>, app);
// const user = {
//   name : 'Subhas',
//   user_id : 'ssing'
// }

// function format(u){
//   return u.name + " : "+u.user_id;
// }
// function tick(){
//   const element = <div>Welcome { format(user) } Date : { new Date().toLocaleTimeString() } </div>  
//   ReactDOM.render(element, app);
// }

//setInterval(tick,4000)

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
/*class Fetch extends React.Component{
  constructor(props){
    super(props);    
    this.state = { list :[] };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(){

      // this.setState(pState => ({
      //   toggle : !pState.toggle
      // }));
      console.log("clieck in fectched") 
      this.setState(pSate => ({
        list : [2,3,4]
      })
      );

      console.log("clieck in fectched result "+this.state.list) 

  }
  
  handleAddItem(e){
      this.setState( st =>{
        let tempList = this.state.list;
        tempList.push(Math.random()*100);
        return Object.assign({},this.state,{list :tempList});
      });
  }
  render(){
      const list = this.state.list.map((num,index)=>{
        return <li key={index}>{num} item</li>
      }
      );
      return (<div>              
                <button  onClick={this.clickHandler}>Fetch</button>
                <button  onClick={this.handleAddItem.bind(this)}>Add Item</button>
                <div>
                  <ul>
                    {list}
                  </ul>  
                </div>  
            </div>
      );
  }

}
const element = (
                 <div>Welcome { format(user) } Date : { new Date().toLocaleTimeString() } 
                    <Fetch/> 
                 </div>
                );*/


