const router = require('express').Router();

router.get('/', (req, res) => {
    return res.render('visit');
});

module.exports = router;