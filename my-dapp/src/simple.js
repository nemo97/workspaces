var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))

var abi = [ { constant: true,
    inputs: [ [Object] ],
    name: 'personList',
    outputs: [ [Object], [Object], [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { constant: false,
    inputs: [ [Object], [Object], [Object] ],
    name: 'addPerson',
    outputs: [ [Object], [Object], [Object] ],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'function' },
  { constant: true,
    inputs: [ [Object], [Object], [Object] ],
    name: 'getPersonListALL',
    outputs: [ [Object], [Object], [Object] ],
    payable: false,
    stateMutability: 'view',
    type: 'function' },
  { inputs: [],
    payable: false,
    stateMutability: 'nonpayable',
    type: 'constructor' } ] ;

 var pc = web3.eth.contract(abi);
 var pi = pc.at('0xe61a5dbbcf37a048a5a08f0dafd87891edd5ce4f');
 
 web3.eth.defaultAccount = web3.eth.accounts[0]