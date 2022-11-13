<?php
$name = $_POST['name'];
$name = $_POST['email'];
$name = $_POST['contact'];

 if(!empty($email)){
    if(filter_var($email, FILTER_VALIDATE_EMAIL)){
        $receiver = "florentine.dermaku@gmail.com";
        $subject = "From: $name <$email>";
        $body = "Name: $name\nEmail: $email\nMessage: $contact\n\nRegards,\n$name";
        $sender ="From: $email";
        if(mail($receiver, $subject, $body, $sender)){
            echo "Your message has ben sent";
        }
        else {
            echo "Sorry, failed to send your message!";
        }
    }
    else{
        echo "Enter a valid email address! ";
    }
}
else{
    echo "Email field is required! "
}

?>