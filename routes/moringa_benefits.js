const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('moringa_benefits', {
        title: 'Moringa Benefits',
        css: 'benefits'
    })
});

module.exports = router;