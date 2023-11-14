<?php
// Database connection details(access variables)
$servername = "localhost";
$username = "root";//(local disk C,where xampp is installed)
$password = "";
$database = "school";

// Create a connection to the database
$conn =  new mysqli($servername, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Insert data into the database
if (isset($_POST['save_data'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $email = $_POST['email'];

    $sql = "INSERT INTO students (fname, lname, email) VALUES ('$fname', '$lname', '$email')";

    if ($conn->query($sql) === TRUE) {
        echo "Data inserted successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

/// Delete data from the database
if (isset($_GET['delete_data'])) {
    $id_to_delete = $_GET['delete_data'];

    // Use prepared statement to prevent SQL injection
    $stmt = $conn->prepare("DELETE FROM students WHERE id = ?");
    $stmt->bind_param("i", $id_to_delete);

    if ($stmt->execute()) {
        echo "Data deleted successfully.";
    } else {
        echo "Error deleting data: " . $stmt->error;
    }

    $stmt->close();
}


?>


