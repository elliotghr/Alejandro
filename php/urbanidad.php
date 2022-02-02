<?php
include_once "db_empresa.php";
$conexion = mysqli_connect($db_host, $db_user, $db_pass, $db_database);
if ($conexion == false) {
    die("Humano hay un error en la conexion arreglalo " . mysqli_connect_error());
}

$sql = "SELECT nombre FROM urbanidad";
$resultadoSantos = mysqli_query($conexion, $sql);
$result= [];

while ($row = mysqli_fetch_assoc($resultadoSantos)) {

    if ($row) {
        $res = array(
            "err" => false,
            "status" => http_response_code(200),
            "files" => $row['nombre']
        );
        $result[] = $res;
    } else {
        $res = array(
            "err" => true,
            "status" => http_response_code(400),
            "files" => $row['nombre']
        );
    }
}
echo json_encode($result);