<?php session_start();
    $error = '';
    
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        
        $usuario = $_POST['usuario'];
        $clave = $_POST['clave'];
       
       
        if (empty($usuario)){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor debe ingresar el usuario.
           </div>';
        } 
        else if (empty(trim ($_POST['clave']))){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor debe ingresar contraseña.
          </div>';
        }
        else {
            // Cambio en la conexion a la base de datos a Conexion/DB.php
            include_once('../../DB/Conexion/DB.php');
            
            $statement = $conexion->prepare('
            SELECT id, usuario, clave, privilegio FROM login WHERE usuario = :usuario AND clave = :clave '
            );
            
            $statement->execute(array(
                ':usuario' => $usuario,
                ':clave' => $clave,
            ));
                
            $resultado = $statement->fetch(PDO::FETCH_OBJ);
            
            if ($resultado !== false){
                $_SESSION['usuario'] = $usuario;
                $_SESSION['user_id'] = $resultado->id;
                $_SESSION['privilegio'] = $resultado->privilegio;

                if(isset($_SESSION['usuario'])){
                    header('location: ../control/principal.php ');
                }
            }else {
                $error .= '<div class="alert alert-danger" role="alert">
                Este usuario no existe.
              </div>';
            }
        }
}
require '../../public/logreg/login.php';