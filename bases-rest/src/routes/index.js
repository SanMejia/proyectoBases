require ('dotenv').config(); 
const { Router } = require('express');
const router = Router();

const { getUsers, getUsersByID, createUsers, updateUsers, deleteUsers, getCuenta,
    getCuentaByTel, createCuentaTrabajador, createCuentaUsuario, createLaborTrabajador } = require('../controllers/index.controller')

router.get('/users', getUsers);//pruebas y modelos
router.get('/users/:id',getUsersByID);
router.post('/users', createUsers);
router.delete('/users/:id', deleteUsers);
router.put('/users/:id', updateUsers);//pruebas y modelos
router.get('/cuenta',getCuenta);
router.get('/cuenta/:id',getCuentaByTel);
router.post('/cuenta/creart', createCuentaTrabajador);
router.post('/cuenta/crearu', createCuentaUsuario);
router.post('/trabajador/labor/crear',createLaborTrabajador);


module.exports = router;
