<?php
include_once "php/db_empresa.php";
$conexion = mysqli_connect($db_host, $db_user, $db_pass, $db_database);
if ($conexion == false) {
    die("Humano hay un error en ela conexion arreglalo " . mysqli_connect_error());
}
$dbName = "coleccion";
foreach ($_FILES["miarchivo"]['tmp_name'] as $key => $tmp_name) {
    //condicional si el fuchero existe
    if ($_FILES["miarchivo"]["name"][$key]) {
        // Nombres de archivos de temporales
        $archivonombre = $_FILES["miarchivo"]["name"][$key];
        $fuente = $_FILES["miarchivo"]["tmp_name"][$key];

        $carpeta = 'img/'.$dbName.'/'; //Declaramos el nombre de la carpeta que guardara los archivos

        if (!file_exists($carpeta)) {
            mkdir($carpeta, 0777) or die("Hubo un error al crear el directorio de almacenamiento");
        }

        $dir = opendir($carpeta);
        $target_path = $carpeta . '/' . $archivonombre; //indicamos la ruta de destino de los archivos


        if (move_uploaded_file($fuente, $target_path)) {
            echo "Los archivos $archivonombre se han cargado de forma correcta.<br>";
        } else {
            echo "Se ha producido un error, por favor revise los archivos e intentelo de nuevo.<br>";
        }
        $sql = "INSERT INTO $dbName (nombre) 
            VALUE ('$archivonombre');";
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

        closedir($dir); //Cerramos la conexion con la carpeta destino
    }
}
