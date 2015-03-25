<?php
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    
    $i=$request->qtd;
    $k=$request->dgt;
    
    $total = 0;
    $voucher = array();
    while ($total<$i){
        $teste = (substr(md5(rand(0, 99999999999999999)), 0, $k));
        if (in_array("$teste", $voucher)){
            continue;
        }  else {
             $voucher[] = ($teste);
             $total++;
        }
        
    }
       //print_r($voucher);
       //echo $comma_separated = implode(",", $voucher);
        echo json_encode ($voucher);



