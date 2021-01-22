const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('about_us', {
        title: 'About Us',
        css: 'about_us_style'
    })
});

module.exports = router;