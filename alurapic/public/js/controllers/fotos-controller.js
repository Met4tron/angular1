angular.module('alurapic').controller('FotosController', function($scope, recursoFoto) {

  $scope.fotos = []
  $scope.filtro = '';
  $scope.mensagem = '';

  recursoFoto.query(function(fotos) {
    $scope.fotos = fotos;
  }, function(err){
    console.log(err);
  });

  $scope.remover = function(foto){
    recursoFoto.delete({fotoId: foto._id}, function(){
      var indiceFoto = $scope.fotos.indexOf(foto);
      $scope.fotos.slice(indiceFoto, 1);
      $scope.mensagem = 'Foto' + foto.titulo + 'removida com sucesso';
    }, function(err){
      console.log(err);
      $scope.mensagem = 'Não foi possive deletar a foto'
    });
  };


  /*var promise = $http.get('v1/fotos');
  promise.then(function(retorno){
    $scope.fotos = retorno.data;
  }).catch(function(err){
    console.log(err);
  });*/

});
