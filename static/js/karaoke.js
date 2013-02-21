function KaraokeCtrl($scope) {
  $scope.songs = my_karaoke;
  $scope.headers =  ['Title', 'Artist', 'Disc Number','Track', 'Disc Title'];
  $scope.fieldmap = ['title', 'artist', 'discnum',    'track', 'disctitle'];

  $scope.clear_search = function() {
    $scope.search = '';
  };

  $scope.toggleSort = function(index) {
    if($scope.sortColumn === $scope.headers[index]){
        $scope.reverse = !$scope.reverse;
    }
    $scope.sortColumn = $scope.headers[index];
    };

    $scope.columnSort = { sortColumn: 'title', reverse: false, selectedIndex: 0};

}