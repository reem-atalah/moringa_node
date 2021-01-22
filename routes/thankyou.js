const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('thankyou', {
        title: 'Thank You !',
        css: 'thank_style'
    })
});

module.exports = router;