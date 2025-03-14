require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const emailTemplates = {
    "template_8013y2p": {
        subject: "New Message from {from_name}",
        text: "Hello Kaushik,\n\nYou have a new message from {from_name} ({email}):\n\n{message}",
    }
};

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,  // Now secure
        pass: process.env.EMAIL_PASS,  // Now secure
    },
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
