<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "portfolio";

// Create connection
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$message = $_POST['message'];

$sql = "INSERT INTO contact_details (email, message) VALUES ('$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Message sent successfully!";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>
