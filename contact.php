<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Asegúrate de tener PHPMailer instalado

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $nombre = htmlspecialchars(trim($_POST["nombre"] ?? ''));
    $apellido = htmlspecialchars(trim($_POST["apellido"] ?? ''));
    $email = htmlspecialchars(trim($_POST["email"] ?? ''));
    $mensaje = htmlspecialchars(trim($_POST["mensaje"] ?? ''));

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "⚠️ Correo inválido.";
        exit;
    }

    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor SMTP de Gmail
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'mayorkingdesign@gmail.com';
        $mail->Password   = 'ihtvouxjhryomdxy'; // contraseña de aplicación sin espacios
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Remitente y destinatario
        $mail->setFrom('mayorkingdesign@gmail.com', 'Mayorking Design');
        $mail->addAddress('mayorkingdesign@gmail.com'); // Puedes cambiarlo si deseas

        // Contenido
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje desde MayorkingDesign.com';
        $mail->Body    = "Nombre: $nombre $apellido
Correo: $email

Mensaje:
$mensaje";

        $mail->send();
        echo "✅ Tu mensaje fue enviado correctamente. ¡Gracias por contactarnos, $nombre!";
    } catch (Exception $e) {
        echo "❌ Error al enviar el mensaje. Error: {$mail->ErrorInfo}";
    }
} else {
    http_response_code(405);
    echo "Método no permitido";
}
?>
