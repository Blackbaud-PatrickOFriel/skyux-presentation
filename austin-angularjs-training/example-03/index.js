(function () {
    'use strict';
    
    function SimpleTestController() {
        var vm = this;
        
        vm.isBlue = true;
    }
    
    angular.module('presentation', [])
        .component('bbSimple', {
            template: '<div class="bb-simple-background" ng-class="\'bb-simple-background-blue\': $ctrl.bbSimpleIsBlue"><ng-transclude></ng-transclude></div>',
            controller: angular.noop,
            bindings: {
                bbSimpleIsBlue: '<?'
            },
            transclude: true
        })
        .controller('SimpleTestController', SimpleTestController);
}());