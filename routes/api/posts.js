const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Tests Post Router
// @access  Public
router.get('/test', (req, res) => res.json({
    message: `Posts works`
}));


module.exports = router;