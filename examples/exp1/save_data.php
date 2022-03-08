<?php
// data storage path
$dataPath = "data";

try {
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);
  if (!file_exists('data')) {
    mkdir('data', 0777, true);
  }
  $filename = sprintf("./%s/%s-%d.csv", $dataPath, uniqid(), time());
  $data = $_POST['filedata'];
  file_put_contents($filename, $data);
  echo '200';
} catch (Exception $e) {
  echo $e->getMessage();
}

?>