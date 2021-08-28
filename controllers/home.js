const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const getHomePage = require('../views/home')

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
    }
})



exports.getHome = (req, res, next) => res.send(getHomePage())

exports.sendMail = (req, res, next) => {
    console.log(req.body)
    res.redirect('/')

    let mailOptions = {
        from: "Petru Giurgiu <peter.giurgiu@gmail.com>", 
        to: req.body.email,
        subject: "Testing 2 mails",
        text: "Let's see if it's working"
    }
    
    transporter.sendMail(mailOptions, (err, success) => {
         if(err) {
             console.log(err)
         } else {
            console.log('Email was sent!') 
            transporter.sendMail({
                from: 'Petru Giurgiu <peter.giurgiu@gmail.com>',
                to: 'peter.giurgiu@gmail.com',
                subject: 'Is it working?',
                text: 'Hello!'
            }, (err, success) => {
                if(err) {
                    console.log(err)
                } else {
                    console.log('Email was sent to the other guy as well!!!')
                }
            })
         }
    }) 
}