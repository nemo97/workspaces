var PersonContract = artifacts.require("./PersonContract.sol");

contract('TestPersonContract',function(accounts) {

    it("should  be zero", function() {
        return PersonContract.deployed().then(function(instance) {
              console.log("instance.toString()")    
              //console.log(instance)  
              var personList = instance.getPersonList.call();
            //   personList.then(function(val){
            //       console.log(val);
            //   })

            return personList;
        }).then(function(val){
            console.log(val);
        });
      });

});