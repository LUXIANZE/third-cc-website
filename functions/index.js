const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// build multiple CRUD interfaces:
// Send mail to support when user submit form in customer page
// AUTH config https://firebase.google.com/docs/functions/config-env
app.post('/supportEmail', (req, res) => {
    const {mail, name, inquiry, company} = req.body;
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        service: 'gmail',
        secure: "false",
        port: 587,
        auth: {
            user: functions.config().supportcontact.email,
            pass: functions.config().supportcontact.cred,
        },
        tls: {
            // do not fail on invalid certs
            rejectUnauthorized: false
        }
    });

    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
        from: mail, // Something like: Jane Doe <janedoe@gmail.com>
        to: "3rdcc1819@gmail.com",
        subject: "Third CC Website Enquiry", // email subject
        name: name,
        text: `Email: ${mail}\nName: ${name}\nInquiry Message: ${inquiry}` // email content in HTML
    };

    // returning result
    transporter.sendMail(mailOptions, (erro, info) => {
        if(erro){
            return res.send(erro.toString());
        }
        return res.send('Sended');
    });   
});

// Expose Express API as a single Cloud Function:
exports.widgets = functions.https.onRequest(app);