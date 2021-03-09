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

/*   $sql = $connection->prepare('DELETE FROM ' . $tablename);
  $sql->execute();

  $sql = $connection->prepare('INSERT INTO ' . $tablename . ' (full_name, dob, gender) VALUES (:full_name, :dob, :gender)');
  $sql->bindParam(':full_name', $full_name);
  $sql->bindParam(':dob', $dob);
  $sql->bindParam(':gender', $gender);

	$full_name = 'Benetha Green';
	$dob = date('Y-m-d', mktime(0, 0, 0, 1, 12, 1976));
	$gender = 'female';

  $sql->execute(); */

  $sql = $connection->prepare('SELECT id, full_name, dob, registration_time, gender FROM ' . $tablename);
  $sql->execute();
  $sql->setFetchMode(PDO::FETCH_ASSOC);
	$sqlData = $sql->fetchAll();

	$exportData = [];
  foreach ($sqlData as $item) {
    array_push($exportData, [
			'id' => +$item['id'],
			'name' => $item['full_name'],
			'age' => getAge($item['dob']),
			'registrationTime' => strtotime($item['registration_time']),
			'gender' => $item['gender'],
		]);
  }
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
