app.controller("VoucherController", function ($scope, $sce, $http){
    $scope.resultado = "";
    $scope.geraVoucher = function(form){
        if(form.output === "screen"){
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
        }
        else{
            console.log(form);
            if (validaForm(form)){
                window.location.href = "../application/download.php?qtd="+form.qtd+"&dgt="+form.dgt;
        /*$http({
          method: "post",
          url: "../application/download.php",
          data: form
          //headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(retorno){
          console.log (retorno);
        });*/
            }
        }
        
        function validaForm (form){
            console.log(form);
            if (form.qtd === '' && form.dgt === '')
                return false;
            if (form.qtd === undefined && form.dgt === undefined)
                return false;
            return true;
    }
    };
});
