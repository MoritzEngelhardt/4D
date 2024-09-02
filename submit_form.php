<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the checkbox is checked
    if (isset($_POST['datenschutz'])) {
        // Collect form data and sanitize it
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);
        
        // Define the recipient email address
        $to = "moritz.engelhardt95@gmail.com";  // Replace with your email address
        $subject = "New message from contact form";
        
        // Compose the email body
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        
        // Set the email headers
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        
        // Send the email
        if (mail($to, $subject, $body, $headers)) {
            echo "Nachricht wurde gesendet.";
        } else {
            echo "Fehler beim Senden der Nachricht.";
        }
    } else {
        echo "Sie müssen die Datenschutzerklärung akzeptieren, bevor Sie die Nachricht senden.";
    }
}
?>