<?php session_start(); ?>

<!DOCTYPE html>
<html lang="es" >
<head>
  <meta charset="UTF-8">
  <title>Fanaticos</title>
  <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Coda'>
  <link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css'>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css'>
  <link rel="stylesheet" href="style.css">

</head>
<h1>N I V E L  3<h4>L E Y E N D A</h4></h1>

<body>
<div><i onclick="location.href='../welcome.php'"class="fa fa-arrow-circle-left">  Regresar</i></div>
  <div id="score-panel">

    <span class="moves">0</span> Movimientos
    <div class="restart">
      <i class="fa fa-repeat">   Repetir</i>
    </div>
  </div>
<ul class="deck"></ul>
<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js'></script>
<script  src="nivel3.js"></script>

<script>
  var level = 3;
  var user_id = <?php echo $_SESSION["user_id"]; ?>;
</script>

</body>
</html>
