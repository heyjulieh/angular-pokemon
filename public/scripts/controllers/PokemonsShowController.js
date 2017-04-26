console.log('This is working!')

angular
  .module('pokedex')
  .controller('PokemonsShowController', PokemonsShowController);

PokemonsShowController.$inject = ['$http', '$routeParams', '$location'];

function PokemonsShowController ($http, $routeParams, $location) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.pokemon = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
