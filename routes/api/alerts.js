const router = require('express').Router();
const alertController = require('./../../controllers/alertController');

// match with /api/alert
router.route('/')
    .get(alertController.findAll)
    
router.route('/:id')
    .get(alertController.findById)
    .delete(alertController.delete)

module.exports = router;