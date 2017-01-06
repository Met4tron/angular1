angular.module('alurapic').controller('FotosController', function($scope, $http) {

  $scope.fotos = []
  $scope.filtro = '';
  $scope.mensagem = '';

  $http.get('v1/fotos')
  .success(function(fotos){
    $scope.fotos = fotos;
  })
  .error(function(error){
    console.log(error);
  });

  $scope.remover = function(foto){
    console.log(foto);
    $http.delete('v1/fotos/' + foto._id)
    .success(function(){
      var indice = $scope.fotos.indexOf(foto);
      $scope.fotos.splice(indice, 1 );
      $scope.mensagem = 'Foto deletada com Sucesso'
    })
    .error(function(err){
      console.log(err);
      $scope.mensagem = 'Erro ao deletar a foto';
    })
  }


  /*var promise = $http.get('v1/fotos');
  promise.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(err){
    console.log(err);
  });*/

});
