<?php
  use PHPMailer\PHPMailer\PHPMailer;
  use PHPMailer\PHPMailer\Exception;
  
  require 'PHPMailer/src/Exception.php';
  require 'PHPMailer/src/PHPMailer.php';
  require 'PHPMailer/src/SMTP.php';

  $Name = $_POST['name_2'];
  $Phone = $_POST['phone_2'];
  $Email = $_POST['email_2'];
  $Message = $_POST['message_2'];

  $mail = new PHPMailer(true);                            // Passing `true` enables exceptions
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
    // $mail->addAddress('informacion.motoraid@gmail.com');

    //Content
    $mail->isHTML(true);// Set email format to HTML
    $mail->Subject = 'Contacto MotoRaid';
    $mail->Body =
      "<html>
        <body style='margin: 0; padding: 0;'>
        <table border='0' cellpadding='0' cellspacing='0' width='100%'>	
          <tr>
          <td style='padding: 10px 0 30px 0;'>
            <table align='center' border='0' cellpadding='0' cellspacing='0' width='600' style='border: 1px solid #cccccc; border-collapse: collapse;'>
            <tr>
              <td align='center' style='background: #285468e8; padding: 20px;  color: #fff; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;'>
                <img src='http://www.enalgunlugar.website/Motoraid/images/logo.png'  width='150' alt='Motoraid'>
              </td>
            </tr>
            <tr>
              <td bgcolor='#ffffff' style='padding: 40px 30px 40px 30px;'>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                <td style='color:#2CAB6A; font-family: Arial, sans-serif; font-size: 35px;'>
                  <b>Correo de cotizacion</b>
                </td>
                </tr>
                <tr>
                <td style='padding: 20px 0 30px 0; color: #285468; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px;'>
                  <b style='font-size: 25px;'>Hola !!!</b> <br> <br>
                  Se ha solicitado una cotizacion desde la pagina de <a style='text-decoration:none;'href='https://motoraidadventure.com' target='_blank'>Motoraid Adventure</a> por un usuario Local.
                </td>
                </tr>
                <tr>
                <td style='padding: 0 20px 30px ; color: #285468; font-family: Arial, sans-serif; font-size: 16px; line-height: 20px; border-bottom: 1px #285468 solid;'>
                  <p>
                  <b style='color:#2CAB6A; font-size:25px;'>Informacion suministrada por:</b>  <br><br>
                  <b>Nombre:</b> {$Name}<br>
                  <b>Telefono:</b> {$Phone}<br>
                  <b>Email:</b> {$Email}<br>
                  <b>Mensaje:</b> {$Message}<br>
                  <b><small>Este mensaje es enviado por una persona Local</small></b>
                  </p>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            <tr>
              <td bgcolor='#2CAB6A' style='padding: 30px 30px 30px 30px;'>
              <table border='0' cellpadding='0' cellspacing='0' width='100%'>
                <tr>
                <td style='color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;' width='75%'>
                  &reg; Copyright © 2018 Todos Los Derechos Reservados.<br/>
                  Powered By <a href='#' style='color: #ffffff;'><font color='#ffffff'>En AlgunLugar</font></a>.
                </td>
                <td align='right' width='25%'>
                  <table border='0' cellpadding='0' cellspacing='0'>
                  <tr>
                    <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                    <a href='https://twitter.com/motoraid_adv' style='color: #ffffff;'>
                      <img src='https://vignette.wikia.nocookie.net/cartoonnetwork/images/6/6f/Icon-twitter.png/revision/latest?cb=20170828165305&path-prefix=es' alt='Twitter' width='38' height='38' style='display: block;' border='0' />
                    </a>
                    </td>
                    <td style='font-size: 0; line-height: 0;' width='20'>&nbsp;</td>
                    <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                    <a href='https://es-la.facebook.com/MotoRaidAdventure/' style='color: #ffffff;'>
                      <img src='http://cjalacant.org/wp-content/uploads/ICONCRAZE-COM-Facebook-Icon-PNG.png' alt='Facebook' width='41' height='41' style='display: block;' border='0' />
                    </a>
                    </td>
                    <td style='font-size: 0; line-height: 0;' width='20'>&nbsp;</td>
                    <td style='font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;'>
                    <a href='https://www.instagram.com/motoraidadventure/?hl=es' style='color: #ffffff;'>
                      <img src='https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-circle-512.png' alt='Facebook' width='38' height='38' style='display: block;' border='0'/>
                    </a>
                    </td>
                  </tr>
                  </table>
                </td>
                </tr>
              </table>
              </td>
            </tr>
            </table>
          </td>
          </tr>
        </table>
        </body>
      </html>
      <br/>";
    $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 
    //Si el mensaje se envía muestra el mensaje de enviado
      '<div class="modal fade" id="respuesta2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="alert alert-success alert-dismissable">
            <button type="button" class="close" data-dismiss="modal">×</button>
            <strong>Su Cotizacion ha sido enviada correctamente.</strong>
          </div>    
        </div>
      </div>';
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

