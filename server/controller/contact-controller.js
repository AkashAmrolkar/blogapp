import { Contact } from "../models/contact.js";
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config()

export const saveContact = async(req, res) =>{
    try {
        const {fullname, email, message} = req.body;
        const newContact = new Contact({
            fullname, email, message
        })
        await newContact.save();
        console.log(newContact)
        const createTransport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        })

        const userMailOptions = {
            from: process.env.FROM,
            to: email,
            subject: 'Thank you for contacting us',
            text: `Hello ${fullname},\n\n We appreciate that you've taken the time to write us. We'll get back to you very soon.\n\nBest regards,\nAkash Amrolkar`,
        }
        const ownerMailOptions = {
            from: process.env.FROM,
            to: process.env.AUTH_EMAIL,
            subject: 'New contact form submission',
            text: `Name: ${fullname}\nEmail: ${email}\nMessage: ${message}`,
        }
        try {
            await createTransport.sendMail(userMailOptions);
            await createTransport.sendMail(ownerMailOptions);
            res.status(200).send('Form submitted successfully!');
          } catch (error) {
            console.error('Error sending emails:', error);
            res.status(500).send('Internal Server Error');
          }
        return res.status(201).json({ newContact })

    } catch (error) {
        console.log(error)
    }
}