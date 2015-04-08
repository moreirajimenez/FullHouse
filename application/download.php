<?php

// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/html; charset=UTF-8');
header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D,d M YH:i:s") . " GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
header("Content-type: application/x-msexcel");
header("Content-Disposition: attachment; filename=\"voucher.csv\"");
header("Content-Description: PHP Generated Data");

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array('Vouchers'));

    $i=$_GET["qtd"];
    $k=$_GET["dgt"];

    
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
    

fputcsv($output, $voucher);
fclose($output);
