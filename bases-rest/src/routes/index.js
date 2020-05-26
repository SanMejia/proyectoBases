
const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const {  getCuenta,  getCuentaByTel, createCuentaTrabajador, createCuentaUsuario,
<<<<<<< HEAD
   createLaborTrabajador,  getUsuarioByTel, getUsuarioActualByTel ,postLogin, success, fail } = require('../controllers/index.controller')
=======
   createLaborTrabajador,  getUsuarioByTel, getUsuarioActualByTel, getTrabajadorActualByTel ,postLogin } = require('../controllers/index.controller')
>>>>>>> ab1687eb87e0e056f6fe87162ef1eb1e03b9efdf


router.get('/cuenta',getCuenta);
router.get('/cuenta/:id',getCuentaByTel);
router.post('/cuenta/creart', createCuentaTrabajador);
router.post('/cuenta/crearu', createCuentaUsuario);
router.post('/trabajador/labor/crear',createLaborTrabajador);
<<<<<<< HEAD
router.post('/usuario/obteneri/:tel', getUsuarioByTel);
router.get('/success',success);
router.get('/fail',fail);

router.post('/usuarioActual/obteneri/:tel', getUsuarioActualByTel);
router.post('/cuenta/login',postLogin,function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.send(req.user);
  });
=======
router.get('/usuario/obteneri/:tel', getUsuarioByTel);
router.get('/usuarioActual/obteneri/:tel', getUsuarioActualByTel);
router.get('/trabajadorActual/obteneri/:tel', getTrabajadorActualByTel);
router.post('/cuenta/login',postLogin);
>>>>>>> ab1687eb87e0e056f6fe87162ef1eb1e03b9efdf


module.exports = router;
