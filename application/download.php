<?php

// output headers so that the file is downloaded rather than displayed
header('Content-Type: text/csv; charset=utf-8');
header('Content-Disposition: attachment; filename=data.csv');

// create a file pointer connected to the output stream
$output = fopen('php://output', 'w');

// output the column headings
fputcsv($output, array('Column 1', 'Column 2', 'Column 3'));

while ($total<$i){
        $teste = (substr(md5(rand(0, 99999999999999999)), 0, $k));
        if (in_array("$teste", $voucher)){
            continue;
        }  else {
             $voucher[] = ($teste);
             $total++;
        }
        
    }