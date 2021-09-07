const dotenv = require('dotenv')
const firebase = require('../db')
const sgMail = require('@sendgrid/mail')

const Guest = require('../models/guest')
const firestore = firebase.firestore()

dotenv.config()

const {
  APP_KEY_SENDGRID
} = process.env

sgMail.setApiKey(APP_KEY_SENDGRID)

const getHomePage = require('../views/home')
const getEmailTemplate = require('../views/email')
const getThankYouPage = require('../views/thankyou')

exports.getHome = (req, res, next) => res.send(getHomePage())

exports.getThankYou = (req, res, next) => res.send(getThankYouPage())

exports.sendMail = (req, res, next) => {
    console.log(req.body)
    const {name, company, email, phone, message} = req.body
    const msg = {
        to: email, // Change to your recipient
        from: 'contact@brwinc.xyz', 
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: getEmailTemplate(),
      }
      
      sgMail
      .send(msg)
      .then(async (response) => {
        console.log('Mail was Sent')
        try {
            const data = {
                name,
                company,
                email,
                phone,
                message
            }
            await firestore.collection('guest').doc().set(data)
            console.log('Record saved successfuly')
            
            const msgToMyself = {
              to: 'peter.giurgiu@gmail.com', // Change to your recipient
              from: 'contact@brwinc.xyz', 
              subject: `${name} just sign for....`,
              text: 'and easy to do anywhere, even with Node.js',
              html: `<h1>${email}</h1>
              <h1>${name}</h1>
              <h1>${company}</h1>
              <h1>${phone}</h1>
              <h1>${message}</h1>
              `,
            }
            
            sgMail
            .send(msgToMyself)
            .then(async (response) => {
              console.log('Mail was sent to you!')
              
            })
            .catch((error) => {
              console.error(error)
            })

            res.redirect('/thankyou')
    
        } catch (error) {
            console.log(error.message)
        }
      })
      .catch((error) => {
        console.error(error)
      })

}
