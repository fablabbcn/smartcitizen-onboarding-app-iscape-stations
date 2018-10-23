export function landingController($scope, scopePayload, AnimationService, $rootScope, $stateParams, $state) {
    $rootScope.lang = $stateParams.lang;
    $scope.$parent.payload = scopePayload;
    AnimationService.animate(scopePayload.template);
    $scope.$parent.segueControl = 'ready';
    var buttonTargets = [];

    targets(scopePayload);

    function targets(payload){
    }

    $scope.skipInstructions = function(){
        $state.go('wizard.choose_connection', {lang: $stateParams.lang});
    }

    $scope.languageChangeSegue = function(val){
        $state.go('wizard.making_sense', {lang: buttonTargets[val]});
    }
}

landingController.$inject = ['$scope', 'scopePayload', 'AnimationService', '$rootScope', '$stateParams', '$state'];
