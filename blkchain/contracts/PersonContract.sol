pragma solidity ^0.4.15;

contract PersonContract {

    struct Person {
        bytes32 firstName;
        bytes32 lastName;    
        uint age;        
    }

    Person[] public personList;


    function PersonContract() public {
        Person memory newPerson;

        newPerson.firstName = "";
        newPerson.lastName = "";
        newPerson.age = 0;

        personList.push(newPerson);

    }

    
    function addPerson(bytes32 _firstName,bytes32 _lastName,uint _age) public returns (bool _success) {
        
        Person memory newPerson;

        newPerson.firstName = _firstName;
        newPerson.lastName = _lastName;
        newPerson.age = _age;

        personList.push(newPerson);

        return true;
    }

    function getPersonListALL() public constant returns (bytes32[],bytes32[],uint[]) {

        uint length = personList.length;
        bytes32[] memory rFirstName = new bytes32[](length);
        bytes32[] memory rLastName = new bytes32[](length);
        uint[] memory rAge = new uint[](length);

        for (uint i = 0;i < length;i++) {
              Person memory currentPerson;
              currentPerson = personList[i];

              rFirstName[i] = currentPerson.firstName; 
              rLastName[i] = currentPerson.lastName; 
              rAge[i] = currentPerson.age; 

        }

        return (rFirstName,rLastName,rAge);

    }

    

} 