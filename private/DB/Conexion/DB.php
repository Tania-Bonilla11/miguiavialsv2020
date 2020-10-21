<?php

try {
    $conexion = new PDO('mysql:host=l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com;dbname=y9azbqb5lm06s0sz', 'o2k931858850gpgo', 'sygiemeymw0w36vp');
}
catch (PDOException $prueba_error){
        echo "Error: " . $prueba_error->getMessage();
}
?>  