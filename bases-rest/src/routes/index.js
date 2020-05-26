 
const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const {  getCuenta,  getCuentaByTel, createCuentaTrabajador, createCuentaUsuario,
   createLaborTrabajador,  getUsuarioByTel, getUsuarioActualByTel, getTrabajadorActualByTel ,postLogin } = require('../controllers/index.controller')


router.get('/cuenta',getCuenta);
router.get('/cuenta/:id',getCuentaByTel);
router.post('/cuenta/creart', createCuentaTrabajador);
router.post('/cuenta/crearu', createCuentaUsuario);
router.post('/trabajador/labor/crear',createLaborTrabajador);
router.get('/usuario/obteneri/:tel', getUsuarioByTel);
router.get('/usuarioActual/obteneri/:tel', getUsuarioActualByTel);
router.get('/trabajadorActual/obteneri/:tel', getTrabajadorActualByTel);
router.post('/cuenta/login',postLogin);


module.exports = router;
