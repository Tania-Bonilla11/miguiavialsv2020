<?php session_start();

if(isset($_SESSION['usuario'])) {
    //Mostrando vistas segun el provilegio
    header('location:/../../../../prograiv/public/Videos/menu.html');
}else{
    
    header('location: ../../../private/logreg/login.php');

}
  
        
?>