import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class HomeLayout extends React.Component {
  constructor(props){
    super(props);    
    this.state = {

    }
  }

  // Add todo handler
  addTodo(val){
    // Assemble data
    const todo = {text: val}
    // Update data
    axios.post(this.apiUrl, todo)
      .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
      });
  }

  render() {   
   return <div class="container">
            <Header/>
            <div class="main-content">
                Yet to implement
            </div>
            <Footer/>
          </div>
  }
}
