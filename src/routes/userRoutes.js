const express = require('express');
const authMiddleware = require('../middleware/authMiddleware.js');
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController.js');

const router = express.Router();

router.get('/', getUsers);
router.get('/:id', authMiddleware, getUser);
router.post('/',  createUser);
router.put('/:id', authMiddleware, updateUser);
router.delete('/:id', authMiddleware, deleteUser);

module.exports = router;