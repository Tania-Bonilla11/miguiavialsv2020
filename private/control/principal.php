<?php session_start();

if(isset($_SESSION['usuario'])) {
    //Mostrando vistas segun el provilegio
    if ($_SESSION['privilegio'] == 1) {
        header('location: ../../../../../host/public/vistas/homep.html');
    }else if($_SESSION['privilegio'] == 2){
        header('location: ../../../../../../host/public/vistas/homep.html');
    }else if($_SESSION['privilegio'] == 0){
        header('location: ../../../../../../host/public/vistas/home.html');
    }
}else{
    header('location: login.php');
}
  
        
?>