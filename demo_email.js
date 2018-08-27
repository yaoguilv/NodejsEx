var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: 'qqNumber@qq.com',
        pass: 'mypassword'
    }
});

var mailOptions = {
    from: 'qqNumber@qq.com',
    to: 'yourSinaName@sina.com, yaoOtherName@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy'
};

transporter.sendMail(mailOptions, function(error, info){
    if(error) {
        console.log(error);
    }
    else
    {
        console.log('Email sent: ' + info.response);
    }
});
