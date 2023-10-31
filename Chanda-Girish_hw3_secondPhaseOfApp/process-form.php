<?php
// Connect to your database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "user_data";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle form data submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $userInfo = array(
        "currentLocation" => $_POST["current-location"],
        "searchOnline" => $_POST["search-online"],
        "desiredLocation" => $_POST["desired-location"],
        "familyBackground" => $_POST["family-background"],
        "placeOfBirth" => $_POST["place-of-birth"],
        "currentResidence" => $_POST["current-residence"],
        "desiredResidence" => $_POST["desired-residence"],
        "significantOther" => $_POST["significant-other"],
        "otherInfo" => $_POST["other-info"],
        "cvFileName"=> $_POST["cv-upload"],
        "pictureFileName"=> $_POST["picture-upload"]

    );

    // Insert data into the database
    $sql = "INSERT INTO user_info (currentLocation, searchOnline, desiredLocation, familyBackground, placeOfBirth, currentResidence, desiredResidence, significantOther, otherInfo, cvFileName, pictureFileName)
            VALUES (
                '{$userInfo['currentLocation']}',
                '{$userInfo['searchOnline']}',
                '{$userInfo['desiredLocation']}',
                '{$userInfo['familyBackground']}',
                '{$userInfo['placeOfBirth']}',
                '{$userInfo['currentResidence']}',
                '{$userInfo['desiredResidence']}',
                '{$userInfo['significantOther']}',
                '{$userInfo['otherInfo']}',
                '{$userInfo['cvFileName']}',
                '{$userInfo['pictureFileName']}'

            )";

    if ($conn->query($sql) === TRUE) {
        echo "Form data has been successfully submitted and saved to the database.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close the database connection
$conn->close();
?>
