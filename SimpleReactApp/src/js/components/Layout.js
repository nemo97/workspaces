import React from "react"
import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      name : "" 
    }
  }

  handleClick(){
    this.setState( (pState) => {
        let pName = pState.name;
        if(pName == "Subhas"){
          pName = "Teste"
        }else{
          pName = "Subhas"
        }        
        Object.assign(pState,{name : pName})
      }
    );
  }

  componentWillMount() {
      setInterval(()=>{        
          this.setState( (pState) => {
            let pName = pState.name;
            if(pName == "Subhas"){
              pName = "Teste"
            }else{
              pName = "Subhas"
            }        
            Object.assign(pState,{name : pName})
          }
        );
      }
      ,2000);
  }

  render() {

    return (<div>        
        <Header userName={this.state.name} />
          
          Test layout 1 {this.state.name}

        <div>
          <button onClick={this.handleClick.bind(this)} class="btn-primary">Update</button>
        </div>  
        <Footer />
      </div>)
  }
}
