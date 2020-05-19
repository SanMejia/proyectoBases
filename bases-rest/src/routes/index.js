 
const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const {  getCuenta,  getCuentaByTel, createCuentaTrabajador, createCuentaUsuario,
   createLaborTrabajador, postLogin } = require('../controllers/index.controller')


router.get('/cuenta',getCuenta);
router.get('/cuenta/:id',getCuentaByTel);
router.post('/cuenta/creart', createCuentaTrabajador);
router.post('/cuenta/crearu', createCuentaUsuario);
router.post('/trabajador/labor/crear',createLaborTrabajador);
router.post('/cuenta/login',postLogin);


module.exports = router;
