<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Form was submitted
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $address = $_POST["address"];
    $message = $_POST["message"];

    // Customize the email subject and body
    $subject = "New Form Submission from Your Website";
    $body = "Name: $name\nEmail: $email\nPhone: $phone\nAddress: $address\nMessage: $message";

    // Send the email
    $to = "dkane6112@gmail.com"; // Replace with your actual email address
    $headers = "From: dkane6112backup@gmail.com"; // Customize the sender email
    mail($to, $subject, $body, $headers);

    // Redirect back to the form or a thank-you page
    header("Location: index.html"); // Replace with your thank-you page
    exit;
}
?>
