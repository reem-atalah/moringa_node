const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('certificate', {
        title: 'Certificate',
        css: 'certificate_style'
    })
});

module.exports = router;