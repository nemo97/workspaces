pragma solidity ^0.4.15;

contract HelloWorld {
    int public balance;

    function HelloWorld(){
        balance=1000;
    }

    function getBalance() public constant returns(int _newbalance) {
		return balance;
	}

} 