var Web3 = require("web3");

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"))
web3.eth.defaultAccount = web3.eth.accounts[1];
console.log("default account "+web3.eth.defaultAccount);
console.log(web3.version)
var pAddress = '0xdaece194da0bf189bba4829f43836c1b0634c955';
var pABI = [
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
                }
            ];

var pc = web3.eth.contract(pABI);
var pi = pc.at(pAddress);
console.log("pi");
console.log(pi);
var addOne = pi.addPerson("test","test2",32);
console.log(addOne);
var addTwo = pi.addPerson("test3","test4",50);
console.log(addTwo);

var result = pi.getPersonListALL();
console.log(result);

