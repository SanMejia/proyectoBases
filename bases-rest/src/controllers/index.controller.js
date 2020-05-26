const { pool, bcrypt } = require('./bd.controller');
const passport = require('passport');


//Peticiones Get

///Get Cuenta


const getCuenta = async (req,res) => {
    const response = await pool.query('select * from cuenta');
    res.status(200).json(response.rows);

};

const getCuentaByTel = async (req,res) => {
    const response = await pool.query('select * from cuenta where telefono = $1',[req.params.tel]);
    res.status(200).json(response.rows);

};

///Gets Trabajador
const getTrabajadorByTel = async (req,res) => {
    const response = await pool.query('select * from verinfotrabajador where telefono = $1',
    [req.params.tel]);
    res.status(200).json(response.rows);

};

const getTrabajadorLaboresByTel = async (req,res) => {

    const response = await pool.query('select * from trabajador_labor where trabajador_telefono = $1',
    [req.params.tel]);

    res.status(200).json(response.rows);

};

//const getTrabajadorPuedeRealizarLabor = async (req,res) => {

  //  const response = await pool.query('select * from trabajador_labor where trabajador_telefono = $1',
  //  [req.params.id]);

  //  res.status(200).json(response.rows);

//};

///Gets Usuario
const getUsuarioByTel = async (req,res) => {
    const response = await pool.query('select * from usuario where telefono = $1',[req.params.tel]);
    res.status(200).json(response.rows);

};
/// Get UsuarioActual
const getUsuarioActualByTel = async (req,res) => {
    const response = await pool.query('select * from usuarioActual where telefono = $1',[req.params.tel]);
    res.status(200).json(response.rows);

};
///Gets Labores

const getLaborById = async (req,res) => {
    const response = await pool.query('select * from labor where id_labor = $1',[req.params.id]);
    res.json(response.rows);
};

const getTipoLabor = async (req,res) => {

    const response = await pool.query('select * from tipo_labor');

    res.status(200).json(response.rows);

};


const getLaboresByTipo = async (req,res) => {

    const response = await pool.query('select * from labor where id_tipo = $1',
    [req.params.id]);

    res.status(200).json(response.rows);

};
//Fin gets

//Peticiones Post

///Crear cuenta Trabajador
const createCuentaTrabajador= async (req,res) => {
  const { telefono, pass, tipo, email, cc, name, estrellas, disponible, perfil, documento, direccion } = req.body;
  const sql = 'insert into trabajador values ($1, $2, $3, $4, $5, '+ direccion +' , $6, $7)';
  const salt = await bcrypt.genSalt(10);
  const passcr = await bcrypt.hash(pass, salt);
  const response1 = await pool.query('insert into cuenta values ($1, $2, $3, $4)',[telefono, passcr, tipo, email]);
  const response2 = await pool.query(sql ,
                  [cc, name, estrellas, disponible, telefono, perfil, documento]);
  const response3 = await pool.query('insert into cuenta_trabajador values ($1, $1)',[telefono]);
  console.log(response1);
  //bcrypt.compare(pass,passbd);
  console.log(response2);
  console.log(response3);
  res.json({
      message: 'trabajador  agregado',
      body: {
          user: {telefono, passcr}
      }
  });

};

///Crear cuenta Usuario
const createCuentaUsuario= async (req,res) => {
  const { telefono, pass, tipo, email, name, mpago, recibo, direccion } = req.body;
  const sql = 'insert into usuario values ($1, $2, $3, '+ direccion +' , $4)';
  const salt = await bcrypt.genSalt(10);
  const passcr = await bcrypt.hash(pass, salt);
  const response1 = await pool.query('insert into cuenta values ($1, $2, $3, $4)',[telefono, passcr, tipo, email]);
  const response2 = await pool.query(sql ,
                  [name, telefono, mpago, recibo]);
  const response3 = await pool.query('insert into cuenta_usuario values ($1, $1)',[telefono]);
  console.log(req.body);
  console.log(response1);
  console.log(response2);
  console.log(response3);
  res.json({
      message: 'usuario agregado',
      body: {
          user: {telefono, passcr}
      }
  });

};

///Crear Labor Trabajador

const createLaborTrabajador= async (req,res) => {
  const { telefono, labor, unidad, descripcion } = req.body;
  const response1 = await pool.query('insert into Trabajador_Labor values ($1, $2, $3, $4)',
  [telefono, labor, unidad, descripcion]);
  console.log(response1);

  res.json({
      message: 'labor agregada',
      body: {
          user: {telefono, unidad, descripcion}
      }
  });

};

///Crear sesion usuario(login)

const postLogin= passport.authenticate('login');

const success = async (req,res) => {

    res.send(req.user);

};

const fail = async (req,res) => {
  res.send("fallo");
};


module.exports = {
    getCuenta,
    getCuentaByTel,
    getTrabajadorByTel,
    getTrabajadorLaboresByTel,
    createCuentaTrabajador,
    createCuentaUsuario,
    createLaborTrabajador,
    getUsuarioByTel,
    getUsuarioActualByTel,
    postLogin,
    success,
    fail
}
