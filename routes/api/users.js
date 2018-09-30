const express = require('express');
const router = express.Router();

// @route   GET api/user/test
// @desc    Tests Users Router
// @access  Public
router.get('/test', (req, res) => res.json({
    message: `Users works`
}));


module.exports = router;