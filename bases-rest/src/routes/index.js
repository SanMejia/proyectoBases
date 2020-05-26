
const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const {  getCuenta,  getCuentaByTel, createCuentaTrabajador, createCuentaUsuario,
   createLaborTrabajador,  getUsuarioByTel, getUsuarioActualByTel ,postLogin, success, fail } = require('../controllers/index.controller')


router.get('/cuenta',getCuenta);
router.get('/cuenta/:id',getCuentaByTel);
router.post('/cuenta/creart', createCuentaTrabajador);
router.post('/cuenta/crearu', createCuentaUsuario);
router.post('/trabajador/labor/crear',createLaborTrabajador);
router.post('/usuario/obteneri/:tel', getUsuarioByTel);
router.get('/success',success);
router.get('/fail',fail);

router.post('/usuarioActual/obteneri/:tel', getUsuarioActualByTel);
router.post('/cuenta/login',postLogin,function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send(req.user);
  });


module.exports = router;
