<?php

$servername = 'cards-app.local';
$username = 'root';
$password = 'root';
$dbname = 'cards';
$tablename = 'cards';

try {
  $connection = new PDO('mysql:host=' . $servername . ';dbname=' . $dbname, $username, $password);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = $connection->prepare('DELETE FROM ' . $tablename . ' WHERE id = ' . $_GET['id']);
  $sql->execute();
} catch (PDOException $e) {
	echo 'Failed to delete from ' . $dbname . ' database.<br>' . $e->getMessage() . '<br>';
}
$connection = null;

?>
