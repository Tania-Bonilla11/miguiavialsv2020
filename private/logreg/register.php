<?php session_start();

    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
         $usuario = $_POST['usuario'];
         $correo = $_POST['correo'];
         $clave = $_POST['clave'];
         $clave2 = $_POST['clave2'];
        
        $error = '';
        
        if (empty($correo)){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor debe ingresar el correo.
          </div>';
        } 
        else if (strlen($correo) > 30) {
                $error .= '<div class="alert alert-warning" role="alert">
                El correo es demasiado largo.
              </div>'; 
            }
            else if (!filter_var($correo, FILTER_VALIDATE_EMAIL)) {
                $error .= '<div class="alert alert-danger" role="alert">
               Correo Inválido.
              </div>'; 
            }
        
        else if (empty($usuario)){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor debe ingresar el usuario.
          </div>';
        }
        else if (strlen($usuario) > 20) {
            $error .= '<div class="alert alert-warning" role="alert">
           El usuario es muy largo debe ser menor de 20 caracteres.
          </div>'; 
        }
        else if (strlen($usuario) < 4) {
            $error .= '<div class="alert alert-warning" role="alert">
            El usuario debe ser mayor de 4 caracteres.
          </div>'; 
        }
        else if (empty($_POST['clave'])){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor debe ingresar contraseña.
          </div>';
        }
        else if (strlen($_POST['clave']) < 8) {
            $error .= '<div class="alert alert-warning" role="alert">
            Contraseña debe ser mayor de 8 caracteres.
          </div>'; 
        } 
        else if (strlen($_POST['clave']) > 16) {
            $error .= '<div class="alert alert-warning" role="alert">
            Contraseña demasiado larga,debe menor a los 16 caracteres.
          </div>'; 
        }
        else if (empty($_POST['clave2'])){
            $error .= '<div class="alert alert-danger" role="alert">
            Por favor confirmar contraseña.
          </div>';
        }else{
        
        
            include_once('../../DB/Conexion/DB.php');
            
            $statement = $conexion->prepare('SELECT * FROM login WHERE usuario = :usuario LIMIT 1');
            $statement->execute(array(':usuario' => $usuario));
            $resultado = $statement->fetch();
                     
            if ($resultado != false){
                $error .= '<div class="alert alert-primary" role="alert">
                Usuario ya se encuentra registrado, ¡deberias iniciar sesión!.
              </div>';
            }
            
            if ($clave != $clave2){
                $error .= '<div class="alert alert-danger" role="alert">
                Contraseñas no coinciden.
              </div>';
            }
        }
        
        if ($error == ''){
            $statement = $conexion->prepare('INSERT INTO login (correo, usuario, clave, privilegio) VALUES (:correo, :usuario, :clave, 0)');

            $statement->execute(array(
                ':correo' => $correo,
                ':usuario' => $usuario,
                ':clave' => $clave
            ));

            $arr = $statement->errorInfo();
            
            if (!empty($arr) && $arr[1] == 1) {
                $error .= $arr[2];
            }
            else {
                $error .= '<div class="alert alert-success" role="alert">
               ¡Usuario creado con éxito! Inicia Sesión!
              </div>';
              $usuario='';
              $correo='';
            
            }
        }
    }


    require '../../public/logreg/registrarse.php';

?>