app.controller("VoucherController", function ($scope, $sce, $http){
    $scope.resultado = "";
    
    $scope.geraVoucher = function(form){
       console.log(form);
        if (validaForm(form)){
        $http({
          method: "post",
          url: "../application/geraVoucher.php",
          data: form
          //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }).success(function(retorno){
          console.log (retorno);
          $scope.resultado = retorno;
      });
        }
    };
    
    function validaForm (form){
        console.log(form);
        if (form.qtd === '' && form.dgt === '')
            return false;
        if (form.qtd === undefined && form.dgt === undefined)
            return false;
        return true;
    }
});
