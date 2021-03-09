<?php

$servername = 'cards-app.local';
$username = 'root';
$password = 'root';
$dbname = 'cards';
$tablename = 'cards';

try {
	$connection = new PDO('mysql:host=' . $servername, $username, $password);
	$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$connection->exec('CREATE DATABASE ' . $dbname);
	echo 'Database created successfully.<br>';
} catch (PDOException $e) {
	echo 'Failed to create ' . $dbname . ' database.<br>' . $e->getMessage() . '<br>';
}

try {
  $connection = new PDO('mysql:host=' . $servername . ';dbname=' . $dbname, $username, $password);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $connection->exec('CREATE TABLE ' . $tablename . ' (
  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  dob DATE NOT NULL,
  registration_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	gender ENUM("male", "female") NOT NULL
  )');
  echo 'Table created successfully.<br>';
} catch(PDOException $e) {
  echo 'Failed to create ' . $tablename . ' table.<br>' . $e->getMessage() . '<br>';
}
$connection = null;

?>
