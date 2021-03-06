import nodeMailer from 'nodemailer'


const sendEmail=async(options)=>{
  
    const transporter=nodeMailer.createTransport({
        host:process.env.SMPT_HOST,
        port:process.env.SMPT_PORT,
        service:process.env.SMPT_SERVICE,
        auth:{  
            user:process.env.SMPT_MAIL,
            pass:process.env.SMPT_PASSWORD,
        }
    })
    // console.log(transporter)
    const mailOptions={
        from:process.env.SMPT_MAIL,
        to:options.email,
        subejct:options.subejct,
        text:options.message,
    }
    // console.log(mailOptions);
    await transporter.sendMail(mailOptions)
}

export default sendEmail