<?php

  define('SITE_KEY','6Le79Y0UAAAAAPpYvqv3sb8544w-lUk5S0irrsQx');
  define('SECRET_KEY','6Le79Y0UAAAAAJ4kkR6Bsm_dPSH1vm3yg-5siotr');

  if($_POST){
    function getCaptcha($SecretKey){
      $Response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".SECRET_KEY."&response={$SecretKey}");
      $Return = json_decode($Response);
      return $Return;
    }
    $Return = getCaptcha($_POST['g-recaptcha-response2']);
    //var_dump($Return);
  }

  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $CityRent = $_POST['cityRent'];
  $GiveBack = $_POST['giveBack'];
  $CityBack = $_POST['cityBack'];
  $DateIn = $_POST['dateIn'];
  $TimeIn = $_POST['timeIn'];
  $DateOut = $_POST['dateOut'];
  $TimeOut = $_POST['timeOut'];
  $Name = $_POST['name3'];
  $Phone = $_POST['phone3'];
  $SelectOld = $_POST['selectOld'];
  $Email = $_POST['email3'];
  $SelectMoto = $_POST['selectMoto'];

  $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
  try {
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                       // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'informacion.motoraid@gmail.com';   // SMTP username
    $mail->Password = 'ktm1090r';                         // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('informacion.motoraid@gmail.com', 'MotoRaid');
    $mail->addAddress('alejandro@motoraidadventure.com');
    $mail->addAddress('jorge@motoraidadventure.com');
    // $mail->addAddress('dafelpu.farfan95@gmail.com');
    // $mail->addAddress('informacion.motoraid@gmail.com');

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Contacto MotoRaid';
    $mail->Body    = " 
    <html>
    <body>
      <h1>Correo desde www.motoraid.com</h1>
      <p>Informacion suministrada por:</p>
      <p>Nombre: {$Name}</p>
      <p>Telefono: {$Phone}</p>
      <p>Email: {$Email}</p>
      <p>Ciudad donde rentara la moto: {$CityRent}</p>
      <p>Regresara la Moto en otra ciudad {$GiveBack}</p>
      <p>Ciudad donde regresara la moto: {$CityBack}</p>
      <p>Fecha inicio: {$DateIn} - hora :{$TimeIn}</p>
      <p>Fecha regreso: {$DateOut} - hora :{$TimeOut}</p>
      <p>Edad: {$SelectOld}</p>
      <p>Moto seleccionada {$SelectMoto}</p>
    </body>
    </html>
    <br />";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    if($Return->success == true && $Return->score > 0.5){
      $mail->send();
      echo 
      //Si el mensaje se envía muestra el mensaje de enviado
        '<div class="modal fade" id="respuesta2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="alert alert-success alert-dismissable">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <strong>Su mensaje ha sido enviado correctamente.</strong>
            </div>    
          </div>
        </div>';
    }else{
      echo 
        '<div class="modal fade" id="respuesta2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="alert alert-danger alert-dismissable">
              <button type="button" class="close" data-dismiss="modal">×</button>
              <strong>ERROR. Intente mas tarde.</strong>
            </div>    
          </div>
        </div>', $mail->ErrorInfo;
    }

  }catch (Exception $e) {
    //Si el mensaje no se envía muestra el mensaje de error
    echo 
      '<div class="modal fade" id="respuesta2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="alert alert-danger alert-dismissable">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <strong>ERROR. Intente mas tarde.</strong>
          </div>    
        </div>
      </div>', $mail->ErrorInfo;
  }

?>

