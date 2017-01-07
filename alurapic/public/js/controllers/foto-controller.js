angular.module('alurapic').controller('FotoController', function($scope, recursoFoto, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = '';


    if ($routeParams.fotoId) {
      recursoFoto.get({fotoId: $routeParams.fotoId}, function(foto){
        $scope.foto = foto;
      }, function(err){
        console.log(err);
        $scope.mensagem = 'Não fui possível obter a foto';
      });
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {

            if ($routeParams.fotoId) {

              recursoFoto.update({fotoId: $scope.foto._id}, $scope.foto, function(){
                $scope.mensagem = 'Foto alterada com sucesso';
              }, function(){
                $scope.mensagem = 'Erro ao alterar a foto';
              })

            } else {
                recursoFoto.save($scope.foto,function(){
                  $scope.foto = {};
                  $scope.mensagem = 'Foto Cadastrada com Sucesso !';
                }, function (err){
                  console.log(err);
                  $scope.mensagem = "Não foi possivel cadastrar";
                });

            }
        }
    }
});
