<?php

header('Content-type: application/json; charset=utf-8');

$servername = 'cards-app.local';
$username = 'root';
$password = 'root';
$dbname = 'cards';
$tablename = 'cards';

try {
  $connection = new PDO('mysql:host=' . $servername . ';dbname=' . $dbname, $username, $password);
  $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  $sql = $connection->prepare('INSERT INTO ' . $tablename . ' (full_name, dob, gender) VALUES (:full_name, :dob, :gender)');
  $sql->bindParam(':full_name', $full_name);
  $sql->bindParam(':dob', $dob);
  $sql->bindParam(':gender', $gender);

	$full_name = $_GET['name'];
	$dob = date('Y-m-d', strtotime($_GET['dob']));
	$gender = $_GET['gender'];

  $sql->execute();

  $sql = $connection->prepare('SELECT id, full_name, dob, registration_time, gender FROM ' . $tablename . ' WHERE id = ' . $connection->lastInsertId());
  $sql->execute();
  $sql->setFetchMode(PDO::FETCH_ASSOC);
	$item = ($sql->fetchAll())[0];

	$exportData = [
		'id' => +$item['id'],
		'name' => $item['full_name'],
		'age' => getAge($item['dob']),
		'registrationTime' => strtotime($item['registration_time']),
		'gender' => $item['gender'],
	];
	echo json_encode($exportData);
} catch (PDOException $e) {
	echo 'Failed to read ' . $dbname . ' database.<br>' . $e->getMessage() . '<br>';
}
$connection = null;

function getAge($dob) {
	$diff = time() - strtotime($dob);
	return date("Y", $diff) - date("Y", 0);
}

?>
