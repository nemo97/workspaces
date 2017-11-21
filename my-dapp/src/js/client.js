
import React from "react"
import ReactDOM from "react-dom"
import HomeLayout from './pages/HomeLayout'


const app = document.getElementById('app')

// if (typeof web3 !== 'undefined') {
//   web3 = new Web3(web3.currentProvider);
// } else {
  // set the provider you want from Web3.providers
  
// }
ReactDOM.render(
  <HomeLayout />
, app);
