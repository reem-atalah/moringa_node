const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('index', {
        title: 'Home',
        css: 'indexStyle'
    })
});

module.exports = router;