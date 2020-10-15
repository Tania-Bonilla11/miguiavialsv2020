<?php session_start();

if(isset($_SESSION['usuario'])) {
    //Mostrando vistas segun el provilegio
    header('location: /miguiavialsv/public/Juegos/menujuegos.html');
}else{
    
    header('location: /miguiavialsv/private/logreg/login.php');

}
  
        
?>