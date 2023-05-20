import Express from "express";
import { sendMail } from "../services/email";
import Email from "../models/email.models";
import { makeResponse } from "../utils/response";
import { badRequest } from "../errors/badRequest";

const emailRouter = Express.Router();

emailRouter.post("/send", async (req, res) => {
  const { email, concern, country, name } = req.body;
  const body = ` 
        <h1>Thank you for contacting us!</h1>
        <p>We will get back to you as soon as possible.</p>
        <p>Have a great day!</p>
    `;
  await sendMail(email, body)
    .then(async () => {
      await Email.create({ email, concern, country, name });
      res.status(200).json({ message: "Email sent" });
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });

  // Email.create({ email, concern, country, name });
});

emailRouter.get("/get", async (req, res) => {
  try {
    const response = await Email.find();
    if (!response)
      makeResponse({ res, status: 500, message: "No blogs found" });
    makeResponse({ res, status: 200, data: response, message: "Blogs found" });
  } catch (error) {
    throw new badRequest(error.message);
  }
});

export default emailRouter;
