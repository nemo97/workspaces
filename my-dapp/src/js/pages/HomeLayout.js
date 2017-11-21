import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Web3 from "web3"

let ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

const peopleContractABI  = [ { constant: true,
                          inputs: [],
                          name: 'getPersonList',
                          outputs: [ [Object], [Object], [Object] ],
                          payable: false,
                          stateMutability: 'view',
                          type: 'function' },
                        { constant: true,
                          inputs: [ [Object] ],
                          name: 'personList',
                          outputs: [ [Object], [Object], [Object] ],
                          payable: false,
                          stateMutability: 'view',
                          type: 'function' },
                        { constant: false,
                          inputs: [ [Object], [Object], [Object] ],
                          name: 'addPerson',
                          outputs: [ [Object] ],
                          payable: false,
                          stateMutability: 'nonpayable',
                          type: 'function' },
                        { inputs: [],
                          payable: false,
                          stateMutability: 'nonpayable',
                          type: 'constructor' } ]

const PeopleContract = ethClient.eth.contract(peopleContractABI);
const peopleContractInstance = PeopleContract.at("0xd234bf3fbb6622e810e5cca0b048cf29e9187a1b");

export default class HomeLayout extends React.Component {
  constructor(props){
    super(props);    
    this.state = {

    }
  }
  
  componentWillMount(){
    console.log("from here")
    console.log(ethClient);
    window.ethClient = ethClient;
    window.peopleContractABI = peopleContractABI;
    window.PeopleContract = PeopleContract;
    window.peopleContractInstance = peopleContractInstance;
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
