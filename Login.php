<?php
session_start();

$servername = "localhost";
$Username = "root";
$dbPassword = "";
$dbname = "railway management system";

// Connect to the database
$conn = new mysqli($servername, $Username, $dbPassword, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Login process
if (isset($_POST['username']) && isset($_POST['password'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    
    $username = stripslashes($username);
    $password = stripslashes($password);
    $username = mysqli_real_escape_string($conn, $username);
    $password = mysqli_real_escape_string($conn, $password);

    
    $query = "SELECT * FROM user WHERE (username='$username' OR email='$username') AND password='$password'";
    $result = mysqli_query($conn, $query);
    $count = mysqli_num_rows($result);

    if ($count == 1) {
        $_SESSION['username'] = $username;
        // Redirect to welcome.php
        header('Content-Type: application/json');
        echo json_encode(['status' => 'success']);
        
    } else {
        header('Content-Type: application/json');
        echo json_encode(['status' => 'error', 'message' => 'Invalid username or password']);
   }
}

$conn->close();
?>

