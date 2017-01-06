angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams) {
    $scope.foto = {};
    $scope.mensagem = '';

    if ($routeParams.fotoId) {
      $http.get('v1/fotos/' + $routeParams.fotoId)
      .success(function(foto){
        $scope.foto = foto
      })
      .error(function(err){
        console.log(err);
        $scope.mensagem = 'Não foi possivel obter a foto em questão';
      });
    }

    $scope.submeter = function() {

        if ($scope.formulario.$valid) {

            if ($routeParams.fotoId) {

                $http.put('v1/fotos/' + $scope.foto._id, $scope.foto )
                .success(function(){
                  $scope.mensagem = 'Foto alterada com sucesso';
                })
                .error(function(err){
                  console.log(err);
                  $scope.mensagem = 'Erro ao editar a foto';
                })
            } else {
                $http.post('v1/fotos', $scope.foto)
                    .success(function() {
                        $scope.mensagem = "Foto Cadastrada com Sucesso !";
                    })
                    .error(function(erro) {
                        console.log(erro);
                        $scope.mensagem = "Foto não foi inserida com sucesso, ocorreu um erro !"
                    });
            }
        }
    }
});
