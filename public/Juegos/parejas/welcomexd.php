<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Normalize css -->
    <link rel="stylesheet" href="https://necolas.github.io/normalize.css/">
    <!-- un poco de bootstrap -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <!-- Estilos personalizados-->
    <link rel="stylesheet" href="../../../styles/styles.css">
    <link rel="stylesheet" href="../../../styles/estilojuegos.css">
    <!-- jams icons -->
    <link rel="stylesheet" href="https://unpkg.com/jam-icons/css/jam.min.css">
    <!--iconos socialmedia font awesome  -->
    <link rel='stylesheet prefetch' href='https://cdn.jsdelivr.net/sweetalert2/3.0.3/sweetalert2.min.css'>

    <link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css'>
    <!-- logo en pestaña del navegdor -->
    <link rel="shortcut icon" href="../../../img/logo.svg">
    <title>Encuentra Parejas | Miguiavialsv</title>
    
 
</head>
<body class="bg-cars">
   <header class="main-header">
   <div class="content-wrapper">
        
        <img class="logo" id=logo src="../../../img/logo.svg" alt=logo></a><label for="logo">&nbsp; Mi guia vial sv</label>
        <span id="open-menu-button" class="jam jam-menu"></span> 
          <nav id="main-menu" class="main-menu">
            <span id="close-menu-button" class="jam jam-close"></span> 
              <ul>
                  
                  <li>
                      <a href="#"><i class="fa fa-map-signs fa-2x" aria-hidden="true"></i>Te encuentras en juego de parejas</a>
                  </li>
                  <li>
                  <a href="../../../private/control/control.php"><i class="fa fa-gamepad fa-2x" aria-hidden="true"> &nbsp;</i>Menú juegos</a>
                 </li>
                  
              </ul>
          </nav>
      </div>
   </header>
   <main class=main>
      <form class="instrucciones" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" method="post">
      
    <img class="foto1" src="../../../img/forito.png" alt="imagen 1"> 
      <details >
         <summary>  <img class="align"src="../../../img/arrr.png"alt="instruccion">¿Cómo Jugar? </summary>

         <p>Existe un número par de tarjetas con imagenes de señales de tránsito,
         deberás dar clic sobre una y luego buscar la tarjeta con la misma señal de tránsito.
         
         Al terminar tu partida puedes observar el récord de los jugadores,¿será que puedes puedes superarlos?.
        
        </p>
        
         
      </details>
      <br>
      <div class="level">
        <h3 ><img class="align" src="../../../img/level.png" alt="instruccion"> Selecciona un nivel para jugar</h3>
                  <br>
                  <div class="select">
                     <select require id="slct" name="slct"> 
                     
                       <option value="0">ELIGE UN NIVEL</option>
                       <option value="1">Principiante </option>
                       <option value="2">Fanatico</option>
                        <option value="3">Leyenda</option>
                         
               </select> 
               </div>
      </div>
      <BR><button type="submit"name="submit"type="button" class="btn  btn-lg btn-block btn-play">C O M E N Z A R</button>
      

          

      </div> 

     </form>

   </main>
  
 <!-- bootstrap scripts-->
 <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
  <!-- script propio -->
    <script type="module" src="../../../scripts/menu.js"></script>

</body>

</html>
