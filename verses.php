<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
$db = new SQLite3('BibleVerse.db');
$query = 'SELECT * FROM VERSES';
$result = $db->query($query);
$verses = [];
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $verses[] = $row;
}
header('Content-Type: application/json');
echo json_encode($verses);
?>