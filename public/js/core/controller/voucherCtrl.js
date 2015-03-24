app.controller("VoucherController", function ($scope, $sce, voucherService){
    $scope.validaVoucher = function(form){
        if (validaForm(form)){
            validaService.submit(form);
        }
    };
    function validaForm (form){
        if (form.voucher === '' || form.voucher === undefined)
            return false;
        return true;
    }
});
