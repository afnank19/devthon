import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 587,
 secure: false,
 auth: {
  user: "sharjeelh6451@gmail.com",
  pass: "jvwp imvf anco bekf",
 },
});
export var enrollText = `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 10px; overflow: hidden;">
<div style="background-color: #007BFF; padding: 20px; text-align: center;">
    <h1 style="color: #fff; margin: 0;">New Enrollment</h1>
</div>
<div style="padding: 20px; background-color: #f9f9f9;">
    <h2 style="color: #333;">Congrats on your new enrollment</h2>
    <p style="color: #555; font-size: 16px; line-height: 1.6;">
        You've successfully enrolled in a new course.
    </p>
    <div style="text-align: center; margin: 30px 0;">
        
    </div>
   
    <p style="color: #007BFF; font-size: 14px; word-break: break-all;">
    </p>
</div>
<div style="background-color: #007BFF; padding: 10px; text-align: center;">
    <p style="color: #fff; margin: 0;">&copy; 2024 OVT</p>
</div>
</div> `;

export default transporter;
