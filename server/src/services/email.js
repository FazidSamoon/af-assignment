import { MAIL_CREDENTIALS } from '../utils/config';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: 'vpstore451@gmail.com',
        pass: 'enngdaqsxncrlnuk'
    }
});

export const sendMail = async (email, body) => {
    const mailOptions = {
        from: MAIL_CREDENTIALS.USER,
        to: email,
        subject: "Thank you for contacting us!",
        html: body
    };
    return new Promise((resolve, reject) => {
        transport.sendMail(mailOptions, (error) => {
            if (error) {
                reject(error);
            }
            resolve(true);
        });
    });
};
