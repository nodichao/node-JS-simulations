var nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'josephhenrinodichao@gmail.com',
        pass: ''
    }
});


let mailOptions = {
    from: 'josephhenrinodichao@gmail.com',
    to: 'natachanodichao@gmail.com',
    subject: 'Test d\'e-mail avec Nodemailer',
    text: 'Ceci est un test d\'e-mail envoyé avec Nodemailer.'
};


transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Erreur lors de l\'envoi de l\'e-mail :', error);
    } else {
        console.log('E-mail envoyé avec succès :', info.response);
    }
});