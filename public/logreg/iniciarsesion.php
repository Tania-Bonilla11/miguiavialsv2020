<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Iniciar Sesión | Miguiavialsv</title>
    
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="../../styles/login-registro.css">
    
</head>
<body>
  <!-- cabecera -->
  <header class="main-header">
      <div class="content-wrapper"> <a href="/">
        
        <img class="logo" id=logo src="../../img/logo.svg" alt=logo></a><label for="logo">&nbsp; Mi guia vial sv</label>
        <span id="open-menu-button" class="jam jam-menu"></span> 
          <nav id="main-menu" class="main-menu">
            <span id="close-menu-button" class="jam jam-close"></span> 
              <ul>
                  <li>
                    <a href="../../index.html">Inicio</a>
                  </li>
                  <li>
                    <a href="registrarse.php">Registrarse</a>
                  </li>
                  
              </ul>
          </nav>
      </div>
  </header> 
  <main class="main">
      <form action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post" class="login">
            <h1>Iniciar Sesión</h1><h2> Mi guiavial sv</h2></div>
          
            
                <label for="usuario">Usuario:</label>
                <input type="text"  autofocus name="usuario" id=usuario>
           
           
                <label for="clave">Contraseña:</label>
                <input type="password" id=clave name="clave">
           
           
            
                <?php if(!empty($error)): ?>
          
                <?php echo $error; ?>
           
                <?php endif; ?>
            
            
            <button class="btn btn-sm button dark ghost" type="submit"name="submit">Iniciar sesión</button>
           
        </form>
    </div>
</main>
        
        
    
</body>
</html>