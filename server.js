import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const router = express.Router();

// Your existing code remains unchanged
// ...

// Example usage of the imported modules
const app = express();
app.use(cors());

const transporter = nodemailer.createTransport({
  // your nodemailer configuration
});

// your routes and other code using the router
// ...

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
