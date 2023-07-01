var express = require('express');
var router = express.Router();
var apiU = require('../controllers/api/api-users');
router.get('/users',apiU.listUsers);
router.post('/users',apiU.addUsers);
router.get('/users/:iduser',apiU.listUsers);
router.put('/users/:iduser',apiU.Updateuser);
router.delete('/users/:iduser',apiU.deleteUser);
module.exports = router;