<?php
    $postdata = fille_get_contents("php://input");
    $request = json_decode($postdata);
    
    $i=$request->qtd;
    $k=$request->dgt;
    
    $total = 0;
    while ($total<$i){
        $teste = array(substr(md5(rand(0, 99999999999999999)), 0, $k));
        if (in_array("$teste", $voucher)){
            continue;
        }  else {
             $voucher = array($teste);   
        }
    }
        echo $voucher        




?>