console.log('This is working!')
angular
  .module('pokedex')
  .controller('PokemonsIndexController', PokemonsIndexController);

PokemonsIndexController.$inject = ['$http'];

function PokemonsIndexController ($http) {
  var vm = this;
  vm.newPokemon = {};
  vm.newPokemon = {
    name: 'Butterfree',
    pokedex: 12,
    evolved_from: 'Metapod'
  };

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(function successCallback(response) {
    vm.pokemons = response.data.pokemons;
  }, function errorCallback(response) {
    console.log('There was an error getting the pokemons', response);
  });

  vm.createPokemon = function () {
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/pokemon',
      data: vm.newPokemon
    }).then(function successCallback(response) {
      vm.pokemons.push(response.data.pokemons);
    }, function errorCallback(response) {
      console.log('There was an error posting the pokemons', response);
    });
  }

  vm.editPokemon = function (pokemon) {
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/pokemon/' + pokemon._id,
      data: pokemon
    }).then(function successCallback(json) {
      // don't need to do anything!
    }, function errorCallback(response) {
      console.log('There was an error editing the pokemons', response);
    });
  }

  vm.deletePokemon = function (pokemon) {
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/pokemon'+ '/' + pokemon._id
    }).then(function successCallback(json) {
      var index = vm.pokemons.indexOf(pokemon);
      vm.pokemons.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the pokemons', response);
    });
  }
}
