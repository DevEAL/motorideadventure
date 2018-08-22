<?php
	
	$name = '';
	$email = '';
	$subject = '';
	$message = '';
	$phone = '';
	$ciudad = '';


	if(isset($_POST['name'])) 		$name = $_POST['name'];
	if(isset($_POST['email'])) 		$email = $_POST['email'];
	if(isset($_POST['subject'])) 	$subject = $_POST['subject'];
	if(isset($_POST['message'])) 	$message = $_POST['message'];
	if(isset($_POST['phone'])) 	    $message = $_POST['phone'];
	if(isset($_POST['ciudad'])) 	$message = $_POST['ciudad'];

	$headers = "From: " . $email;

	$to = 'cuentas@enalgunlugarestudio.com';

	mail($to, $subject, 'Nombre: '.$name.' Mensaje: '.$message. ' Ciudad: '.$ciudad. ' Telefono: '.$phone. ' Email: '.$email);


?>