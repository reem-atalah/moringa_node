process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 1;
const router = require('express').Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
    return res.render('contact_us', {
        title: 'Contact Us',
        css: 'contact_style'
    })
});

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', //smtp.gmail.com
    port: 587,
    secure: true,
    auth: {
        user: 'reem.atalah1@gmail.com',
        pass: 'reemreem12345'
    }
});

// // POST contact us page
router.post('/', async (req, res) => {
    try {
        await transporter.sendMail({
            from: `${req.body.name} < ${req.body.email}>`,
            to: `reem.atalah1@gmail.com , emadatala@yahoo.com `,
            // from: `${req.body.username} < ${req.body.username}>`, // sender address
            // to: "mennaahmedali77@gmail.com, reem.atalah1@gmail.com", // list of receivers
            subject: `${req.body.subject}`, // Subject line
            text: `${req.body.message}` // plain text body
            
        })
    } catch (err) {
        console.log(err)

    }
    req.flash('success', 'Your message has been sent successfully!');
    res.redirect('/contact_us');

});

module.exports = router;