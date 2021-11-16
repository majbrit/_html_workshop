<!DOCTYPE>
<html lang="en">
<html>
    <head>
        <!--Icon in Tab -->
        <link rel="icon" type="image/png" href="IconGes.png">
        
        <meta charset="utf-8">
        <title>Workbook</title>
        <!-- CSS -->
        <link rel="stylesheet"
              type="text/css"
              href="style.css">
    </head>
    <body>
        <article class="someDistance">
            Welcome <?php echo $_GET["name"]." ".$_GET["surname"]; ?><br>
            Your date of birth is: <?php echo $_GET["birth"]; ?>
        </article>

    </body>
</html>