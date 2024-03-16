import EmailModel from "../models/EmailModel.js";
import nodemailer from "nodemailer"


// Nodemailer setup
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "your_email@gmail.com",
        pass: "your_pass"
    }
});

export const CreateSubscription = async (req, res) => {


    try {
        // Save data to MongoDB
        const newEmail = await EmailModel(req.body);
        await newEmail.save();

        // Send email
        await transporter.sendMail({
            from: 'Your_email@gmail.com',
            to: req.body.email,
            subject: 'Subject of your email',
            text: req.body.message
        });

        res.status(200).send('Email sent successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error sending email');
    }
}