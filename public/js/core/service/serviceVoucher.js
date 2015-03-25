/*app.service("voucherService", function($location, $http, $scope){
    return {submit: function (dados){
      console.log(dados);
      $http({
          method: "post",
          url: "../application/geraVoucher.php",
          data: dados
          //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function(retorno){
          console.log (retorno);
          $scope.resultado = retorno;
      });
    }};
});*/
