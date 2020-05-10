require ('dotenv').config(); //Permite usar un env local, asi los datos sensibles como la info
                             //del login de la base de datos o las api no se muestran en el codigo
                             //fuente

const { Router } = require('express');
const router = Router();//crea rutas url y las vincula con las funciones ya creadas


//
const { getUsers, getUsersByID, createUsers, updateUsers, deleteUsers, getCuenta,
    getCuentaByTel, createCuentaTrabajador, createCuentaUsuario, createLaborTrabajador, postLogin } = require('../controllers/index.controller')

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
router.post('/cuenta/login',postLogin);


module.exports = router;
