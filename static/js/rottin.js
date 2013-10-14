function MessageCtrl($scope) {
    var minChar = 'a'.charCodeAt();
    var maxChar = 'z'.charCodeAt();
    // $scope.phrase = "";
    $scope.decoder = 1;

    $scope.$watch('decoder', function() {
      $scope.rotateMessage();
    });

    $scope.rotateMessage = function(){
        $scope.unlockedPhrase = "";

        for (var textchar in $scope.phrase) {
            var charCode = $scope.phrase.toLowerCase().charCodeAt(textchar);
            if (charCode > maxChar || charCode < minChar){
                $scope.unlockedPhrase += $scope.phrase.charAt(textchar);
                continue;
            }
            var newCode = charCode + $scope.decoder;
            if(newCode < minChar) {
                newCode = (maxChar + 1) - (minChar - newCode);
            }
            if(newCode > maxChar) {
                newCode = (minChar - 1) + (newCode - maxChar);
            }
            $scope.unlockedPhrase += String.fromCharCode(newCode);
        }
    };
}
