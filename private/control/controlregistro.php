<?php session_start();

if(isset($_SESSION['usuario'])) {
    //Mostrando vistas segun el provilegio
    if ($_SESSION['privilegio'] == 1) {
        header('location: ../../../../public/vistas/registro.html');
    }else if($_SESSION['privilegio'] == 2){
        header('location: ../../../../public/vistas/registroB.html');
    }
}
  
        
?>