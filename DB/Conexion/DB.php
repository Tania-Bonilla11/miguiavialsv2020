<?php
$conexion;

try {
    $conexion = new PDO('mysql:host=l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=l1n3zhkxnpq302ky', 'xodrdnmpglqs6wc8', 'n31zflvwc1kfis4o');
}
catch (PDOException $prueba_error){
        echo "Error: " . $prueba_error->getMessage();
}
?>  