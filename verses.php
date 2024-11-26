<?php
$db = new SQLite3('BibleVerse.db');
$query = 'SELECT * FROM BIBLE';
$result = $db->query($query);
$verses = [];
?>