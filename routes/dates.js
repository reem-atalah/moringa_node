const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('dates', {
        title: 'Dates',
        css: 'dates'
    })
});

module.exports = router;