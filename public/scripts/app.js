console.log('This is working!')

angular
  .module('pokedex', ['ngRoute'])
  .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/pokemons/pokeindex.html',
      controllerAs: 'pokemonsIndexCtrl',
      controller: 'PokemonsIndexController'
    })
    .when('/pokemons/:id', {
      templateUrl: '/templates/pokemons/pokeshow.html',
      controllerAs: 'pokemonsShowCtrl',
      controller: 'PokemonsShowController'
    })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
  });
}
