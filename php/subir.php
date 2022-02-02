<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
</head>

<body>
    <?php
    include_once "db_empresa.php";
    $conexion = mysqli_connect($db_host, $db_user, $db_pass, $db_database);
    if ($conexion == false) {
        die("Humano hay un error en ela conexion arreglalo " . mysqli_connect_error());
    }
    if (isset($_REQUEST['guardar'])) {
        $subirFoto = isset($_FILES['foto']) ? $_FILES['foto'] : null;
        if ($subirFoto) {
            $nombreFoto = $subirFoto['name'];
            move_uploaded_file($subirFoto['tmp_name'], 'img/espectros/' . $nombreFoto);
        }

        $sql = "INSERT INTO espectros (nombre) 
        VALUE ('$nombreFoto');";
        $resultado = mysqli_query($conexion, $sql);
        if ($resultado == true) {
    ?>
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Actualizaciòn con exito!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        <?php
        } else {
        ?>
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Actualizaciòn no exitosa!</strong>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    <?php        }
    }
    ?>
    <div class="container">
        <div class="row my-5">
            <div class="col-12">
                <form method="post" enctype="multipart/form-data">
                    <div class="form-group">
                        <input type="file" class="form-control-file" name="foto">
                    </div>
                    <div class="form-group my-3">
                        <button type="submit" class="btn btn-primary" name="guardar">Enviar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js" integrity="sha384-eMNCOe7tC1doHpGoWe/6oMVemdAVTMs2xqW4mwXrXsW0L84Iytr2wi5v2QjrP/xp" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
</body>

</html>