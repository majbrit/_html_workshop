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

        
    <?php
        function currentDateTime() {
            echo date("Y/m/d")." ". date("h:i:sa");
    }
    ?>

    <article class="someDistance">
        <form name="myform" action="action_page.php" method="get">
                <label for="name">Name: </label>
                <input type="text" id="name" name="name"><br><br>
                <label for="surname">Surname: </label>
                <input type="text" id="surname" name="surname"><br><br>
                <label for="birth">Date of Birth: </label>
                <input type="text" id="birth" name="birth"><br><br>

    
                <!-- Submit Button-->
                <input type="submit" value="Submit">
        </form>

    </article>



    <footer>
        &copy; 
        <?php
            currentDateTime();
        ?>
    </footer>


        
    </body>
</html>