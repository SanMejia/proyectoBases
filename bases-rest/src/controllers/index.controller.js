const { Pool } = require('pg');
const bcrypt = require('bcryptjs');


const pool = new Pool({
    host: process.env.hostbd,
    user: process.env.userbd,
    password: process.env.passwordbd,
    database: process.env.databasebd,
});


const getUsers = async (req,res) => {
    const response = await pool.query('select * from users');
    res.status(200).json(response.rows);
    console.log(response.rows);
};

const getCuenta = async (req,res) => {
    const response = await pool.query('select * from cuenta');
    res.status(200).json(response.rows);

};

const getCuentaByTel = async (req,res) => {
    const response = await pool.query('select * from cuenta where telefono = $1',[req.params.id]);
    res.status(200).json(response.rows);

};

const getUsersByID = async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('select * from users where id = $1',[id]);
    res.json(response.rows[0].id);
}

const createUsers= async (req,res) => {
  const { name, email } = req.body;

  const response = await pool.query('insert into users (name, email) values ($1, $2)',[name, email]);
  console.log(response);
  res.json({
      message: 'usuario agregado',
      body: {
          user: {name, email}
      }
  })

};

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

const postLogin= async (req,res) => {
  const { user, pass } =req.body;

  if(Number.isInteger(user)){
    const response1 = await pool.query('select * from cuenta where telefono = $1',[user]);
    if(response1.rowCount){
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      console.log(pass);
      console.log(password);
      console.log(valor);
      if(valor){
        res.send('exito');
      }
      else{
        res.send('fracaso')
      }
    }
    else{
      res.send('no existe ese tel')
    }

  }

  else{
    const response1 = await pool.query('select * from cuenta where email = $1',[user]);
    if(response1.rowCount){
      const password = response1.rows[0].password;
      const valor = await bcrypt.compare(pass, password);
      console.log(pass);
      console.log(password);
      console.log(valor);
      if(valor){
        res.send('exito');
      }
      else{
        res.send('fracaso')
      }
    }
    else{
      res.send('no existe ese email')
    }

  }

};

const createCuentaUsuario= async (req,res) => {
  const { telefono, pass, tipo, email, name, mpago, recibo, direccion } = req.body;
  const sql = 'insert into usuario values ($1, $2, $3, '+ direccion +' , $4)';
  const response1 = await pool.query('insert into cuenta values ($1, $2, $3, $4)',[telefono, pass, tipo, email]);
  const response2 = await pool.query(sql ,
                  [name, telefono, mpago, recibo]);
  const response3 = await pool.query('insert into cuenta_usuario values ($1, $1)',[telefono]);
  console.log(response1);

  console.log(response2);
  console.log(response3);
  res.json({
      message: 'usuario agregado',
      body: {
          user: {telefono, pass}
      }
  });

};

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

const updateUsers= async (req,res) => {
    const id = req.params.id;
    const { name, email } = req.body;
    const response = await pool.query('update users set name = $1, email = $2 where id = $3', [name, email, id]);
    console.log(id, name, email);
    res.send('user actualizado')
};

const deleteUsers= async (req,res) => {
    const id = req.params.id;
    const response = await pool.query('delete from users where id = $1', [id]);
    console.log(response);
    res.json(`User ${id} eliminado satisfactoriamente`);
};

module.exports = {
    getUsers,
    getUsersByID,
    createUsers,
    updateUsers,
    deleteUsers,
    getCuenta,
    getCuentaByTel,
    createCuentaTrabajador,
    createCuentaUsuario,
    createLaborTrabajador,
    postLogin
}
