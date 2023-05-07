import Express from "express";
import { sendMail } from "../services/email";
import Email from "../models/email.models";

const emailRouter = Express.Router();

emailRouter.post("/send", async (req, res) => {
  const { email, concern, country, name } = req.body;
  const body = ` 
        <h1>Thank you for contacting us!</h1>
        <p>We will get back to you as soon as possible.</p>
        <p>Have a great day!</p>
    `;
  await sendMail(email, body)
    .then(() => {
      res.status(200).json({ message: "Email sent" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

  Email.create({ email, concern, country, name });
});

export default emailRouter;
