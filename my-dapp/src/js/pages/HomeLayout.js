import React from "react"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Web3 from "web3"
import _ from "lodash"

let ethClient = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const personContractAddress = "0xdaece194da0bf189bba4829f43836c1b0634c955";
const personContractABI  = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "personList",
    "outputs": [
      {
        "name": "firstName",
        "type": "bytes32"
      },
      {
        "name": "lastName",
        "type": "bytes32"
      },
      {
        "name": "age",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_firstName",
        "type": "bytes32"
      },
      {
        "name": "_lastName",
        "type": "bytes32"
      },
      {
        "name": "_age",
        "type": "uint256"
      }
    ],
    "name": "addPerson",
    "outputs": [
      {
        "name": "_success",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getPersonListALL",
    "outputs": [
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "bytes32[]"
      },
      {
        "name": "",
        "type": "uint256[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  }
] ;

let PersonContract = ethClient.eth.contract(personContractABI);
let personContractInstance = PersonContract.at(personContractAddress);

export default class HomeLayout extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
        firstName : [],
        lastName : [],
        age : []
    }
  }
  
  componentWillMount(){
    console.log("from here")
    console.log(ethClient);
    console.log(personContractInstance)    
    window.personContractInstance = personContractInstance;
    var data = personContractInstance.getPersonListALL();
    console.log(data)
    this.state =  {
      firstName : String(data[0]).split(","),
      lastName : String(data[1]).split(","),
      age : String(data[2]).split(",")
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
   
   let tableRows =  []  
   _.each(this.state.firstName,(value,index)=> {
      tableRows.push (
        <tr>
          <td>{ethClient.toAscii(this.state.firstName[index])}</td>
          <td>{ethClient.toAscii(this.state.lastName[index])}</td>
          <td>{this.state.age[index]}</td>
        </tr>  
      );
   }); 

   return <div class="container">
            <Header/>
            <div class="main-content">
                 <table>
                   <thead>
                     
                   </thead>
                    <tbody>
                      {tableRows}
                    </tbody>  
                </table> 
            </div>
            <Footer/>
          </div>
  }
}
