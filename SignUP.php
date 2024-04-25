<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "railway management system";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$dateofbirth = $_POST['dateofbirth'];
$gender = $_POST['gender'];
$contactnumber = $_POST['contactnumber'];
$address = $_POST['address'];

$sql = "INSERT INTO user (Username, Email, Password, FirstName, LastName, DateOfBirth, Gender, ContactNumber, Address)
VALUES ('$username', '$email', '$password', '$firstname', '$lastname', '$dateofbirth', '$gender', '$contactnumber', '$address')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
