app.controller("VoucherController", function ($scope, $sce, voucherService){
    $scope.geraVoucher = function(form){
        if (validaForm(form)){
            voucherService.submit(form);
        }
    };
    function validaForm (form){
        if (form.voucher === '' || form.voucher === undefined)
            return false;
        return true;
    }
});
