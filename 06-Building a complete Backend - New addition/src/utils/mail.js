import Mailgen from "mailgen";
import nodemailer from "nodemailer";



const sanedEmail = async (options) => {
    const mailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Task Manager",
            link: "https://taskmanagerlink.com",
        },
    })

    const eamilTextual = mailGenerator.generatePlaintext(
        options.mailgencontent
    )

    const eamilHtml = mailGenerator.generate(
        options.mailgencontent
    )

    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST || process.env.MAIL_TRAP_SMTP_HOST,
        port: Number(process.env.SMTP_PORT || process.env.MAIL_TRAP_SMTP_PORT),
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.SMTP_USER || process.env.MAIL_TRAP_SMTP_USER,
            pass: process.env.SMTP_PASS || process.env.MAIL_TRAP_SMTP_PASS
        }
    })

    const mail={
        from:"mail.taskmanager@example.com",
        to: options.email,
        subject: options.subject,
        text: eamilTextual,
        html: eamilHtml
    }

    try{
        const info = await transporter.sendMail(mail)
        console.log("Email sent:", info.messageId)
        return info
    }catch(error){
        console.error("Error sending email:", error);
        throw error;
    }
    
    
}


const emailVerificationMailgenContent = (userName, verificationLink) => {
    return {
        body: {
            name: userName,
            intro: "Welcome to our app! Please verify your email address by clicking the button below.",
            action: {
                instructions: "Click the button to verify your email:",
                button: {
                    color: "#22BC66",
                    text: "Verify Email",
                    link: verificationLink
                },
            },
            outro: "If you did not create an account, please ignore this email."
        }
    };
}


const forgotPasswordMailgenContent = (userName, resetLink) => {
    return {
        body: {
            name: userName,
            intro: "You have requested to reset your password. Please click the button below to proceed.",
            action: {
                instructions: "Click the button to reset your password:",
                button: {
                    color: "#FF0000",
                    text: "Reset Password",
                    link: resetLink
                },
            },
            outro: "If you did not request a password reset, please ignore this email."
        }
    };
}


export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent,
    sanedEmail
}