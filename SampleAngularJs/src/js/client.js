// Define the `phonecatApp` module
var phonecatApp = angular.module('phonecatApp', ['ui.grid','ui.grid.selection']);

// Define the `PhoneListController` controller on the `phonecatApp` module
phonecatApp.controller('PhoneListController', function PhoneListController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];

  $scope.clickMe = function (){
    //console.log("clicked me")

    
  }

  $scope.gridOptions = {
    showGridFooter: true,
    showColumnFooter: false,
    enableFiltering: true,
    enableRowSelection: true,    
    columnDefs: [
        { field: 'name' },
        { field: 'snippet' }       
    ],
    data: $scope.phones,
    onRegisterApi: function(gridApi) {
          $scope.gridApi = gridApi;
          
          gridApi.selection.on.rowSelectionChanged($scope,function(row){
            var msg = 'row selected ' + row.isSelected;
            console.log(msg);
          });
    }
};


$scope.gridOptions.multiSelect = false;

});