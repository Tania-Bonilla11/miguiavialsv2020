<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
     <link rel=stylesheet href="../../styles/login-registro.css">
      <!-- logo en pestaña del navegdor -->
    <link rel="shortcut icon" href="../../img/logo.svg"> 
    <!-- jams icons -->
    <link rel="stylesheet" href="https://unpkg.com/jam-icons/css/jam.min.css">
    <title>Registrarse | Miguiavialsv</title>
  </head>
  <body>
  <header class="main-header">
      <div class="content-wrapper"> <a href="../../index.html">
        
        <img class="logo" id=logo src="../../img/logo.svg" alt=logo></a><label for="logo">&nbsp; <b> Mi guia vial sv</b>  </label>
        <span id="open-menu-button" class="jam jam-menu"></span> 
          <nav id="main-menu" class="main-menu">
            <span id="close-menu-button" class="jam jam-close"></span> 
              <ul>
                  <li>
                    <a href="../../index.html">Inicio</a>
                  </li>
                  <li>
                    <a href="../../private/logreg/login.php">Iniciar Sesión</a>
                  </li>
                  
              </ul>
          </nav>
      </div>
  </header> 
  <div id=mensaje >
     <?php if(!empty($error)): ?>
            <div class="mensaje"class="mt-3 mb-5">
                <?php echo $error; ?>
            </div>
            <?php endif; ?>
     </div>
      <main>
         
          <section class="form">
              <div class="container">
                  <div class="row ">
                      <div class="col-lg-5">
                          <img id=reg src="../../img/registro.svg" alt="loginimagen"class="img-fluid  pb-5">
                      </div>
                      <div class="col-lg-7 px-5 pt-5">
                          <h1 class="font-weight-bold py-3">Registrarse</h1>
                          <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" class="form">
                              <div class="form-row">
                                  <div class="col-lg-7">
                                    <label for="usuario">Usuario</label>
                                    <input class="form-control my-2 p-1" type="text" id=usuario name="usuario" pattern="[a-zA-Z ]+" value="<?php if(isset($usuario)) echo $usuario?>">
                                    <label for="correo">Correo</label>
                                    <input type="email" id=correo class="form-control my-2 p-1"name="correo" value="<?php if(isset($correo)) echo $correo?>">
                                  </div>
                              </div>
                              <div class="form-row">
                                  <div class="col-lg-5">
                                      <label >Contraseña<input type="password" id=pass class="form-control "name="clave"></label>
                                      <label> Repetir Contraseña<input type="password" id=pass class="form-control "name="clave2"></label>
                                    
                                    
                                  </div>
                              </div>
                              <div class="form-row mt-3 mb-5">
                                  <div class="col-lg-7">
                                     
                                    <button type=submit  class="btn btn-sm button dark ">Registrarse</button>
                                   
                                  </div>
                              </div>
                              <p>¿Ya tienes cuenta? <a href="../../private/logreg/login.php">¡Inicia Sesión!</a></p>
                          </form>
                      </div>
                  </div>
              </div>
          </section>
      </main>
      <br>
          <!-- Simple footer -->
    <footer class="site-footer">
        <div class="containerfoot">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">Copyright &copy; 2020 Todos los derechos reservados |
           <a href="#">Miguiavialsv</a>.
              </p>
            </div>
    
            <div class="col-md-4 col-sm-6 col-xs-12">
              <ul class="social-icons">
                <li><em class="facebook" href="#"><em class="fa fa-facebook"></em></em></li>
                <li><em class="twitter" href="#"> <em class="fa fa-twitter"></em></em></li>
                <li><em class="dribbble" href="#"><em class="fa fa-google"></em></em></li>
                <li><em class="linkedin" href="#"><em class="fa fa-linkedin"></em></em></li>   
              </ul>
            </div>
          </div>
        </div>
    </footer>
   
    <script src="../../scripts/menu.js"></script>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  </body>
</html>